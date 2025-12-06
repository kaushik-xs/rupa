import type { Meta, StoryObj } from '@storybook/react';
import { SideNavigation, type NavigationItem } from './SideNavigation';
import {
  FolderKanban,
  Compass,
  LayoutDashboard,
  TrendingUp,
  Shield,
  Settings,
  HelpCircle,
  Zap,
  Bell,
  User,
} from 'lucide-react';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof SideNavigation> = {
  title: 'Components/SideNavigation',
  component: SideNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    secondaryMenuWidth: {
      control: 'number',
    },
    defaultPinned: {
      control: 'boolean',
    },
    showSecondaryMenuOnHover: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigation>;

// Default navigation items matching the image
const defaultItems: NavigationItem[] = [
  {
    id: 'issues',
    label: 'Issues',
    icon: FolderKanban,
    secondaryMenu: [
      {
        id: 'feed',
        label: 'Feed',
      },
      {
        id: 'errors',
        label: 'Errors & Outages',
      },
      {
        id: 'breached',
        label: 'Breached Metrics',
      },
      {
        id: 'warnings',
        label: 'Warnings',
      },
      {
        id: 'feedback',
        label: 'User Feedback',
      },
      {
        id: 'separator-1',
        label: '',
        separator: true,
      },
      {
        id: 'all-views',
        label: 'All Views',
      },
    ],
  },
  {
    id: 'explore',
    label: 'Explore',
    icon: Compass,
    secondaryMenu: [
      {
        id: 'discover',
        label: 'Discover',
      },
      {
        id: 'queries',
        label: 'Saved Queries',
      },
      {
        id: 'releases',
        label: 'Releases',
      },
    ],
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: LayoutDashboard,
    secondaryMenu: [
      {
        id: 'overview',
        label: 'Overview',
      },
      {
        id: 'performance',
        label: 'Performance',
      },
      {
        id: 'custom',
        label: 'Custom Dashboards',
      },
    ],
  },
  {
    id: 'insights',
    label: 'Insights',
    icon: TrendingUp,
    secondaryMenu: [
      {
        id: 'analytics',
        label: 'Analytics',
      },
      {
        id: 'reports',
        label: 'Reports',
      },
    ],
  },
  {
    id: 'prevent',
    label: 'Prevent',
    icon: Shield,
    badge: 'Beta',
    secondaryMenu: [
      {
        id: 'rules',
        label: 'Rules',
      },
      {
        id: 'policies',
        label: 'Policies',
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    secondaryMenu: [
      {
        id: 'general',
        label: 'General',
      },
      {
        id: 'team',
        label: 'Team',
      },
      {
        id: 'integrations',
        label: 'Integrations',
      },
      {
        id: 'billing',
        label: 'Billing',
      },
    ],
  },
];

const logo = (
  <div className="h-8 w-8 bg-primary text-primary-foreground rounded flex items-center justify-center font-bold text-sm">
    RV
  </div>
);

const footerItems = [
  <Button key="help" variant="ghost" size="icon" title="Help">
    <HelpCircle className="h-5 w-5" />
  </Button>,
  <Button key="zap" variant="ghost" size="icon" title="Shortcuts">
    <Zap className="h-5 w-5" />
  </Button>,
  <Button key="notifications" variant="ghost" size="icon" title="Notifications">
    <div className="relative">
      <Bell className="h-5 w-5" />
      <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] border-0">
        5
      </Badge>
    </div>
  </Button>,
  <Button key="user" variant="ghost" size="icon" title="User">
    <div className="h-8 w-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-sm">
      K
    </div>
  </Button>,
];

export const Default: Story = {
  args: {
    logo,
    items: defaultItems,
    activeItemId: 'issues',
    footerItems,
    secondaryMenuWidth: 240,
    showSecondaryMenuOnHover: true,
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p className="text-muted-foreground">
          Hover over navigation items to see the secondary menu. You can pin the menu to keep it open.
        </p>
      </div>
    </div>
  ),
};

export const WithPinnedMenu: Story = {
  args: {
    logo,
    items: defaultItems,
    activeItemId: 'issues',
    footerItems,
    secondaryMenuWidth: 240,
    defaultPinned: true,
    showSecondaryMenuOnHover: true,
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p className="text-muted-foreground">
          The secondary menu is pinned by default in this example.
        </p>
      </div>
    </div>
  ),
};

export const WithoutHover: Story = {
  args: {
    logo,
    items: defaultItems,
    activeItemId: 'issues',
    footerItems,
    secondaryMenuWidth: 240,
    showSecondaryMenuOnHover: false,
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p className="text-muted-foreground">
          Hover functionality is disabled. Click items to interact.
        </p>
      </div>
    </div>
  ),
};

export const SmallWidth: Story = {
  args: {
    logo,
    items: defaultItems,
    activeItemId: 'dashboards',
    footerItems,
    secondaryMenuWidth: 200,
    width: 'sm',
    showSecondaryMenuOnHover: true,
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Small Width Sidebar</h1>
        <p className="text-muted-foreground">
          This example shows a smaller sidebar width.
        </p>
      </div>
    </div>
  ),
};

export const LargeWidth: Story = {
  args: {
    logo,
    items: defaultItems,
    activeItemId: 'insights',
    footerItems,
    secondaryMenuWidth: 280,
    width: 'lg',
    showSecondaryMenuOnHover: true,
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Large Width Sidebar</h1>
        <p className="text-muted-foreground">
          This example shows a larger sidebar width.
        </p>
      </div>
    </div>
  ),
};

export const MinimalItems: Story = {
  args: {
    logo,
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: LayoutDashboard,
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
      },
    ],
    activeItemId: 'home',
    secondaryMenuWidth: 200,
    showSecondaryMenuOnHover: true,
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Minimal Navigation</h1>
        <p className="text-muted-foreground">
          A minimal navigation with just a few items.
        </p>
      </div>
    </div>
  ),
};

