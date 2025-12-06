import { ApiActionConfig } from '../utils/api';

/**
 * Supported form field types
 */
export type FormFieldType = 
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'time'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'slider';

/**
 * Form field validation rules
 */
export interface FormFieldValidation {
  /**
   * Whether the field is required
   */
  required?: boolean | string; // true or custom error message
  
  /**
   * Minimum length for text inputs
   */
  minLength?: {
    value: number;
    message?: string;
  };
  
  /**
   * Maximum length for text inputs
   */
  maxLength?: {
    value: number;
    message?: string;
  };
  
  /**
   * Minimum value for number inputs
   */
  min?: {
    value: number;
    message?: string;
  };
  
  /**
   * Maximum value for number inputs
   */
  max?: {
    value: number;
    message?: string;
  };
  
  /**
   * Pattern validation (regex)
   */
  pattern?: {
    value: string | RegExp;
    message?: string;
  };
  
  /**
   * Custom validation function
   */
  validate?: ((value: any) => boolean | string | Promise<boolean | string>) | Record<string, (value: any) => boolean | string | Promise<boolean | string>>;
  
  /**
   * Email validation
   */
  email?: boolean | string; // true or custom error message
}

/**
 * Form field configuration
 */
export interface FormFieldConfig {
  /**
   * Unique field name (will be used as key in form data)
   */
  name: string;
  
  /**
   * Field type
   */
  type: FormFieldType;
  
  /**
   * Field label
   */
  label?: string;
  
  /**
   * Field placeholder
   */
  placeholder?: string;
  
  /**
   * Field description/helper text
   */
  description?: string;
  
  /**
   * Default value
   */
  defaultValue?: any;
  
  /**
   * Validation rules
   */
  validation?: FormFieldValidation;
  
  /**
   * Options for select, radio, checkbox group
   */
  options?: Array<{
    label: string;
    value: string | number | boolean;
    disabled?: boolean;
  }>;
  
  /**
   * Whether the field is disabled
   */
  disabled?: boolean | ((formData: any) => boolean);
  
  /**
   * Conditional visibility
   */
  visible?: boolean | ((formData: any) => boolean);
  
  /**
   * Additional props to pass to the field component
   */
  props?: Record<string, any>;
  
  /**
   * Grid column span (for grid layouts)
   */
  colSpan?: number;
  
  /**
   * Grid row span (for grid layouts)
   */
  rowSpan?: number;
}

/**
 * Form section configuration
 */
export interface FormSectionConfig {
  /**
   * Section ID
   */
  id?: string;
  
  /**
   * Section title
   */
  title?: string;
  
  /**
   * Section description
   */
  description?: string;
  
  /**
   * Fields in this section
   */
  fields: FormFieldConfig[];
  
  /**
   * Whether to show a divider after this section
   */
  divider?: boolean;
  
  /**
   * Conditional visibility
   */
  visible?: boolean | ((formData: any) => boolean);
  
  /**
   * Section layout (default is single column)
   */
  layout?: 'single' | 'two-column' | 'grid';
  
  /**
   * Grid columns (for grid layout)
   */
  columns?: number;
}

/**
 * Form layout configuration
 */
export interface FormLayoutConfig {
  /**
   * Layout type
   */
  type: 'single' | 'two-column' | 'grid' | 'sections' | 'tabs' | 'accordion';
  
  /**
   * Grid columns (for grid layout)
   */
  columns?: number;
  
  /**
   * Gap between fields
   */
  gap?: number;
  
  /**
   * Sections configuration (for sections/tabs/accordion layouts)
   */
  sections?: FormSectionConfig[];
}

/**
 * Form submission configuration
 */
export interface FormSubmitConfig extends ApiActionConfig {
  /**
   * Success message to display
   */
  successMessage?: string;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Whether to reset form on successful submission
   */
  resetOnSuccess?: boolean;
  
  /**
   * Transform form data before submission
   */
  transformData?: (data: any) => any;
}

/**
 * Main form configuration
 */
export interface FormConfig {
  /**
   * Form ID
   */
  id?: string;
  
  /**
   * Form fields (for simple layouts)
   */
  fields?: FormFieldConfig[];
  
  /**
   * Form layout configuration
   */
  layout?: FormLayoutConfig;
  
  /**
   * Form submission configuration (uses API action system)
   */
  onSubmit?: FormSubmitConfig;
  
  /**
   * Submit button text
   */
  submitText?: string;
  
  /**
   * Cancel button text (optional)
   */
  cancelText?: string;
  
  /**
   * Cancel button handler
   */
  onCancel?: () => void;
  
  /**
   * Whether to show submit button
   */
  showSubmit?: boolean;
  
  /**
   * Whether to show cancel button
   */
  showCancel?: boolean;
  
  /**
   * Form mode: onChange updates on every change, onBlur on blur, onSubmit only on submit
   */
  mode?: 'onChange' | 'onBlur' | 'onSubmit';
  
  /**
   * Default values for the entire form
   */
  defaultValues?: Record<string, any>;
  
  /**
   * Class name for the form element
   */
  className?: string;
  
  /**
   * Custom form state key in context
   */
  stateKey?: string;
}

