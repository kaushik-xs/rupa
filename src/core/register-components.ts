import { widgetRegistry } from './registry';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Modal,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '../components';
import { Box } from '../components/layouts';

/**
 * Register all components with the widget registry
 */
export function registerAllComponents() {
  // Basic Components
  widgetRegistry.register('Button', { component: Button });
  widgetRegistry.register('Input', { component: Input });
  widgetRegistry.register('Badge', { component: Badge });

  // Card Components
  widgetRegistry.register('Card', { component: Card });
  widgetRegistry.register('CardHeader', { component: CardHeader });
  widgetRegistry.register('CardTitle', { component: CardTitle });
  widgetRegistry.register('CardDescription', { component: CardDescription });
  widgetRegistry.register('CardContent', { component: CardContent });
  widgetRegistry.register('CardFooter', { component: CardFooter });

  // Alert Components
  widgetRegistry.register('Alert', { component: Alert });
  widgetRegistry.register('AlertTitle', { component: AlertTitle });
  widgetRegistry.register('AlertDescription', { component: AlertDescription });

  // Modal/Dialog Components
  widgetRegistry.register('Modal', { component: Modal });
  widgetRegistry.register('Dialog', { component: Dialog });
  widgetRegistry.register('DialogTrigger', { component: DialogTrigger });
  widgetRegistry.register('DialogContent', { component: DialogContent });
  widgetRegistry.register('DialogHeader', { component: DialogHeader });
  widgetRegistry.register('DialogFooter', { component: DialogFooter });
  widgetRegistry.register('DialogTitle', { component: DialogTitle });
  widgetRegistry.register('DialogDescription', { component: DialogDescription });

  // Layout Components (for use as widgets)
  widgetRegistry.register('Box', { component: Box });
}

// Auto-register on import
registerAllComponents();

