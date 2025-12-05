import { apiRegistry, ApiEndpointConfig } from './api-registry';

export interface ApiConfig {
  /**
   * API endpoint name (from registry) or full URL
   * If endpoint name is provided, it will use the base URL from registry
   */
  api?: string;
  
  /**
   * Full URL (used if api is not provided, or appended to base URL if api is provided)
   */
  url: string;
  
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  credentials?: 'include' | 'omit' | 'same-origin';
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

export interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
  data?: any;
}

/**
 * Build URL with query parameters
 */
function buildUrl(baseUrl: string, path: string, params?: Record<string, string | number | boolean>): string {
  // Ensure path starts with / if baseUrl doesn't end with /
  const fullPath = baseUrl.endsWith('/') || path.startsWith('/') 
    ? `${baseUrl}${path}` 
    : `${baseUrl}/${path}`;
  
  if (!params || Object.keys(params).length === 0) {
    return fullPath;
  }

  const urlObj = new URL(fullPath, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    urlObj.searchParams.append(key, String(value));
  });

  return urlObj.toString();
}

/**
 * Make an API call using fetch with registry support
 */
export async function apiCall<T = any>(config: ApiConfig): Promise<ApiResponse<T>> {
  let {
    api,
    url,
    method = 'GET',
    headers = {},
    body,
    params,
    timeout,
    credentials,
  } = config;

  // Resolve API endpoint from registry
  let endpointConfig: ApiEndpointConfig | undefined;
  let baseUrl = '';
  let finalUrl = '';

  if (api) {
    // Use API from registry
    endpointConfig = apiRegistry.get(api);
    if (!endpointConfig) {
      throw {
        message: `API endpoint "${api}" is not registered`,
        status: 0,
      } as ApiError;
    }
    
    baseUrl = endpointConfig.baseUrl;
    finalUrl = buildUrl(baseUrl, url, params);
    
    // Merge default headers from endpoint config
    headers = {
      ...endpointConfig.defaultHeaders,
      ...headers,
    };
    
    // Use endpoint defaults if not specified
    timeout = timeout ?? endpointConfig.defaultTimeout ?? 30000;
    credentials = credentials ?? endpointConfig.defaultCredentials ?? 'same-origin';
  } else {
    // Use full URL directly
    finalUrl = buildUrl('', url, params);
    timeout = timeout ?? 30000;
    credentials = credentials ?? 'same-origin';
  }

  // Prepare request options
  const requestOptions: RequestInit = {
    method,
    headers,
    credentials,
  };

  // Add body for non-GET requests
  if (body && method !== 'GET') {
    if (typeof body === 'string') {
      requestOptions.body = body;
    } else if (body instanceof FormData) {
      requestOptions.body = body;
      // Remove Content-Type header for FormData (browser will set it with boundary)
      delete (requestOptions.headers as Record<string, string>)['Content-Type'];
    } else {
      requestOptions.body = JSON.stringify(body);
    }
  }

  // Apply request interceptor if available
  if (endpointConfig?.requestInterceptor) {
    const intercepted = await endpointConfig.requestInterceptor({
      url: finalUrl,
      method,
      headers,
      body: requestOptions.body,
      ...requestOptions,
    });
    
    if (intercepted) {
      Object.assign(requestOptions, intercepted);
      if (intercepted.url) {
        finalUrl = intercepted.url;
      }
    }
  }

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  requestOptions.signal = controller.signal;

  try {
    const response = await fetch(finalUrl, requestOptions);
    clearTimeout(timeoutId);

    // Parse response
    let data: T;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = (await response.text()) as unknown as T;
    }

    // Apply response interceptor if available
    if (endpointConfig?.responseInterceptor) {
      data = await endpointConfig.responseInterceptor({
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }

    if (!response.ok) {
      const error: ApiError = {
        message: `API call failed: ${response.statusText}`,
        status: response.status,
        statusText: response.statusText,
        data,
      };

      // Apply error interceptor if available
      if (endpointConfig?.errorInterceptor) {
        const interceptedError = await endpointConfig.errorInterceptor(error);
        throw interceptedError || error;
      }

      throw error;
    }

    return {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      const timeoutError: ApiError = {
        message: `API call timed out after ${timeout}ms`,
        status: 408,
      };

      if (endpointConfig?.errorInterceptor) {
        const interceptedError = await endpointConfig.errorInterceptor(timeoutError);
        throw interceptedError || timeoutError;
      }

      throw timeoutError;
    }

    if (error.status) {
      if (endpointConfig?.errorInterceptor) {
        const interceptedError = await endpointConfig.errorInterceptor(error);
        throw interceptedError || error;
      }
      throw error;
    }

    const unknownError: ApiError = {
      message: error.message || 'API call failed',
      data: error,
    };

    if (endpointConfig?.errorInterceptor) {
      const interceptedError = await endpointConfig.errorInterceptor(unknownError);
      throw interceptedError || unknownError;
    }

    throw unknownError;
  }
}

/**
 * Convenience methods for common HTTP methods
 */
export const api = {
  get: <T = any>(url: string, config?: Omit<ApiConfig, 'url' | 'method'>) =>
    apiCall<T>({ ...config, url, method: 'GET' }),

  post: <T = any>(url: string, body?: any, config?: Omit<ApiConfig, 'url' | 'method' | 'body'>) =>
    apiCall<T>({ ...config, url, method: 'POST', body }),

  put: <T = any>(url: string, body?: any, config?: Omit<ApiConfig, 'url' | 'method' | 'body'>) =>
    apiCall<T>({ ...config, url, method: 'PUT', body }),

  patch: <T = any>(url: string, body?: any, config?: Omit<ApiConfig, 'url' | 'method' | 'body'>) =>
    apiCall<T>({ ...config, url, method: 'PATCH', body }),

  delete: <T = any>(url: string, config?: Omit<ApiConfig, 'url' | 'method'>) =>
    apiCall<T>({ ...config, url, method: 'DELETE' }),
};

/**
 * Execute API action with context support and API registry
 * Supports template strings in URL and body using context variables
 */
export async function executeApiAction(
  action: ApiActionConfig,
  context?: Record<string, any>
): Promise<ApiResponse> {
  // Replace template variables in URL
  let url = action.url;
  if (context) {
    url = url.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      return context[key] !== undefined ? String(context[key]) : '';
    });
  }

  // Replace template variables in body
  let body = action.body;
  if (body && context && typeof body === 'object') {
    body = JSON.parse(
      JSON.stringify(body).replace(/\{\{(\w+)\}\}/g, (_, key) => {
        return context[key] !== undefined ? context[key] : '';
      })
    );
  }

  const config: ApiConfig = {
    api: action.api, // API endpoint name from registry
    url,
    method: action.method || 'GET',
    headers: action.headers,
    body,
    params: action.params,
    timeout: action.timeout,
    credentials: action.credentials,
  };

  return apiCall(config);
}

/**
 * API Action Configuration (for use in layout system)
 */
export interface ApiActionConfig extends Omit<ApiConfig, 'url'> {
  /**
   * API endpoint name from registry (optional)
   * If provided, the url will be appended to the endpoint's base URL
   */
  api?: string;
  
  /**
   * URL path (relative if api is specified, absolute otherwise)
   */
  url: string;
  
  onSuccess?: (data: any, context: any) => void | Promise<void>;
  onError?: (error: any, context: any) => void | Promise<void>;
  loadingState?: string;
  dataState?: string;
  errorState?: string;
}

