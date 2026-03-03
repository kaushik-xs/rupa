/**
 * Rupa component implementations for use with defineRegistry from @json-render/react.
 * Each component receives { props, children?, emit } from the renderer.
 *
 * In your consumer app:
 *   import { defineRegistry } from '@json-render/react';
 *   import { rupaComponents } from '@kaushik91/rupa';
 *   import { catalog } from './catalog'; // your defineCatalog(schema, { components: { ...rupaComponentDefinitions }, actions: {} })
 *
 *   const { registry } = defineRegistry(catalog, {
 *     components: {
 *       ...rupaComponents,
 *       // or pick: Card: rupaComponents.Card, Button: rupaComponents.Button, ...
 *     },
 *     actions: {},
 *   });
 */
import React from 'react';
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
  Label,
  Textarea,
  Checkbox,
  Switch,
  Slider,
  Progress,
  Select,
  RadioGroup,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Spinner,
  Skeleton,
  Separator,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Modal,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  LineChart,
  BarChart,
  PieChart as RupaPieChart,
  AreaChart,
} from './components';
import { Box, Flex, Grid, Stack, Container, Spacer } from './components/layouts';

type ComponentContext<P = Record<string, unknown>> = {
  props: P;
  children?: React.ReactNode;
  emit: (event: string) => void;
};

