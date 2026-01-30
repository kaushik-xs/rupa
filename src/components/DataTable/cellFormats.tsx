import * as React from 'react';
import { Badge } from '../Badge/Badge';
import type {
  DataTableCellFormat,
  DataTableFormatOptions,
  DataTableFormatBadgeOptions,
  DataTableFormatNumberOptions,
  DataTableFormatCurrencyOptions,
  DataTableFormatDateOptions,
  DataTableBadgeVariant,
} from './types';

function isBadgeOptions(o: DataTableFormatOptions): o is DataTableFormatBadgeOptions {
  return 'variantMap' in o || 'defaultVariant' in o;
}
function isCurrencyOptions(o: DataTableFormatOptions): o is DataTableFormatCurrencyOptions {
  return 'currency' in o;
}
function isDateOptions(o: DataTableFormatOptions): o is DataTableFormatDateOptions {
  return 'dateStyle' in o || 'timeStyle' in o;
}

/** Renders a cell value using a built-in format. Used when column.format is set and column.cell is not. */
export function renderCellFormat(
  value: unknown,
  format: DataTableCellFormat,
  formatOptions?: DataTableFormatOptions
): React.ReactNode {
  if (value == null) return '—';

  switch (format) {
    case 'text':
      return String(value);

    case 'badge': {
      const opts = formatOptions && isBadgeOptions(formatOptions) ? formatOptions : undefined;
      const str = String(value);
      const variant: DataTableBadgeVariant =
        opts?.variantMap?.[str] ?? opts?.defaultVariant ?? 'secondary';
      return <Badge variant={variant}>{str}</Badge>;
    }

    case 'number': {
      const num = typeof value === 'number' ? value : Number(value);
      if (Number.isNaN(num)) return String(value);
      const opts = formatOptions as DataTableFormatNumberOptions | undefined;
      const locale = opts?.locale ?? undefined;
      const decimals = opts?.decimals ?? undefined;
      return new Intl.NumberFormat(locale, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      }).format(num);
    }

    case 'currency': {
      const num = typeof value === 'number' ? value : Number(value);
      if (Number.isNaN(num)) return String(value);
      const opts = formatOptions as DataTableFormatCurrencyOptions | undefined;
      return new Intl.NumberFormat(opts?.locale, {
        style: 'currency',
        currency: opts?.currency ?? 'USD',
        maximumFractionDigits: opts?.decimals ?? 2,
        minimumFractionDigits: opts?.decimals ?? 2,
      }).format(num);
    }

    case 'percent': {
      const num = typeof value === 'number' ? value : Number(value);
      if (Number.isNaN(num)) return String(value);
      const opts = formatOptions as DataTableFormatNumberOptions | undefined;
      const decimals = opts?.decimals ?? 0;
      return new Intl.NumberFormat(opts?.locale, {
        style: 'percent',
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      }).format(num);
    }

    case 'date':
    case 'datetime': {
      const date = value instanceof Date ? value : new Date(String(value));
      if (Number.isNaN(date.getTime())) return String(value);
      const opts = formatOptions && isDateOptions(formatOptions) ? formatOptions : undefined;
      if (format === 'date') {
        return new Intl.DateTimeFormat(opts?.locale, {
          dateStyle: opts?.dateStyle ?? 'medium',
        }).format(date);
      }
      return new Intl.DateTimeFormat(opts?.locale, {
        dateStyle: opts?.dateStyle ?? 'short',
        timeStyle: opts?.timeStyle ?? 'short',
      }).format(date);
    }

    default:
      return String(value);
  }
}
