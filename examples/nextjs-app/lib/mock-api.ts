// Mock API functions for demonstrating API actions in rupa

export interface MockApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const mockApi = {
  // User operations
  async getUser(userId: string): Promise<MockApiResponse> {
    await delay(500);
    return {
      data: {
        id: userId,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
      },
      status: 200,
    };
  },

  async updateUser(userId: string, data: any): Promise<MockApiResponse> {
    await delay(800);
    return {
      data: { id: userId, ...data },
      status: 200,
      message: 'User updated successfully',
    };
  },

  async deleteUser(userId: string): Promise<MockApiResponse> {
    await delay(600);
    return {
      data: { id: userId },
      status: 200,
      message: 'User deleted successfully',
    };
  },

  // Product operations
  async getProducts(filters?: any): Promise<MockApiResponse> {
    await delay(700);
    return {
      data: [
        {
          id: '1',
          name: 'Wireless Headphones',
          price: 199.99,
          category: 'Electronics',
          inStock: true,
        },
        {
          id: '2',
          name: 'Smart Watch',
          price: 299.99,
          category: 'Electronics',
          inStock: true,
        },
      ],
      status: 200,
    };
  },

  async addToCart(productId: string, quantity: number = 1): Promise<MockApiResponse> {
    await delay(500);
    return {
      data: {
        productId,
        quantity,
        added: true,
      },
      status: 200,
      message: 'Product added to cart',
    };
  },

  // Analytics operations
  async getAnalytics(dateRange?: string): Promise<MockApiResponse> {
    await delay(600);
    return {
      data: {
        totalVisitors: 45231,
        pageViews: 142543,
        bounceRate: 32.4,
        avgSession: '4m 32s',
      },
      status: 200,
    };
  },

  // Form submissions
  async submitForm(formData: any): Promise<MockApiResponse> {
    await delay(1000);
    return {
      data: {
        id: `form-${Date.now()}`,
        ...formData,
        submitted: true,
      },
      status: 200,
      message: 'Form submitted successfully',
    };
  },

  // Settings operations
  async updateSettings(settings: any): Promise<MockApiResponse> {
    await delay(500);
    return {
      data: settings,
      status: 200,
      message: 'Settings updated successfully',
    };
  },

  // Generic API call handler
  async apiCall(url: string, method: string = 'GET', body?: any): Promise<MockApiResponse> {
    await delay(500);
    
    // Simulate different responses based on URL
    if (url.includes('/users')) {
      return {
        data: { users: [] },
        status: 200,
      };
    }
    
    if (url.includes('/products')) {
      return {
        data: { products: [] },
        status: 200,
      };
    }
    
    if (url.includes('/analytics')) {
      return {
        data: { analytics: {} },
        status: 200,
      };
    }
    
    // Default response
    return {
      data: { success: true },
      status: 200,
      message: 'Operation completed successfully',
    };
  },
};

// Helper function to create API action config for rupa
export function createApiAction(
  url: string,
  method: string = 'GET',
  body?: any,
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void
) {
  return {
    url,
    method,
    body,
    onSuccess,
    onError,
  };
}

// Mock API registry for rupa's API system
export const mockApiRegistry = {
  'get-user': async (params: any) => {
    return await mockApi.getUser(params.userId);
  },
  'update-user': async (params: any) => {
    return await mockApi.updateUser(params.userId, params.data);
  },
  'delete-user': async (params: any) => {
    return await mockApi.deleteUser(params.userId);
  },
  'get-products': async (params: any) => {
    return await mockApi.getProducts(params.filters);
  },
  'add-to-cart': async (params: any) => {
    return await mockApi.addToCart(params.productId, params.quantity);
  },
  'get-analytics': async (params: any) => {
    return await mockApi.getAnalytics(params.dateRange);
  },
  'submit-form': async (params: any) => {
    return await mockApi.submitForm(params.formData);
  },
  'update-settings': async (params: any) => {
    return await mockApi.updateSettings(params.settings);
  },
};

