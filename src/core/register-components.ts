import { widgetRegistry } from './registry';
import {
  Button,
  ButtonGroup,
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
  Label,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Slider,
  Progress,
  Spinner,
  Skeleton,
  Separator,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  LineChart,
  BarChart,
  PieChart,
  AreaChart,
  RadarChart,
  ComposedChart,
} from '../components';
import { Box } from '../components/layouts';

/**
 * Register all components with the widget registry
 */
export function registerAllComponents() {
  // Basic Components
  widgetRegistry.register('Button', { component: Button });
  widgetRegistry.register('ButtonGroup', { component: ButtonGroup });
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

  // Form Components
  widgetRegistry.register('Label', { component: Label });
  widgetRegistry.register('Textarea', { component: Textarea });
  widgetRegistry.register('Select', { component: Select });
  widgetRegistry.register('Checkbox', { component: Checkbox });
  widgetRegistry.register('RadioGroup', { component: RadioGroup });
  widgetRegistry.register('RadioGroupItem', { component: RadioGroupItem });
  widgetRegistry.register('Switch', { component: Switch });
  widgetRegistry.register('Slider', { component: Slider });
  widgetRegistry.register('Progress', { component: Progress });

  // Display Components
  widgetRegistry.register('Spinner', { component: Spinner });
  widgetRegistry.register('Skeleton', { component: Skeleton });
  widgetRegistry.register('Separator', { component: Separator });
  widgetRegistry.register('Avatar', { component: Avatar });
  widgetRegistry.register('AvatarImage', { component: AvatarImage });
  widgetRegistry.register('AvatarFallback', { component: AvatarFallback });
  widgetRegistry.register('Table', { component: Table });
  widgetRegistry.register('TableHeader', { component: TableHeader });
  widgetRegistry.register('TableBody', { component: TableBody });
  widgetRegistry.register('TableFooter', { component: TableFooter });
  widgetRegistry.register('TableHead', { component: TableHead });
  widgetRegistry.register('TableRow', { component: TableRow });
  widgetRegistry.register('TableCell', { component: TableCell });
  widgetRegistry.register('TableCaption', { component: TableCaption });
  widgetRegistry.register('Tabs', { component: Tabs });
  widgetRegistry.register('TabsList', { component: TabsList });
  widgetRegistry.register('TabsTrigger', { component: TabsTrigger });
  widgetRegistry.register('TabsContent', { component: TabsContent });
  widgetRegistry.register('Accordion', { component: Accordion });
  widgetRegistry.register('AccordionItem', { component: AccordionItem });
  widgetRegistry.register('AccordionTrigger', { component: AccordionTrigger });
  widgetRegistry.register('AccordionContent', { component: AccordionContent });
  widgetRegistry.register('Sheet', { component: Sheet });
  widgetRegistry.register('SheetTrigger', { component: SheetTrigger });
  widgetRegistry.register('SheetClose', { component: SheetClose });
  widgetRegistry.register('SheetContent', { component: SheetContent });
  widgetRegistry.register('SheetHeader', { component: SheetHeader });
  widgetRegistry.register('SheetFooter', { component: SheetFooter });
  widgetRegistry.register('SheetTitle', { component: SheetTitle });
  widgetRegistry.register('SheetDescription', { component: SheetDescription });
  widgetRegistry.register('Command', { component: Command });
  widgetRegistry.register('CommandInput', { component: CommandInput });
  widgetRegistry.register('CommandList', { component: CommandList });
  widgetRegistry.register('CommandEmpty', { component: CommandEmpty });
  widgetRegistry.register('CommandGroup', { component: CommandGroup });
  widgetRegistry.register('CommandItem', { component: CommandItem });
  widgetRegistry.register('CommandShortcut', { component: CommandShortcut });
  widgetRegistry.register('CommandSeparator', { component: CommandSeparator });

  // Overlay Components
  widgetRegistry.register('Popover', { component: Popover });
  widgetRegistry.register('PopoverTrigger', { component: PopoverTrigger });
  widgetRegistry.register('PopoverContent', { component: PopoverContent });
  widgetRegistry.register('Tooltip', { component: Tooltip });
  widgetRegistry.register('TooltipTrigger', { component: TooltipTrigger });
  widgetRegistry.register('TooltipContent', { component: TooltipContent });
  widgetRegistry.register('TooltipProvider', { component: TooltipProvider });
  widgetRegistry.register('DropdownMenu', { component: DropdownMenu });
  widgetRegistry.register('DropdownMenuTrigger', { component: DropdownMenuTrigger });
  widgetRegistry.register('DropdownMenuContent', { component: DropdownMenuContent });
  widgetRegistry.register('DropdownMenuItem', { component: DropdownMenuItem });
  widgetRegistry.register('DropdownMenuCheckboxItem', { component: DropdownMenuCheckboxItem });
  widgetRegistry.register('DropdownMenuRadioItem', { component: DropdownMenuRadioItem });
  widgetRegistry.register('DropdownMenuLabel', { component: DropdownMenuLabel });
  widgetRegistry.register('DropdownMenuSeparator', { component: DropdownMenuSeparator });
  widgetRegistry.register('DropdownMenuShortcut', { component: DropdownMenuShortcut });
  widgetRegistry.register('DropdownMenuGroup', { component: DropdownMenuGroup });
  widgetRegistry.register('DropdownMenuPortal', { component: DropdownMenuPortal });
  widgetRegistry.register('DropdownMenuSub', { component: DropdownMenuSub });
  widgetRegistry.register('DropdownMenuSubContent', { component: DropdownMenuSubContent });
  widgetRegistry.register('DropdownMenuSubTrigger', { component: DropdownMenuSubTrigger });
  widgetRegistry.register('DropdownMenuRadioGroup', { component: DropdownMenuRadioGroup });
  widgetRegistry.register('ToastProvider', { component: ToastProvider });
  widgetRegistry.register('ToastViewport', { component: ToastViewport });
  widgetRegistry.register('Toast', { component: Toast });
  widgetRegistry.register('ToastTitle', { component: ToastTitle });
  widgetRegistry.register('ToastDescription', { component: ToastDescription });
  widgetRegistry.register('ToastClose', { component: ToastClose });
  widgetRegistry.register('ToastAction', { component: ToastAction });

  // Chart Components
  widgetRegistry.register('LineChart', { component: LineChart });
  widgetRegistry.register('BarChart', { component: BarChart });
  widgetRegistry.register('PieChart', { component: PieChart });
  widgetRegistry.register('AreaChart', { component: AreaChart });
  widgetRegistry.register('RadarChart', { component: RadarChart });
  widgetRegistry.register('ComposedChart', { component: ComposedChart });

  // Layout Components (for use as widgets)
  widgetRegistry.register('Box', { component: Box });
}

// Auto-register on import
registerAllComponents();

