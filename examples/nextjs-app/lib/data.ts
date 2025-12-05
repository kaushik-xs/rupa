// Hardcoded data for all scenarios

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  lastLogin: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  onSale: boolean;
  image?: string;
  rating: number;
  reviews: number;
}

export interface AnalyticsData {
  name: string;
  visitors: number;
  pageViews: number;
  bounceRate: number;
  revenue?: number;
  conversions?: number;
}

export interface TableRow {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActive: string;
  actions?: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
}

// User Data
export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2024-01-15',
    lastLogin: '2024-12-05',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'active',
    joinDate: '2024-02-20',
    lastLogin: '2024-12-04',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Moderator',
    status: 'active',
    joinDate: '2024-03-10',
    lastLogin: '2024-12-03',
  },
];

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Admin',
  status: 'active',
  joinDate: '2024-01-15',
  lastLogin: '2024-12-05',
};

// Product Data
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 199.99,
    category: 'Electronics',
    inStock: true,
    onSale: false,
    rating: 4.5,
    reviews: 234,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking and GPS',
    price: 299.99,
    category: 'Electronics',
    inStock: true,
    onSale: true,
    rating: 4.8,
    reviews: 567,
  },
  {
    id: '3',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for better posture',
    price: 49.99,
    category: 'Accessories',
    inStock: true,
    onSale: false,
    rating: 4.2,
    reviews: 89,
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with Cherry MX switches',
    price: 149.99,
    category: 'Electronics',
    inStock: true,
    onSale: true,
    rating: 4.6,
    reviews: 312,
  },
  {
    id: '5',
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
    price: 39.99,
    category: 'Accessories',
    inStock: true,
    onSale: false,
    rating: 4.3,
    reviews: 145,
  },
  {
    id: '6',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with long battery life',
    price: 29.99,
    category: 'Accessories',
    inStock: true,
    onSale: false,
    rating: 4.4,
    reviews: 278,
  },
  {
    id: '7',
    name: 'Monitor Stand',
    description: 'Adjustable dual monitor stand with cable management',
    price: 79.99,
    category: 'Accessories',
    inStock: false,
    onSale: false,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '8',
    name: 'Webcam HD',
    description: '1080p HD webcam with auto-focus and noise reduction',
    price: 69.99,
    category: 'Electronics',
    inStock: true,
    onSale: true,
    rating: 4.5,
    reviews: 423,
  },
  {
    id: '9',
    name: 'Desk Mat',
    description: 'Large desk mat with smooth surface for mouse and keyboard',
    price: 24.99,
    category: 'Accessories',
    inStock: true,
    onSale: false,
    rating: 4.1,
    reviews: 67,
  },
];

// Analytics Data
export const analyticsData: AnalyticsData[] = [
  { name: 'Jan', visitors: 4000, pageViews: 12000, bounceRate: 35, revenue: 45000, conversions: 120 },
  { name: 'Feb', visitors: 3000, pageViews: 9800, bounceRate: 32, revenue: 38000, conversions: 95 },
  { name: 'Mar', visitors: 5000, pageViews: 15000, bounceRate: 30, revenue: 52000, conversions: 150 },
  { name: 'Apr', visitors: 4500, pageViews: 13000, bounceRate: 28, revenue: 48000, conversions: 135 },
  { name: 'May', visitors: 6000, pageViews: 18000, bounceRate: 25, revenue: 65000, conversions: 180 },
  { name: 'Jun', visitors: 5500, pageViews: 16000, bounceRate: 27, revenue: 58000, conversions: 165 },
];

export const deviceDistribution = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 20 },
];

