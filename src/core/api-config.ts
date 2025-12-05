import { initializeApiEndpoints, ApiEndpointConfig } from '../utils/api-registry';

/**
 * Initialize API endpoints based on environment
 * This should be called at app startup
 */
export function initializeApis() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';

  const endpoints: Record<string, ApiEndpointConfig> = {
    // Main API
    main: {
      baseUrl: isDevelopment 
        ? 'http://localhost:3000/api'
        : 'https://api.example.com',
      defaultHeaders: {
        'Content-Type': 'application/json',
      },
      defaultTimeout: 30000,
      requestInterceptor: async (config) => {
        // Add auth token from localStorage or context
        const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
        if (token) {
          config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${token}`,
          };
        }
        return config;
      },
      errorInterceptor: async (error) => {
        // Handle 401 errors globally
        if (error.status === 401 && typeof window !== 'undefined') {
          // Redirect to login or refresh token
          window.location.href = '/login';
        }
        return error;
      },
    },

    // User service API
    users: {
      baseUrl: isDevelopment
        ? 'http://localhost:3001/api/users'
        : 'https://users-api.example.com',
      defaultHeaders: {
        'Content-Type': 'application/json',
      },
      defaultTimeout: 20000,
    },

    // Analytics API
    analytics: {
      baseUrl: isDevelopment
        ? 'http://localhost:3002/api'
        : 'https://analytics-api.example.com',
      defaultHeaders: {
        'Content-Type': 'application/json',
      },
      defaultTimeout: 60000, // Longer timeout for analytics
    },

    // File upload API
    upload: {
      baseUrl: isDevelopment
        ? 'http://localhost:3003/api'
        : 'https://upload-api.example.com',
      defaultHeaders: {
        // Don't set Content-Type for file uploads
      },
      defaultTimeout: 120000, // Longer timeout for uploads
    },

    // External third-party API
    external: {
      baseUrl: 'https://api.external-service.com',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.REACT_APP_EXTERNAL_API_KEY || '',
      },
    },
  };

  // Initialize with 'main' as default
  initializeApiEndpoints(endpoints, 'main');
}

// Auto-initialize if in browser environment
if (typeof window !== 'undefined') {
  initializeApis();
}