export const WithBadges: Story = {
  args: {
    logo,
    items: [
      {
        id: 'issues',
        label: 'Issues',
        icon: FolderKanban,
        badge: '12',
        secondaryMenu: [
          {
            id: 'feed',
            label: 'Feed',
          },
          {
            id: 'errors',
            label: 'Errors',
          },
        ],
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: Bell,
        badge: '5',
        secondaryMenu: [
          {
            id: 'unread',
            label: 'Unread',
          },
          {
            id: 'all',
            label: 'All',
          },
        ],
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
      },
    ],
    activeItemId: 'issues',
    footerItems,
    secondaryMenuWidth: 240,
    showSecondaryMenuOnHover: true,
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Navigation with Badges</h1>
        <p className="text-muted-foreground">
          Navigation items can display badges to show counts or status.
        </p>
      </div>
    </div>
  ),
};

export const WithSeparators: Story = {
  args: {
    logo,
    items: [
      {
        id: 'issues',
        label: 'Issues',
        icon: FolderKanban,
        secondaryMenu: [
          {
            id: 'feed',
            label: 'Feed',
          },
          {
            id: 'errors',
            label: 'Errors & Outages',
          },
          {
            id: 'separator-1',
            label: '',
            separator: true,
          },
          {
            id: 'all-views',
            label: 'All Views',
          },
          {
            id: 'separator-2',
            label: '',
            separator: true,
          },
          {
            id: 'configure',
            label: 'Configure',
          },
          {
            id: 'alerts',
            label: 'Alerts',
          },
        ],
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
      },
    ],
    activeItemId: 'issues',
    footerItems,
    secondaryMenuWidth: 240,
    showSecondaryMenuOnHover: true,
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Menu with Separators</h1>
        <p className="text-muted-foreground">
          Secondary menu items can be separated using separator items.
        </p>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    logo,
    items: defaultItems.map((item) => ({
      ...item,
      onClick: () => {
        console.log(`Clicked: ${item.label}`);
      },
      secondaryMenu: item.secondaryMenu?.map((menuItem) => ({
        ...menuItem,
        onClick: () => {
          console.log(`Clicked menu item: ${menuItem.label}`);
        },
      })),
    })),
    activeItemId: 'issues',
    footerItems,
    secondaryMenuWidth: 240,
    showSecondaryMenuOnHover: true,
    onItemClick: (itemId) => {
      console.log(`Navigation item clicked: ${itemId}`);
    },
    onPinnedChange: (pinned) => {
      console.log(`Menu pinned: ${pinned}`);
    },
  },
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Interactive Navigation</h1>
        <p className="text-muted-foreground mb-4">
          Check the browser console to see click events.
        </p>
        <div className="space-y-2">
          <p className="text-sm">
            • Click navigation items to see console logs
          </p>
          <p className="text-sm">
            • Hover over items to see secondary menus
          </p>
          <p className="text-sm">
            • Pin/unpin menus using the pin button
          </p>
        </div>
      </div>
    </div>
  ),
};

