import React from 'react';
import { LayoutRegistryEntry, WidgetRegistryEntry, LayoutProps } from '../types/layout';

/**
 * Registry for layout components
 * Maps layout type strings to React components
 */
export class LayoutRegistry {
  private registry: Map<string, LayoutRegistryEntry> = new Map();

  /**
   * Register a layout component
   */
  register(type: string, entry: LayoutRegistryEntry): void {
    this.registry.set(type, entry);
  }

  /**
   * Get a layout component by type
   */
  get(type: string): LayoutRegistryEntry | undefined {
    return this.registry.get(type);
  }

  /**
   * Check if a layout type is registered
   */
  has(type: string): boolean {
    return this.registry.has(type);
  }

  /**
   * Get all registered types
   */
  getTypes(): string[] {
    return Array.from(this.registry.keys());
  }

  /**
   * Unregister a layout component
   */
  unregister(type: string): boolean {
    return this.registry.delete(type);
  }

  /**
   * Clear all registrations
   */
  clear(): void {
    this.registry.clear();
  }
}

/**
 * Registry for widget/custom components
 * Maps component names to React components
 */
export class WidgetRegistry {
  private registry: Map<string, WidgetRegistryEntry> = new Map();

  /**
   * Register a widget component
   */
  register(name: string, entry: WidgetRegistryEntry): void {
    this.registry.set(name, entry);
  }

  /**
   * Get a widget component by name
   */
  get(name: string): WidgetRegistryEntry | undefined {
    return this.registry.get(name);
  }

  /**
   * Check if a widget is registered
   */
  has(name: string): boolean {
    return this.registry.has(name);
  }

  /**
   * Get all registered widget names
   */
  getNames(): string[] {
    return Array.from(this.registry.keys());
  }

  /**
   * Unregister a widget component
   */
  unregister(name: string): boolean {
    return this.registry.delete(name);
  }

  /**
   * Clear all registrations
   */
  clear(): void {
    this.registry.clear();
  }
}

/**
 * Global registry instances
 */
export const layoutRegistry = new LayoutRegistry();
export const widgetRegistry = new WidgetRegistry();

