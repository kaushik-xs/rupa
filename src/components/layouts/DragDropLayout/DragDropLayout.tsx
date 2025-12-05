import * as React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';
import { GripVertical } from 'lucide-react';

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  handle?: boolean;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, children, handle = true }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'flex items-center gap-2 p-4 border border-border rounded-lg bg-card',
        isDragging && 'shadow-lg'
      )}
    >
      {handle && (
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground"
        >
          <GripVertical className="h-5 w-5" />
        </div>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export interface DragDropLayoutProps extends Omit<LayoutProps, 'direction'>, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  items?: Array<{ id: string; content: React.ReactNode }>;
  direction?: 'vertical' | 'horizontal';
  onReorder?: (newOrder: string[]) => void;
  handle?: boolean;
}

export const DragDropLayout = React.forwardRef<HTMLDivElement, DragDropLayoutProps>(
  (
    {
      className,
      items,
      direction = 'vertical',
      onReorder,
      handle = true,
      gap,
      padding,
      paddingX,
      paddingY,
      margin,
      marginX,
      marginY,
      background,
      border,
      borderRadius,
      shadow,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const [localItems, setLocalItems] = React.useState(
      items?.map((item: { id: string; content: React.ReactNode }) => item.id) || []
    );

    React.useEffect(() => {
      if (items) {
        setLocalItems(items.map((item: { id: string; content: React.ReactNode }) => item.id));
      }
    }, [items]);

    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );

    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = localItems.indexOf(active.id as string);
        const newIndex = localItems.indexOf(over.id as string);
        const newOrder = arrayMove(localItems, oldIndex, newIndex);
        setLocalItems(newOrder);
        if (onReorder) {
          onReorder(newOrder);
        }
      }
    };

    const sortedItems: Array<{ id: string; content: React.ReactNode }> = items
      ? localItems
          .map((id: string) => items.find((item: { id: string; content: React.ReactNode }) => item.id === id))
          .filter((item: { id: string; content: React.ReactNode } | undefined): item is { id: string; content: React.ReactNode } => Boolean(item))
      : [];

    const classes = cn(
      'flex',
      direction === 'vertical' ? 'flex-col' : 'flex-row',
      'gap-2',
      className
    );

    const strategy =
      direction === 'vertical'
        ? verticalListSortingStrategy
        : horizontalListSortingStrategy;

    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div ref={ref} className={classes} style={style} {...props}>
          {items ? (
            <SortableContext items={localItems} strategy={strategy}>
              {sortedItems.map((item: { id: string; content: React.ReactNode }) => (
                <SortableItem key={item.id} id={item.id} handle={handle}>
                  {item.content}
                </SortableItem>
              ))}
            </SortableContext>
          ) : (
            children
          )}
        </div>
      </DndContext>
    );
  }
);

DragDropLayout.displayName = 'DragDropLayout';

