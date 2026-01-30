import * as React from 'react';
import { renderCellFormat } from './cellFormats';
import type { DataTableConfigurableRenderer, DataTableFormatOptions } from './types';

/** Built-in cell renderers keyed by type name. Used when cellConfig is set (JSON config). */
export const defaultCellRenderers: Record<string, DataTableConfigurableRenderer> = {
  text: (_row, value) => (value != null ? String(value) : '—'),

  badge: (_row, value, options) =>
    renderCellFormat(value, 'badge', options as DataTableFormatOptions),

  number: (_row, value, options) =>
    renderCellFormat(value, 'number', options as DataTableFormatOptions),

  currency: (_row, value, options) =>
    renderCellFormat(value, 'currency', options as DataTableFormatOptions),

  date: (_row, value, options) =>
    renderCellFormat(value, 'date', options as DataTableFormatOptions),

  datetime: (_row, value, options) =>
    renderCellFormat(value, 'datetime', options as DataTableFormatOptions),

  percent: (_row, value, options) =>
    renderCellFormat(value, 'percent', options as DataTableFormatOptions),

  /** Options: hrefKey (row key for href), textKey (row key for link text). Default: value as href and text. */
  link: (row, value, options) => {
    const r = row as Record<string, unknown>;
    const hrefKey = options?.hrefKey as string | undefined;
    const textKey = options?.textKey as string | undefined;
    const href = hrefKey != null ? r[hrefKey] : value;
    const text = textKey != null ? r[textKey] : value;
    if (href == null || href === '') return String(text ?? '—');
    return (
      <a
        href={String(href)}
        className="text-primary hover:underline"
        target={options?.target as string | undefined}
        rel={options?.rel as string | undefined}
      >
        {text != null ? String(text) : '—'}
      </a>
    );
  },
};

/**
 * Merges custom renderers with the default registry. Use to extend or override built-ins.
 * Example: getCellRenderers({ myBadge: (row, value, opts) => <CustomBadge {...opts} /> })
 */
export function getCellRenderers(
  custom?: Record<string, DataTableConfigurableRenderer>
): Record<string, DataTableConfigurableRenderer> {
  if (!custom || Object.keys(custom).length === 0) return defaultCellRenderers;
  return { ...defaultCellRenderers, ...custom };
}
