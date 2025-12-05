import * as React from 'react';
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { cn } from '../../utils/cn';

export interface RadarChartData {
  subject: string;
  [key: string]: string | number;
}

export interface RadarChartConfig {
  dataKey: string;
  stroke?: string;
  fill?: string;
  name?: string;
}

export interface RadarChartProps {
  data: RadarChartData[];
  radars: RadarChartConfig[];
  subjectKey?: string;
  height?: number;
  showLegend?: boolean;
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

const RadarChart: React.FC<RadarChartProps> = ({
  data,
  radars,
  subjectKey = 'subject',
  height = 300,
  showLegend = true,
  className,
  colors = defaultColors,
}) => {
  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsRadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={subjectKey} />
          <PolarRadiusAxis />
          {radars.map((radar, index) => (
            <Radar
              key={radar.dataKey}
              name={radar.name || radar.dataKey}
              dataKey={radar.dataKey}
              stroke={radar.stroke || colors[index % colors.length]}
              fill={radar.fill || colors[index % colors.length]}
              fillOpacity={0.6}
            />
          ))}
          {showLegend && <Legend />}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export { RadarChart };

