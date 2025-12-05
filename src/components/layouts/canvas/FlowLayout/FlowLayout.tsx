import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';

export interface FlowNode {
  id: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  content?: React.ReactNode;
  label?: string;
}

export interface FlowEdge {
  id: string;
  from: string;
  to: string;
  label?: string;
}

export interface FlowLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  nodes?: FlowNode[];
  edges?: FlowEdge[];
  showEdges?: boolean;
  nodeSize?: { width: number; height: number };
}

export const FlowLayout = React.forwardRef<HTMLDivElement, FlowLayoutProps>(
  (
    {
      className,
      nodes,
      edges,
      showEdges = true,
      nodeSize = { width: 120, height: 60 },
      width,
      height,
      background,
      border,
      borderRadius,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'relative',
      background && `bg-${background}`,
      border === true && 'border',
      typeof border === 'string' && `border-${border}`,
      borderRadius && (typeof borderRadius === 'number' ? `rounded-${borderRadius}` : `rounded-${borderRadius}`),
      className
    );

    const containerStyles: React.CSSProperties = {
      ...style,
      width: typeof width === 'number' ? `${width}px` : width || '100%',
      height: typeof height === 'number' ? `${height}px` : height || '600px',
      position: 'relative',
    };

    const getNodePosition = (node: FlowNode) => {
      const nodeWidth = node.width || nodeSize.width;
      const nodeHeight = node.height || nodeSize.height;
      return {
        left: node.x - nodeWidth / 2,
        top: node.y - nodeHeight / 2,
        width: nodeWidth,
        height: nodeHeight,
      };
    };

    const getEdgePath = (edge: FlowEdge) => {
      const fromNode = nodes?.find((n: FlowNode) => n.id === edge.from);
      const toNode = nodes?.find((n: FlowNode) => n.id === edge.to);
      
      if (!fromNode || !toNode) return '';

      const fromPos = getNodePosition(fromNode);
      const toPos = getNodePosition(toNode);

      const fromX = fromNode.x;
      const fromY = fromNode.y;
      const toX = toNode.x;
      const toY = toNode.y;

      // Simple line path (can be enhanced with curves)
      return `M ${fromX} ${fromY} L ${toX} ${toY}`;
    };

    return (
      <div ref={ref} className={classes} style={containerStyles} {...props}>
        {showEdges && edges && (
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ width: '100%', height: '100%' }}
          >
            {edges.map((edge: FlowEdge) => {
              const path = getEdgePath(edge);
              if (!path) return null;
              
              return (
                <g key={edge.id}>
                  <path
                    d={path}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-border"
                  />
                  {edge.label && (
                    <text
                      x={((nodes?.find((n: FlowNode) => n.id === edge.from)?.x || 0) + 
                         (nodes?.find((n: FlowNode) => n.id === edge.to)?.x || 0)) / 2}
                      y={((nodes?.find((n: FlowNode) => n.id === edge.from)?.y || 0) + 
                         (nodes?.find((n: FlowNode) => n.id === edge.to)?.y || 0)) / 2}
                      className="text-xs fill-foreground"
                      textAnchor="middle"
                    >
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        )}
        {nodes ? (
          nodes.map((node: FlowNode) => {
            const position = getNodePosition(node);
            return (
              <div
                key={node.id}
                className="absolute border border-border rounded-lg bg-card p-2 shadow-sm"
                style={{
                  left: `${position.left}px`,
                  top: `${position.top}px`,
                  width: `${position.width}px`,
                  height: `${position.height}px`,
                }}
              >
                {node.label && (
                  <div className="text-xs font-medium mb-1">{node.label}</div>
                )}
                {node.content}
              </div>
            );
          })
        ) : (
          children
        )}
      </div>
    );
  }
);

FlowLayout.displayName = 'FlowLayout';

