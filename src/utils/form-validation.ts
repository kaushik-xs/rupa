import { FormFieldValidation } from '../types/form';

/**
 * Email validation pattern
 */
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

/**
 * Convert form field validation config to react-hook-form validation rules
 */
export function convertValidationRules(
  validation: FormFieldValidation | undefined,
  fieldType?: string
): any {
  if (!validation) return {};

  const rules: any = {};

  // Required validation
  if (validation.required !== undefined) {
    rules.required = typeof validation.required === 'string' 
      ? validation.required 
      : validation.required 
        ? 'This field is required' 
        : false;
  }

  // Min length validation
  if (validation.minLength) {
    rules.minLength = {
      value: validation.minLength.value,
      message: validation.minLength.message || `Minimum length is ${validation.minLength.value}`,
    };
  }

  // Max length validation
  if (validation.maxLength) {
    rules.maxLength = {
      value: validation.maxLength.value,
      message: validation.maxLength.message || `Maximum length is ${validation.maxLength.value}`,
    };
  }

  // Min value validation (for numbers)
  if (validation.min) {
    rules.min = {
      value: validation.min.value,
      message: validation.min.message || `Minimum value is ${validation.min.value}`,
    };
  }

  // Max value validation (for numbers)
  if (validation.max) {
    rules.max = {
      value: validation.max.value,
      message: validation.max.message || `Maximum value is ${validation.max.value}`,
    };
  }

  // Pattern validation
  if (validation.pattern) {
    const pattern = typeof validation.pattern.value === 'string'
      ? new RegExp(validation.pattern.value)
      : validation.pattern.value;
    
    rules.pattern = {
      value: pattern,
      message: validation.pattern.message || 'Invalid format',
    };
  }

  // Email validation
  if (validation.email !== undefined || fieldType === 'email') {
    const emailMessage = typeof validation.email === 'string' 
      ? validation.email 
      : 'Invalid email address';
    
    rules.pattern = {
      value: EMAIL_PATTERN,
      message: emailMessage,
    };
  }

  // Custom validation
  if (validation.validate) {
    rules.validate = validation.validate;
  }

  return rules;
}

/**
 * Get default validation based on field type
 */
export function getDefaultValidationForType(fieldType: string): FormFieldValidation {
  const defaults: FormFieldValidation = {};

  switch (fieldType) {
    case 'email':
      defaults.email = true;
      break;
    case 'url':
      defaults.pattern = {
        value: /^https?:\/\/.+/,
        message: 'Invalid URL format',
      };
      break;
    case 'tel':
      defaults.pattern = {
        value: /^[\d\s\-\+\(\)]+$/,
        message: 'Invalid phone number',
      };
      break;
    case 'number':
      // Number type will be handled by HTML5 validation
      break;
    default:
      break;
  }

  return defaults;
}

/**
 * Validate a single field value
 */
export async function validateField(
  value: any,
  validation: FormFieldValidation | undefined,
  fieldType?: string
): Promise<string | boolean> {
  if (!validation) return true;

  const rules = convertValidationRules(validation, fieldType);

  // Check required
  if (rules.required && !value) {
    return typeof rules.required === 'string' ? rules.required : 'This field is required';
  }

  // Check minLength
  if (rules.minLength && typeof value === 'string') {
    const minLen = typeof rules.minLength === 'object' ? rules.minLength.value : rules.minLength;
    const message = typeof rules.minLength === 'object' ? rules.minLength.message : undefined;
    if (value.length < minLen) {
      return message || `Minimum length is ${minLen}`;
    }
  }

  // Check maxLength
  if (rules.maxLength && typeof value === 'string') {
    const maxLen = typeof rules.maxLength === 'object' ? rules.maxLength.value : rules.maxLength;
    const message = typeof rules.maxLength === 'object' ? rules.maxLength.message : undefined;
    if (value.length > maxLen) {
      return message || `Maximum length is ${maxLen}`;
    }
  }

  // Check min
  if (rules.min && typeof value === 'number') {
    const minVal = typeof rules.min === 'object' ? rules.min.value : rules.min;
    const message = typeof rules.min === 'object' ? rules.min.message : undefined;
    if (value < minVal) {
      return message || `Minimum value is ${minVal}`;
    }
  }

  // Check max
  if (rules.max && typeof value === 'number') {
    const maxVal = typeof rules.max === 'object' ? rules.max.value : rules.max;
    const message = typeof rules.max === 'object' ? rules.max.message : undefined;
    if (value > maxVal) {
      return message || `Maximum value is ${maxVal}`;
    }
  }

  // Check pattern
  if (rules.pattern && typeof value === 'string') {
    const pattern = typeof rules.pattern === 'object' ? rules.pattern.value : rules.pattern;
    const message = typeof rules.pattern === 'object' ? rules.pattern.message : undefined;
    const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
    if (!regex.test(value)) {
      return message || 'Invalid format';
    }
  }

  // Check custom validation
  if (rules.validate && typeof rules.validate === 'function') {
    const result = await (rules.validate as Function)(value);
    if (result !== true) {
      return typeof result === 'string' ? result : 'Validation failed';
    }
  } else if (rules.validate && typeof rules.validate === 'object') {
    for (const [key, validator] of Object.entries(rules.validate)) {
      if (typeof validator === 'function') {
        const result = await (validator as Function)(value);
        if (result !== true) {
          return typeof result === 'string' ? result : 'Validation failed';
        }
      }
    }
  }

  return true;
}

/**
 * Validate entire form data
 */
export async function validateFormData(
  data: Record<string, any>,
  fields: Array<{ name: string; validation?: FormFieldValidation; type?: string }>
): Promise<Record<string, string>> {
  const errors: Record<string, string> = {};

  for (const field of fields) {
    const value = data[field.name];
    const result = await validateField(value, field.validation, field.type);
    
    if (result !== true && typeof result === 'string') {
      errors[field.name] = result;
    }
  }

  return errors;
}

