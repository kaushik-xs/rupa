import * as React from 'react';
import { Controller, useFormContext, FieldError } from 'react-hook-form';
import { FormFieldConfig } from '../../types/form';
import { convertValidationRules } from '../../utils/form-validation';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { RadioGroup, RadioGroupItem } from '../RadioGroup/RadioGroup';
import { Switch } from '../Switch/Switch';
import { Slider } from '../Slider/Slider';
import { Label } from '../Label/Label';
import { cn } from '../../utils/cn';

export interface FormFieldProps {
  field: FormFieldConfig;
  formData?: Record<string, any>;
}

export const FormField: React.FC<FormFieldProps> = ({ field, formData = {} }) => {
  const { control, formState: { errors }, watch } = useFormContext();
  
  // Get all form values to evaluate conditional logic
  const allValues = watch();
  
  // Check visibility
  const isVisible = typeof field.visible === 'function'
    ? field.visible(allValues)
    : field.visible !== false;
  
  if (!isVisible) return null;
  
  // Check if disabled
  const isDisabled = typeof field.disabled === 'function'
    ? field.disabled(allValues)
    : field.disabled === true;
  
  // Get validation rules
  const validationRules = convertValidationRules(field.validation, field.type);
  
  // Get error for this field
  const error = errors[field.name] as FieldError | undefined;
  
  // Render field based on type
  const renderField = (controlField: any) => {
    const commonProps: Record<string, any> = {
      disabled: isDisabled,
      ...field.props,
    };
    
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
      case 'date':
      case 'datetime-local':
      case 'time':
        return (
          <Input
            type={field.type}
            placeholder={field.placeholder}
            {...commonProps}
            {...controlField}
            className={cn(error && 'border-red-500', commonProps.className)}
          />
        );
      
      case 'textarea':
        return (
          <Textarea
            placeholder={field.placeholder}
            {...commonProps}
            {...controlField}
            className={cn(error && 'border-red-500', commonProps.className)}
          />
        );
      
      case 'select':
        return (
          <Select
            options={field.options?.map(opt => ({
              label: opt.label,
              value: opt.value,
              isDisabled: opt.disabled,
            }))}
            placeholder={field.placeholder}
            {...commonProps}
            value={field.options?.find(opt => opt.value === controlField.value)}
            onChange={(selected: any) => {
              controlField.onChange(selected?.value);
            }}
            onBlur={controlField.onBlur}
            className={cn(error && 'border-red-500', commonProps.className)}
          />
        );
      
      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              {...commonProps}
              checked={controlField.value}
              onCheckedChange={controlField.onChange}
              onBlur={controlField.onBlur}
              id={field.name}
            />
            {field.label && (
              <Label
                htmlFor={field.name}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {field.label}
              </Label>
            )}
          </div>
        );
      
      case 'radio':
        return (
          <RadioGroup
            {...commonProps}
            value={controlField.value}
            onValueChange={controlField.onChange}
          >
            {field.options?.map((option) => (
              <div key={String(option.value)} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={String(option.value)}
                  id={`${field.name}-${option.value}`}
                  disabled={option.disabled}
                />
                <Label
                  htmlFor={`${field.name}-${option.value}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      
      case 'switch':
        return (
          <div className="flex items-center space-x-2">
            <Switch
              {...commonProps}
              checked={controlField.value}
              onCheckedChange={controlField.onChange}
              id={field.name}
            />
            {field.label && (
              <Label
                htmlFor={field.name}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {field.label}
              </Label>
            )}
          </div>
        );
      
      case 'slider':
        return (
          <div className="space-y-2">
            <Slider
              {...commonProps}
              value={[controlField.value || 0]}
              onValueChange={(value) => controlField.onChange(value[0])}
              max={field.validation?.max?.value || 100}
              min={field.validation?.min?.value || 0}
              step={commonProps.step || 1}
            />
            <div className="text-sm text-muted-foreground text-right">
              {controlField.value || 0}
            </div>
          </div>
        );
      
      default:
        return (
          <Input
            type="text"
            placeholder={field.placeholder}
            {...commonProps}
            {...controlField}
            className={cn(error && 'border-red-500', commonProps.className)}
          />
        );
    }
  };
  
  // For checkbox and switch, we already render the label inline
  const renderLabelInline = field.type === 'checkbox' || field.type === 'switch';
  
  return (
    <div
      className={cn(
        'space-y-2',
        field.colSpan && `col-span-${field.colSpan}`,
        field.rowSpan && `row-span-${field.rowSpan}`
      )}
    >
      {field.label && !renderLabelInline && (
        <Label htmlFor={field.name}>
          {field.label}
          {field.validation?.required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      
      <Controller
        name={field.name}
        control={control}
        defaultValue={field.defaultValue}
        rules={validationRules}
        render={({ field: controlField }: { field: any }) => renderField(controlField)}
      />
      
      {field.description && !error && (
        <p className="text-sm text-muted-foreground">{field.description}</p>
      )}
      
      {error && (
        <p className="text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
};

FormField.displayName = 'FormField';