export const rupaComponents = {
  Box: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <Box className={props.className ?? undefined}>{children}</Box>
  ),
  Stack: ({ props, children }: ComponentContext<{ direction?: string | null; gap?: number | string | null; className?: string | null }>) => (
    <Stack direction={(props.direction as 'row' | 'column') ?? 'column'} gap={props.gap ?? undefined} className={props.className ?? undefined}>
      {children}
    </Stack>
  ),
  Flex: ({ props, children }: ComponentContext<{ direction?: string | null; align?: string | null; justify?: string | null; gap?: number | string | null; className?: string | null }>) => (
    <Flex direction={(props.direction as any) ?? 'row'} align={props.align as any} justify={props.justify as any} gap={props.gap ?? undefined} className={props.className ?? undefined}>
      {children}
    </Flex>
  ),
  Grid: ({ props, children }: ComponentContext<{ columns?: number | string | null; gap?: number | string | null; className?: string | null }>) => (
    <Grid columns={props.columns ?? 2} gap={props.gap ?? undefined} className={props.className ?? undefined}>{children}</Grid>
  ),
  Container: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <Container className={props.className ?? undefined}>{children}</Container>
  ),
  Spacer: ({ props }: ComponentContext<{ size?: number | string | null }>) => {
    const size = props.size ?? 16;
    return <Spacer height={typeof size === 'number' ? size : size} />;
  },
  Button: ({ props, emit }: ComponentContext<{ label: string; variant?: string | null; size?: string | null; disabled?: boolean | null; className?: string | null }>) => (
    <Button variant={props.variant as any} size={props.size as any} disabled={props.disabled ?? false} className={props.className ?? undefined} onClick={() => emit('press')}>
      {props.label}
    </Button>
  ),
  ButtonGroup: ({ props, children }: ComponentContext<{ variant?: string | null; size?: string | null; className?: string | null }>) => (
    <ButtonGroup variant={props.variant as any} size={props.size as any} className={props.className ?? undefined}>{children}</ButtonGroup>
  ),
  Card: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <Card className={props.className ?? undefined}>{children}</Card>
  ),
  CardHeader: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <CardHeader className={props.className ?? undefined}>{children}</CardHeader>
  ),
  CardTitle: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <CardTitle className={props.className ?? undefined}>{props.children ?? ''}</CardTitle>
  ),
  CardDescription: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <CardDescription className={props.className ?? undefined}>{props.children ?? ''}</CardDescription>
  ),
  CardContent: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <CardContent className={props.className ?? undefined}>{children}</CardContent>
  ),
  CardFooter: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <CardFooter className={props.className ?? undefined}>{children}</CardFooter>
  ),
  Input: ({ props }: ComponentContext<{ placeholder?: string | null; value?: string | null; type?: string | null; disabled?: boolean | null; className?: string | null }>) => (
    <Input placeholder={props.placeholder ?? undefined} value={props.value ?? undefined} type={(props.type as any) ?? 'text'} disabled={props.disabled ?? false} className={props.className ?? undefined} />
  ),
  Label: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <Label className={props.className ?? undefined}>{props.children ?? ''}</Label>
  ),
  Textarea: ({ props }: ComponentContext<{ placeholder?: string | null; value?: string | null; rows?: number | null; disabled?: boolean | null; className?: string | null }>) => (
    <Textarea placeholder={props.placeholder ?? undefined} value={props.value ?? undefined} rows={props.rows ?? undefined} disabled={props.disabled ?? false} className={props.className ?? undefined} />
  ),
  Checkbox: ({ props }: ComponentContext<{ checked?: boolean | null; disabled?: boolean | null; className?: string | null }>) => (
    <Checkbox checked={props.checked ?? false} disabled={props.disabled ?? false} className={props.className ?? undefined} />
  ),
  Switch: ({ props }: ComponentContext<{ checked?: boolean | null; disabled?: boolean | null; className?: string | null }>) => (
    <Switch checked={props.checked ?? false} disabled={props.disabled ?? false} className={props.className ?? undefined} />
  ),
  Slider: ({ props }: ComponentContext<{ value?: number | number[] | null; min?: number | null; max?: number | null; step?: number | null; disabled?: boolean | null; className?: string | null }>) => {
    const val = Array.isArray(props.value) ? props.value[0] : props.value ?? 0;
    return <Slider value={[val]} min={props.min ?? 0} max={props.max ?? 100} step={props.step ?? 1} disabled={props.disabled ?? false} className={props.className ?? undefined} />;
  },
  Progress: ({ props }: ComponentContext<{ value?: number | null; max?: number | null; className?: string | null }>) => (
    <Progress value={props.value ?? 0} max={props.max ?? 100} className={props.className ?? undefined} />
  ),
  Select: ({ props }: ComponentContext<{ placeholder?: string | null; value?: string | null; disabled?: boolean | null; className?: string | null }>) => (
    <Select placeholder={props.placeholder ?? undefined} value={props.value ?? undefined} isDisabled={props.disabled ?? false} className={props.className ?? undefined} />
  ),
  RadioGroup: ({ props, children }: ComponentContext<{ value?: string | null; className?: string | null }>) => (
    <RadioGroup value={props.value ?? undefined} className={props.className ?? undefined}>{children}</RadioGroup>
  ),
  Form: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <form className={props.className ?? undefined}>{children}</form>
  ),
  Badge: ({ props }: ComponentContext<{ children: string; variant?: string | null; className?: string | null }>) => (
    <Badge variant={props.variant as any} className={props.className ?? undefined}>{props.children}</Badge>
  ),
  Alert: ({ props, children }: ComponentContext<{ variant?: string | null; className?: string | null }>) => (
    <Alert variant={props.variant as any} className={props.className ?? undefined}>{children}</Alert>
  ),
  AlertTitle: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <AlertTitle className={props.className ?? undefined}>{props.children ?? ''}</AlertTitle>
  ),
  AlertDescription: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <AlertDescription className={props.className ?? undefined}>{props.children ?? ''}</AlertDescription>
  ),
  Spinner: ({ props }: ComponentContext<{ size?: string | null; className?: string | null }>) => (
    <Spinner size={props.size as any} className={props.className ?? undefined} />
  ),
  Skeleton: ({ props }: ComponentContext<{ className?: string | null }>) => (
    <Skeleton className={props.className ?? undefined} />
  ),
  Separator: ({ props }: ComponentContext<{ orientation?: string | null; className?: string | null }>) => (
    <Separator orientation={(props.orientation as any) ?? 'horizontal'} className={props.className ?? undefined} />
  ),
  Avatar: ({ props }: ComponentContext<{ src?: string | null; alt?: string | null; fallback?: string | null; className?: string | null }>) => (
    <Avatar className={props.className ?? undefined}>
      {props.src ? <AvatarImage src={props.src} alt={props.alt ?? undefined} /> : null}
      <AvatarFallback>{props.fallback ?? ''}</AvatarFallback>
    </Avatar>
  ),
  Table: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <Table className={props.className ?? undefined}>{children}</Table>
  ),
  TableHeader: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <TableHeader className={props.className ?? undefined}>{children}</TableHeader>
  ),
  TableBody: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <TableBody className={props.className ?? undefined}>{children}</TableBody>
  ),
  TableRow: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <TableRow className={props.className ?? undefined}>{children}</TableRow>
  ),
  TableHead: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <TableHead className={props.className ?? undefined}>{props.children ?? ''}</TableHead>
  ),
  TableCell: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <TableCell className={props.className ?? undefined}>{props.children ?? ''}</TableCell>
  ),
  Tabs: ({ props, children }: ComponentContext<{ defaultValue?: string | null; value?: string | null; className?: string | null }>) => (
    <Tabs defaultValue={props.defaultValue ?? undefined} value={props.value ?? undefined} className={props.className ?? undefined}>{children}</Tabs>
  ),
  TabsList: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <TabsList className={props.className ?? undefined}>{children}</TabsList>
  ),
  TabsTrigger: ({ props }: ComponentContext<{ value: string; children?: string | null; className?: string | null }>) => (
    <TabsTrigger value={props.value} className={props.className ?? undefined}>{props.children ?? props.value}</TabsTrigger>
  ),
  TabsContent: ({ props, children }: ComponentContext<{ value: string; className?: string | null }>) => (
    <TabsContent value={props.value} className={props.className ?? undefined}>{children}</TabsContent>
  ),
  Accordion: ({ props, children }: ComponentContext<{ type?: string | null; className?: string | null }>) => (
    <Accordion type={(props.type as any) ?? 'single'} className={props.className ?? undefined}>{children}</Accordion>
  ),
  AccordionItem: ({ props, children }: ComponentContext<{ value: string; className?: string | null }>) => (
    <AccordionItem value={props.value} className={props.className ?? undefined}>{children}</AccordionItem>
  ),
  AccordionTrigger: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <AccordionTrigger className={props.className ?? undefined}>{props.children ?? ''}</AccordionTrigger>
  ),
  AccordionContent: ({ props, children }: ComponentContext<{ className?: string | null }>) => (
    <AccordionContent className={props.className ?? undefined}>{children}</AccordionContent>
  ),
  Modal: ({ props, children }: ComponentContext<{ open?: boolean | null; title?: string | null; className?: string | null }>) => (
    <Modal isOpen={props.open ?? false} onClose={() => {}} title={props.title ?? undefined} className={props.className ?? undefined}>{children}</Modal>
  ),
  Dialog: ({ props, children }: ComponentContext<{ open?: boolean | null; className?: string | null }>) => (
    <Dialog open={props.open ?? false}>{children}</Dialog>
  ),
  DialogTitle: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <DialogTitle className={props.className ?? undefined}>{props.children ?? ''}</DialogTitle>
  ),
  DialogDescription: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <DialogDescription className={props.className ?? undefined}>{props.children ?? ''}</DialogDescription>
  ),
  Tooltip: ({ props, children }: ComponentContext<{ content?: string | null; className?: string | null }>) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{props.content ?? ''}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  TooltipContent: ({ props }: ComponentContext<{ children?: string | null; className?: string | null }>) => (
    <TooltipContent className={props.className ?? undefined}>{props.children ?? ''}</TooltipContent>
  ),
  LineChart: ({ props }: ComponentContext<{ data?: Record<string, unknown>[] | null; title?: string | null; className?: string | null }>) => {
    const data = (Array.isArray(props.data) ? props.data : []) as { name: string; [key: string]: string | number }[];
    const keys = data[0] ? Object.keys(data[0]).filter((k) => k !== 'name') : ['value'];
    return <LineChart data={data} lines={keys.map((dataKey) => ({ dataKey, name: dataKey }))} className={props.className ?? undefined} />;
  },
  BarChart: ({ props }: ComponentContext<{ data?: Record<string, unknown>[] | null; title?: string | null; className?: string | null }>) => {
    const data = (Array.isArray(props.data) ? props.data : []) as { name: string; [key: string]: string | number }[];
    const keys = data[0] ? Object.keys(data[0]).filter((k) => k !== 'name') : ['value'];
    return <BarChart data={data} bars={keys.map((dataKey) => ({ dataKey, name: dataKey }))} className={props.className ?? undefined} />;
  },
  PieChart: ({ props }: ComponentContext<{ data?: Record<string, unknown>[] | null; title?: string | null; className?: string | null }>) => {
    const data = (Array.isArray(props.data) ? props.data : []) as { name: string; value: number }[];
    return <RupaPieChart data={data} className={props.className ?? undefined} />;
  },
  AreaChart: ({ props }: ComponentContext<{ data?: Record<string, unknown>[] | null; title?: string | null; className?: string | null }>) => {
    const data = (Array.isArray(props.data) ? props.data : []) as { name: string; [key: string]: string | number }[];
    const keys = data[0] ? Object.keys(data[0]).filter((k) => k !== 'name') : ['value'];
    return <AreaChart data={data} areas={keys.map((dataKey) => ({ dataKey, name: dataKey }))} className={props.className ?? undefined} />;
  },
};
