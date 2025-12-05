/**
 * API endpoint configuration
 */
export interface ApiEndpointConfig {
  /**
   * Base URL for this API endpoint
   */
  baseUrl: string;
  
  /**
   * Default headers to include in all requests
   */
  defaultHeaders?: Record<string, string>;
  
  /**
   * Default timeout in milliseconds
   */
  defaultTimeout?: number;
  
  /**
   * Default credentials policy
   */
  defaultCredentials?: 'include' | 'omit' | 'same-origin';
  
  /**
   * Request interceptor (can modify request before sending)
   */
  requestInterceptor?: (config: any) => any | Promise<any>;
  
  /**
   * Response interceptor (can modify response)
   */
  responseInterceptor?: (response: any) => any | Promise<any>;
  
  /**
   * Error interceptor (can handle errors)
   */
  errorInterceptor?: (error: any) => any | Promise<any>;
}

/**
 * Registry for managing multiple API endpoints
 */
class ApiRegistry {
  private endpoints: Map<string, ApiEndpointConfig> = new Map();
  private defaultEndpoint: string | null = null;

  /**
   * Register an API endpoint
   */
  register(name: string, config: ApiEndpointConfig): void {
    this.endpoints.set(name, config);
    
    // Set as default if it's the first one
    if (this.defaultEndpoint === null) {
      this.defaultEndpoint = name;
    }
  }

  /**
   * Get an API endpoint configuration
   */
  get(name: string): ApiEndpointConfig | undefined {
    return this.endpoints.get(name);
  }

  /**
   * Check if an endpoint exists
   */
  has(name: string): boolean {
    return this.endpoints.has(name);
  }

  /**
   * Set the default API endpoint
   */
  setDefault(name: string): void {
    if (!this.endpoints.has(name)) {
      throw new Error(`API endpoint "${name}" is not registered`);
    }
    this.defaultEndpoint = name;
  }

  /**
   * Get the default API endpoint name
   */
  getDefault(): string | null {
    return this.defaultEndpoint;
  }

  /**
   * Get all registered endpoint names
   */
  getEndpoints(): string[] {
    return Array.from(this.endpoints.keys());
  }

  /**
   * Unregister an endpoint
   */
  unregister(name: string): boolean {
    const deleted = this.endpoints.delete(name);
    
    // If deleted endpoint was default, set new default
    if (deleted && this.defaultEndpoint === name) {
      const remaining = Array.from(this.endpoints.keys());
      this.defaultEndpoint = remaining.length > 0 ? remaining[0] : null;
    }
    
    return deleted;
  }

  /**
   * Clear all endpoints
   */
  clear(): void {
    this.endpoints.clear();
    this.defaultEndpoint = null;
  }

  /**
   * Initialize with multiple endpoints (useful for environment-based configs)
   */
  initialize(endpoints: Record<string, ApiEndpointConfig>, defaultEndpoint?: string): void {
    this.clear();
    
    Object.entries(endpoints).forEach(([name, config]) => {
      this.register(name, config);
    });
    
    if (defaultEndpoint) {
      this.setDefault(defaultEndpoint);
    }
  }
}

/**
 * Global API registry instance
 */
export const apiRegistry = new ApiRegistry();

/**
 * Initialize API registry with common endpoints
 * Can be called at app startup
 */
export function initializeApiEndpoints(
  endpoints: Record<string, ApiEndpointConfig>,
  defaultEndpoint?: string
): void {
  apiRegistry.initialize(endpoints, defaultEndpoint);
}

/**
 * Register a single API endpoint
 */
export function registerApiEndpoint(name: string, config: ApiEndpointConfig): void {
  apiRegistry.register(name, config);
}

