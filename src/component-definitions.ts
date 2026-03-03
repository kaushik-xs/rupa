/**
 * Component definitions for use with catalog/registry patterns (e.g. defineCatalog from @json-render/core).
 * Each entry has props (Zod schema), optional slots, and a description. Consumable by any underlying
 * library that expects a map of component name → { props, slots?, description }.
 *
 * Example (json-render):
 *   import { defineCatalog } from '@json-render/core';
 *   import { schema } from '@json-render/react/schema';
 *   import { rupaComponentDefinitions } from '@kaushik91/rupa';
 *   const catalog = defineCatalog(schema, { components: { ...rupaComponentDefinitions }, actions: {} });
 */
import { z } from 'zod';

export const rupaComponentDefinitions = {
  Box: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Generic wrapper for grouping arbitrary content. Use when you need a simple container without layout behavior. Accepts children in the default slot.',
  },
  Stack: {
    props: z.object({
      direction: z.enum(['row', 'column', 'row-reverse', 'column-reverse']).nullable(),
      gap: z.union([z.number(), z.string()]).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Stacks children in a row or column with consistent spacing. Use for vertical lists (direction=column) or horizontal rows (direction=row). Prefer over Flex when you only need direction and gap.',
  },
  Flex: {
    props: z.object({
      direction: z.enum(['row', 'column', 'row-reverse', 'column-reverse']).nullable(),
      align: z.enum(['start', 'end', 'center', 'stretch', 'baseline']).nullable(),
      justify: z.enum(['start', 'end', 'center', 'between', 'around', 'evenly']).nullable(),
      gap: z.union([z.number(), z.string()]).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Flexbox container for aligning and distributing children. Use when you need alignment (align, justify) or flexible spacing. Good for toolbars, inline groups, and centered content.',
  },
  Grid: {
    props: z.object({
      columns: z.union([z.number(), z.string()]).nullable(),
      gap: z.union([z.number(), z.string()]).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'CSS grid for equal-width or fixed-column layouts. Use for dashboards, card grids, or any uniform multi-column layout. Children fill cells in order.',
  },
  Container: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Centered, max-width wrapper for page content. Use as the outer wrapper for main page body to constrain width and center on large screens.',
  },
  Spacer: {
    props: z.object({ size: z.union([z.number(), z.string()]).nullable() }),
    description: 'Adds empty space (padding or flex gap). Use between elements to create visual separation when you do not need a visible line (use Separator for a line).',
  },
  Button: {
    props: z.object({
      label: z.string(),
      variant: z.enum(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']).nullable(),
      size: z.enum(['default', 'sm', 'lg', 'icon']).nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Clickable button. Use for primary actions (variant=default), secondary actions (outline/secondary), destructive actions (destructive), or text links (link). Emits press on click.',
  },
  ButtonGroup: {
    props: z.object({
      variant: z.enum(['default', 'outline', 'ghost']).nullable(),
      size: z.enum(['sm', 'md', 'lg']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Groups multiple Button children with consistent styling. Use for action bars, filter chips, or grouped controls (e.g. Save / Cancel).',
  },
  Card: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Bordered, elevated container for a logical block of content. Use as the root for feature cards, form sections, or content blocks. Compose with CardHeader, CardTitle, CardDescription, CardContent, CardFooter.',
  },
  CardHeader: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Header area of a Card. Place CardTitle and optionally CardDescription or actions here.',
  },
  CardTitle: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Title text for a Card. Set children to the title string. Use inside CardHeader.',
  },
  CardDescription: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Subtitle or description for a Card. Use below CardTitle in CardHeader.',
  },
  CardContent: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Main body of a Card. Place primary content (text, forms, lists) here.',
  },
  CardFooter: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Footer of a Card. Use for actions (e.g. Button or ButtonGroup) or secondary links.',
  },
  Input: {
    props: z.object({
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      type: z.string().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Single-line text input. Use for names, emails, search, numbers (type=number). Pair with Label for forms. Supports placeholder and value.',
  },
  Label: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Form label. Set children to the label text. Use above Input, Checkbox, Select, or Textarea for accessibility.',
  },
  Textarea: {
    props: z.object({
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      rows: z.number().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Multi-line text input. Use for comments, descriptions, long-form text. Prefer Input for single-line fields.',
  },
  Checkbox: {
    props: z.object({
      checked: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Boolean checkbox. Use for agree-to-terms, multi-select options, or feature toggles. Pair with Label.',
  },
  Switch: {
    props: z.object({
      checked: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Toggle switch for on/off settings. Use for preferences (e.g. notifications, dark mode). Prefer Checkbox for form-style options.',
  },
  Slider: {
    props: z.object({
      value: z.union([z.number(), z.array(z.number())]).nullable(),
      min: z.number().nullable(),
      max: z.number().nullable(),
      step: z.number().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Numeric range slider. Use for volume, brightness, price range, or any min–max selection. Set min, max, and optionally step.',
  },
  Progress: {
    props: z.object({
      value: z.number().nullable(),
      max: z.number().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Progress bar (determinate). Use for upload progress, step completion, or any 0–max progress. Set value and max.',
  },
  Badge: {
    props: z.object({
      children: z.string(),
      variant: z.enum(['default', 'secondary', 'destructive', 'outline']).nullable(),
      className: z.string().nullable(),
    }),
    description: 'Small label or tag. Use for status (Active, Pending), counts, or categories. Set children to the badge text. Variant: default (filled), outline (border), destructive (error).',
  },
  Alert: {
    props: z.object({
      variant: z.enum(['default', 'destructive']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Banner for important messages. Use for success/info (default) or errors/warnings (destructive). Put AlertTitle and AlertDescription as children.',
  },
  AlertTitle: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Bold title for an Alert. Use as first child of Alert.',
  },
  AlertDescription: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Body text for an Alert. Use after AlertTitle inside Alert.',
  },
  Spinner: {
    props: z.object({
      size: z.enum(['sm', 'default', 'lg']).nullable(),
      className: z.string().nullable(),
    }),
    description: 'Loading indicator. Use while data is fetching or an action is in progress. Size: sm, default, lg.',
  },
  Skeleton: {
    props: z.object({ className: z.string().nullable() }),
    description: 'Placeholder shape while content loads. Use to show layout during loading instead of a blank area or Spinner.',
  },
  Separator: {
    props: z.object({
      orientation: z.enum(['horizontal', 'vertical']).nullable(),
      className: z.string().nullable(),
    }),
    description: 'Visual divider line. Use horizontal between sections or vertical between columns (e.g. in a toolbar).',
  },
  Avatar: {
    props: z.object({
      src: z.string().nullable(),
      alt: z.string().nullable(),
      fallback: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'User or entity avatar. Use for profile pictures, comment authors, or assignees. Set src for image URL; fallback shows when image fails (e.g. initials).',
  },
  Table: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Table wrapper. Compose with TableHeader, TableBody, TableRow, TableHead, TableCell for tabular data (e.g. user list, comparison table).',
  },
  TableHeader: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Table header section. Contains one TableRow with TableHead cells.',
  },
  TableBody: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Table body. Contains TableRow elements, each with TableCell children.',
  },
  TableRow: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Single row in a table. Use TableHead in header row; TableCell in body rows.',
  },
  TableHead: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Header cell. Set children to column title. Use inside a TableRow in TableHeader.',
  },
  TableCell: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Data cell. Set children to cell content. Use inside TableRow in TableBody.',
  },
  Tabs: {
    props: z.object({
      defaultValue: z.string().nullable(),
      value: z.string().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Tab container. Children must be TabsList (tab buttons) and TabsContent (panels). Use for switching between views (e.g. Overview / Settings / Activity).',
  },
  TabsList: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Row of tab triggers. Contains TabsTrigger components. Use inside Tabs.',
  },
  TabsTrigger: {
    props: z.object({
      value: z.string(),
      children: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Single tab button. value must match a TabsContent value; children is the label. Use inside TabsList.',
  },
  TabsContent: {
    props: z.object({ value: z.string(), className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Panel for one tab. value must match a TabsTrigger. Place panel content as children. Use inside Tabs.',
  },
  Accordion: {
    props: z.object({
      type: z.enum(['single', 'multiple']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Accordion container. Children are AccordionItem elements. Use for FAQs, expandable sections, or optional details. type: single (one open) or multiple.',
  },
  AccordionItem: {
    props: z.object({ value: z.string(), className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'One accordion section. value must be unique. Children: AccordionTrigger then AccordionContent.',
  },
  AccordionTrigger: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Clickable header that expands/collapses AccordionContent. Set children to the section title.',
  },
  AccordionContent: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Expandable body of an accordion section. Use after AccordionTrigger inside AccordionItem.',
  },
  Modal: {
    props: z.object({
      open: z.boolean().nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Modal overlay dialog. Use for confirmations, forms, or focused content. Control visibility with open; set title and put body content as children.',
  },
  Dialog: {
    props: z.object({ open: z.boolean().nullable(), className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Dialog root (Radix). Use with DialogTitle, DialogDescription, DialogContent for accessible modals. Control with open prop.',
  },
  DialogTitle: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Dialog title. Use inside DialogContent.',
  },
  DialogDescription: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Dialog description or subtitle. Use inside DialogContent after DialogTitle.',
  },
  Tooltip: {
    props: z.object({ content: z.string().nullable(), className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Shows content on hover/focus. Wrap a trigger element (e.g. Button, icon) as child; set content to the tooltip text. Use for hints or short explanations.',
  },
  TooltipContent: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Tooltip body when building custom tooltip structure. content on Tooltip is usually enough.',
  },
  LineChart: {
    props: z.object({
      data: z.array(z.record(z.unknown())).nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Line chart for trends over time or ordered categories. data: array of objects with name (x) and numeric keys for lines. Use for time series, progress over steps.',
  },
  BarChart: {
    props: z.object({
      data: z.array(z.record(z.unknown())).nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Bar chart for comparing categories or counts. data: array of objects with name and value keys. Use for rankings, counts, or category comparison.',
  },
  PieChart: {
    props: z.object({
      data: z.array(z.record(z.unknown())).nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Pie/donut chart for parts of a whole. data: array of { name, value }. Use for composition (e.g. market share, status breakdown).',
  },
  AreaChart: {
    props: z.object({
      data: z.array(z.record(z.unknown())).nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Area chart for cumulative or filled trends. data: same shape as LineChart. Use for volume over time or stacked series.',
  },

  // Layout components
  SidebarLayout: {
    props: z.object({
      sidebarWidth: z.union([z.number(), z.string()]).nullable(),
      sidebarPosition: z.enum(['left', 'right']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'App or section layout with a sidebar and main content. Use for dashboards, docs, or settings (nav on left/right). Main content goes in default slot; sidebar is configured separately. sidebarPosition: left or right.',
  },
  HeaderFooterLayout: {
    props: z.object({
      fullHeight: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Page-level layout with header, body, and footer. Use for full-page layouts (e.g. app shell). Children in default slot render as the main body; use fullHeight for viewport-height layout.',
  },
  SplitPane: {
    props: z.object({
      direction: z.enum(['horizontal', 'vertical']).nullable(),
      defaultSizes: z.array(z.number()).nullable(),
      resizable: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Resizable split view. Requires at least 2 children (e.g. list + detail, code + preview). direction: horizontal (side-by-side) or vertical (stacked). Users can drag to resize.',
  },
  TabsLayout: {
    props: z.object({
      defaultValue: z.string().nullable(),
      value: z.string().nullable(),
      orientation: z.enum(['horizontal', 'vertical']).nullable(),
      variant: z.enum(['default', 'pills', 'underline']).nullable(),
      tabs: z.array(z.object({ value: z.string(), label: z.string() })).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Tabbed layout with optional tabs prop for data-driven tabs. Use when you have multiple panels (e.g. Overview / Details / History). Can provide tabs array or compose tab content as children.',
  },
  AccordionLayout: {
    props: z.object({
      type: z.enum(['single', 'multiple']).nullable(),
      defaultValue: z.union([z.string(), z.array(z.string())]).nullable(),
      collapsible: z.boolean().nullable(),
      items: z.array(z.object({ value: z.string(), title: z.string(), content: z.string().nullable() })).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Accordion from config. Use when you have a list of expandable sections (FAQs, feature list). Provide items with value, title, and optional content, or use children for custom content.',
  },
  AutoGridLayout: {
    props: z.object({
      minItemWidth: z.union([z.number(), z.string()]).nullable(),
      columns: z.union([z.number(), z.record(z.union([z.number(), z.string()]))]).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Responsive grid that auto-fits columns by min item width. Use for card grids, product grids, or any list where item count per row should adapt to screen size. Children fill cells in order.',
  },
  MasonryLayout: {
    props: z.object({
      columns: z.union([z.number(), z.record(z.number())]).nullable(),
      columnGap: z.union([z.number(), z.string()]).nullable(),
      rowGap: z.union([z.number(), z.string()]).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Masonry (Pinterest-style) column layout. Use for varying-height items (e.g. image galleries, mixed content). Items flow into columns; columns sets number of columns.',
  },
  ResponsiveDashboard: {
    props: z.object({
      columns: z.record(z.union([z.number(), z.string()])).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Dashboard grid with breakpoint-based columns. Use for analytics dashboards or metric grids. Children (e.g. Card with metrics) fill the grid; columns can vary by breakpoint.',
  },
  CardLayout: {
    props: z.object({
      columns: z.record(z.number()).nullable(),
      cardClassName: z.string().nullable(),
      wrapChildrenInCards: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Grid where each child is wrapped in a Card. Use for feature grids, option cards, or dashboard widgets. Set wrapChildrenInCards=true (default) to auto-wrap each child in a card.',
  },
  SectionLayout: {
    props: z.object({
      showDividers: z.boolean().nullable(),
      sectionSpacing: z.union([z.number(), z.string()]).nullable(),
      sections: z.array(z.object({ id: z.string().nullable(), title: z.string().nullable(), divider: z.boolean().nullable() })).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Vertical list of sections with optional titles and dividers. Use for long forms, profile sections, or settings groups. Provide sections array or use children; showDividers adds lines between sections.',
  },
  StepperLayout: {
    props: z.object({
      currentStep: z.number().nullable(),
      orientation: z.enum(['horizontal', 'vertical']).nullable(),
      showConnector: z.boolean().nullable(),
      steps: z.array(z.object({ id: z.string(), label: z.string(), description: z.string().nullable() })).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Stepper showing progress through ordered steps. Use for checkout, onboarding, or any multi-step flow. steps: array of { id, label, description }; currentStep is 0-based index. orientation: horizontal or vertical.',
  },
  WizardLayout: {
    props: z.object({
      currentStep: z.number().nullable(),
      showProgress: z.boolean().nullable(),
      showNavigation: z.boolean().nullable(),
      steps: z.array(z.object({ id: z.string(), label: z.string(), description: z.string().nullable() })).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Multi-step wizard with step indicator and Next/Back. Use for signup, configuration, or guided flows. Similar to StepperLayout but with built-in navigation. steps and currentStep control which step is active.',
  },
  PanelLayout: {
    props: z.object({
      defaultOpen: z.boolean().nullable(),
      allowMultipleOpen: z.boolean().nullable(),
      panels: z.array(z.object({ id: z.string(), title: z.string(), defaultOpen: z.boolean().nullable() })).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Collapsible panels (accordion-style). Use for sidebar filters, optional sections, or settings groups. panels: array of { id, title, defaultOpen }; allowMultipleOpen lets more than one panel be open.',
  },
  ModalLayout: {
    props: z.object({
      title: z.string().nullable(),
      size: z.enum(['sm', 'md', 'lg', 'xl']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Modal dialog wrapper. Use for confirmations, forms in a dialog, or focused content. Set title and size (sm/md/lg/xl). Content goes in default slot. Visibility is typically controlled by parent state.',
  },
  DragDropLayout: {
    props: z.object({
      direction: z.enum(['vertical', 'horizontal']).nullable(),
      handle: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Sortable list with drag handle. Use for reorderable lists (e.g. playlist, dashboard widget order). Children are draggable items; direction vertical (list) or horizontal (row). handle=true shows a grip icon.',
  },
} as const;
