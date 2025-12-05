import { layoutRegistry } from './registry';
import {
  Box,
  Flex,
  Grid,
  Stack,
  Container,
  Spacer,
  SidebarLayout,
  HeaderFooterLayout,
  SplitPane,
  TabsLayout,
  AccordionLayout,
  AutoGridLayout,
  MasonryLayout,
  ResponsiveDashboard,
  CardLayout,
  SectionLayout,
  StepperLayout,
  WizardLayout,
  PanelLayout,
  ModalLayout,
  FreePositionLayout,
  DragDropLayout,
  FlowLayout,
} from '../components/layouts';

/**
 * Register all layout components with the layout registry
 */
export function registerAllLayouts() {
  // Core Layout Primitives
  layoutRegistry.register('box', { component: Box });
  layoutRegistry.register('flex', { component: Flex });
  layoutRegistry.register('grid', { component: Grid });
  layoutRegistry.register('stack', { component: Stack });
  layoutRegistry.register('container', { component: Container });
  layoutRegistry.register('spacer', { component: Spacer });

  // Structural Layouts
  layoutRegistry.register('sidebarLayout', { component: SidebarLayout });
  layoutRegistry.register('headerFooterLayout', { component: HeaderFooterLayout });
  layoutRegistry.register('splitPane', { component: SplitPane });
  layoutRegistry.register('tabs', { component: TabsLayout });
  layoutRegistry.register('accordion', { component: AccordionLayout });

  // Dashboard Layouts
  layoutRegistry.register('autoGridLayout', { component: AutoGridLayout });
  layoutRegistry.register('masonryLayout', { component: MasonryLayout });
  layoutRegistry.register('responsiveDashboard', { component: ResponsiveDashboard });
  layoutRegistry.register('cardLayout', { component: CardLayout });
  layoutRegistry.register('sectionLayout', { component: SectionLayout });

  // Interaction-Based Layouts
  layoutRegistry.register('stepperLayout', { component: StepperLayout });
  layoutRegistry.register('wizardLayout', { component: WizardLayout });
  layoutRegistry.register('panelLayout', { component: PanelLayout });
  layoutRegistry.register('modalLayout', { component: ModalLayout });

  // Canvas/Design Layouts
  layoutRegistry.register('freePositionLayout', { component: FreePositionLayout });
  layoutRegistry.register('dragDropLayout', { component: DragDropLayout });
  layoutRegistry.register('flowLayout', { component: FlowLayout });
}

// Auto-register on import
registerAllLayouts();

