import * as React from 'react';
import {
  ComposedChart as RechartsComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { cn } from '../../utils/cn';

export interface ComposedChartData {
  name: string;
  [key: string]: string | number;
}

export interface ComposedChartConfig {
  type: 'line' | 'bar' | 'area';
  dataKey: string;
  stroke?: string;
  fill?: string;
  name?: string;
  strokeWidth?: number;
}

export interface ComposedChartProps {
  data: ComposedChartData[];
  series: ComposedChartConfig[];
  xAxisKey?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  colors?: string[];
}

const defaultColors = [
  'hsl(var(--primary))',
  'hsl(var(--secondary))',
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff7300',
];

const ComposedChart: React.FC<ComposedChartProps> = ({
  data,
  series,
  xAxisKey = 'name',
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className,
  colors = defaultColors,
}) => {
  let colorIndex = 0;

  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsComposedChart data={data}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          {showTooltip && <Tooltip />}
          {showLegend && <Legend />}
          {series.map((serie, index) => {
            const color = serie.stroke || serie.fill || colors[colorIndex % colors.length];
            colorIndex++;

            if (serie.type === 'line') {
              return (
                <Line
                  key={serie.dataKey}
                  type="monotone"
                  dataKey={serie.dataKey}
                  stroke={color}
                  strokeWidth={serie.strokeWidth || 2}
                  name={serie.name || serie.dataKey}
                />
              );
            } else if (serie.type === 'bar') {
              return (
                <Bar
                  key={serie.dataKey}
                  dataKey={serie.dataKey}
                  fill={color}
                  name={serie.name || serie.dataKey}
                />
              );
            } else if (serie.type === 'area') {
              return (
                <Area
                  key={serie.dataKey}
                  type="monotone"
                  dataKey={serie.dataKey}
                  stroke={color}
                  fill={color}
                  name={serie.name || serie.dataKey}
                />
              );
            }
            return null;
          })}
        </RechartsComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export { ComposedChart };