export const trafficSources = [
  { name: 'Organic Search', value: 40 },
  { name: 'Direct', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Referral', value: 15 },
];

// Dashboard Metrics
export const dashboardMetrics = {
  totalUsers: 12345,
  revenue: 45678,
  orders: 1234,
  growth: {
    users: 12,
    revenue: 8,
    orders: 5,
  },
};

// Table Data
export const tableData: TableRow[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2024-12-05',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'Active',
    lastActive: '2024-12-04',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Moderator',
    status: 'Active',
    lastActive: '2024-12-03',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice.williams@example.com',
    role: 'User',
    status: 'Inactive',
    lastActive: '2024-11-28',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    role: 'User',
    status: 'Active',
    lastActive: '2024-12-05',
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2024-12-05',
  },
  {
    id: '7',
    name: 'Edward Norton',
    email: 'edward.norton@example.com',
    role: 'User',
    status: 'Pending',
    lastActive: '2024-12-01',
  },
  {
    id: '8',
    name: 'Fiona Apple',
    email: 'fiona.apple@example.com',
    role: 'Moderator',
    status: 'Active',
    lastActive: '2024-12-04',
  },
];

// Orders Data
export const orders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    product: 'Wireless Headphones',
    amount: 199.99,
    status: 'delivered',
    date: '2024-12-01',
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    product: 'Smart Watch',
    amount: 299.99,
    status: 'shipped',
    date: '2024-12-02',
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    product: 'Laptop Stand',
    amount: 49.99,
    status: 'processing',
    date: '2024-12-03',
  },
  {
    id: 'ORD-004',
    customer: 'Alice Williams',
    product: 'Mechanical Keyboard',
    amount: 149.99,
    status: 'pending',
    date: '2024-12-04',
  },
  {
    id: 'ORD-005',
    customer: 'Charlie Brown',
    product: 'USB-C Hub',
    amount: 39.99,
    status: 'delivered',
    date: '2024-11-30',
  },
];

// Settings Data
export const settingsCategories = [
  {
    id: 'general',
    name: 'General',
    icon: '⚙️',
    items: [
      { id: 'theme', label: 'Theme', value: 'dark', type: 'select', options: ['light', 'dark', 'auto'] },
      { id: 'language', label: 'Language', value: 'en', type: 'select', options: ['en', 'es', 'fr', 'de'] },
      { id: 'timezone', label: 'Timezone', value: 'UTC', type: 'select', options: ['UTC', 'EST', 'PST', 'GMT'] },
    ],
  },
  {
    id: 'notifications',
    name: 'Notifications',
    icon: '🔔',
    items: [
      { id: 'email', label: 'Email Notifications', value: true, type: 'switch' },
      { id: 'push', label: 'Push Notifications', value: false, type: 'switch' },
      { id: 'sms', label: 'SMS Notifications', value: false, type: 'switch' },
    ],
  },
  {
    id: 'privacy',
    name: 'Privacy',
    icon: '🔒',
    items: [
      { id: 'profile', label: 'Public Profile', value: true, type: 'switch' },
      { id: 'analytics', label: 'Analytics Tracking', value: true, type: 'switch' },
      { id: 'cookies', label: 'Cookie Preferences', value: false, type: 'switch' },
    ],
  },
  {
    id: 'security',
    name: 'Security',
    icon: '🛡️',
    items: [
      { id: '2fa', label: 'Two-Factor Authentication', value: false, type: 'switch' },
      { id: 'session', label: 'Session Timeout', value: '30', type: 'select', options: ['15', '30', '60', '120'] },
    ],
  },
];

// Form Data
export const formSteps = [
  {
    id: 'personal',
    title: 'Personal Information',
    fields: ['firstName', 'lastName', 'email', 'phone'],
  },
  {
    id: 'address',
    title: 'Address',
    fields: ['street', 'city', 'state', 'zipCode'],
  },
  {
    id: 'preferences',
    title: 'Preferences',
    fields: ['newsletter', 'notifications', 'theme'],
  },
];

// Profile Data
export const profileData = {
  personal: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Software engineer passionate about building great user experiences.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
  },
  social: {
    twitter: '@johndoe',
    github: 'johndoe',
    linkedin: 'john-doe',
  },
  skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Python'],
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading frontend development team',
    },
    {
      title: 'Software Engineer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built scalable web applications',
    },
  ],
};

