/**
 * Rupa component definitions for use with defineCatalog from @json-render/core.
 *
 * In your consumer app:
 *   import { defineCatalog } from '@json-render/core';
 *   import { schema } from '@json-render/react/schema';
 *   import { rupaComponentDefinitions } from '@kaushik91/rupa';
 *
 *   const catalog = defineCatalog(schema, {
 *     components: {
 *       ...rupaComponentDefinitions,
 *       // or pick: Card: rupaComponentDefinitions.Card, Button: rupaComponentDefinitions.Button, ...
 *     },
 *     actions: {},
 *   });
 */
import { z } from 'zod';

export const rupaComponentDefinitions = {
  Box: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Container div for grouping content',
  },
  Stack: {
    props: z.object({
      direction: z.enum(['row', 'column', 'row-reverse', 'column-reverse']).nullable(),
      gap: z.union([z.number(), z.string()]).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Flex stack for vertical or horizontal layout',
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
    description: 'Flexbox container',
  },
  Grid: {
    props: z.object({
      columns: z.union([z.number(), z.string()]).nullable(),
      gap: z.union([z.number(), z.string()]).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'CSS grid container',
  },
  Container: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Max-width container',
  },
  Spacer: {
    props: z.object({ size: z.union([z.number(), z.string()]).nullable() }),
    description: 'Vertical or horizontal spacing',
  },
  Button: {
    props: z.object({
      label: z.string(),
      variant: z.enum(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']).nullable(),
      size: z.enum(['default', 'sm', 'lg', 'icon']).nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Clickable button',
  },
  ButtonGroup: {
    props: z.object({
      variant: z.enum(['default', 'outline', 'ghost']).nullable(),
      size: z.enum(['sm', 'md', 'lg']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Group of buttons',
  },
  Card: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Card container',
  },
  CardHeader: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Card header section',
  },
  CardTitle: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Card title',
  },
  CardDescription: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Card description',
  },
  CardContent: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Card body content',
  },
  CardFooter: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Card footer',
  },
  Input: {
    props: z.object({
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      type: z.string().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Text input field',
  },
  Label: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Form label',
  },
  Textarea: {
    props: z.object({
      placeholder: z.string().nullable(),
      value: z.string().nullable(),
      rows: z.number().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Multi-line text input',
  },
  Checkbox: {
    props: z.object({
      checked: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Checkbox input',
  },
  Switch: {
    props: z.object({
      checked: z.boolean().nullable(),
      disabled: z.boolean().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Toggle switch',
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
    description: 'Range slider',
  },
  Progress: {
    props: z.object({
      value: z.number().nullable(),
      max: z.number().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Progress bar',
  },
  Badge: {
    props: z.object({
      children: z.string(),
      variant: z.enum(['default', 'secondary', 'destructive', 'outline']).nullable(),
      className: z.string().nullable(),
    }),
    description: 'Badge or tag',
  },
  Alert: {
    props: z.object({
      variant: z.enum(['default', 'destructive']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Alert message container',
  },
  AlertTitle: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Alert title',
  },
  AlertDescription: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Alert description',
  },
  Spinner: {
    props: z.object({
      size: z.enum(['sm', 'default', 'lg']).nullable(),
      className: z.string().nullable(),
    }),
    description: 'Loading spinner',
  },
  Skeleton: {
    props: z.object({ className: z.string().nullable() }),
    description: 'Loading skeleton placeholder',
  },
  Separator: {
    props: z.object({
      orientation: z.enum(['horizontal', 'vertical']).nullable(),
      className: z.string().nullable(),
    }),
    description: 'Visual separator line',
  },
  Avatar: {
    props: z.object({
      src: z.string().nullable(),
      alt: z.string().nullable(),
      fallback: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'User avatar image',
  },
  Table: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Table container',
  },
  TableHeader: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Table header row',
  },
  TableBody: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Table body',
  },
  TableRow: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Table row',
  },
  TableHead: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Table header cell',
  },
  TableCell: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Table cell',
  },
  Tabs: {
    props: z.object({
      defaultValue: z.string().nullable(),
      value: z.string().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Tabs container',
  },
  TabsList: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Tabs list',
  },
  TabsTrigger: {
    props: z.object({
      value: z.string(),
      children: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Tab trigger button',
  },
  TabsContent: {
    props: z.object({ value: z.string(), className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Tab panel content',
  },
  Accordion: {
    props: z.object({
      type: z.enum(['single', 'multiple']).nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Accordion container',
  },
  AccordionItem: {
    props: z.object({ value: z.string(), className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Accordion item',
  },
  AccordionTrigger: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Accordion trigger',
  },
  AccordionContent: {
    props: z.object({ className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Accordion panel content',
  },
  Modal: {
    props: z.object({
      open: z.boolean().nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    slots: ['default'] as const,
    description: 'Modal dialog',
  },
  Dialog: {
    props: z.object({ open: z.boolean().nullable(), className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Dialog container',
  },
  DialogTitle: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Dialog title',
  },
  DialogDescription: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Dialog description',
  },
  Tooltip: {
    props: z.object({ content: z.string().nullable(), className: z.string().nullable() }),
    slots: ['default'] as const,
    description: 'Tooltip wrapper',
  },
  TooltipContent: {
    props: z.object({ children: z.string().nullable(), className: z.string().nullable() }),
    description: 'Tooltip content',
  },
  LineChart: {
    props: z.object({
      data: z.array(z.record(z.unknown())).nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Line chart',
  },
  BarChart: {
    props: z.object({
      data: z.array(z.record(z.unknown())).nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Bar chart',
  },
  PieChart: {
    props: z.object({
      data: z.array(z.record(z.unknown())).nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Pie chart',
  },
  AreaChart: {
    props: z.object({
      data: z.array(z.record(z.unknown())).nullable(),
      title: z.string().nullable(),
      className: z.string().nullable(),
    }),
    description: 'Area chart',
  },
} as const;
