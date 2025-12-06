import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormConfig, FormFieldConfig } from '../../types/form';
import { FormLayout } from './FormLayout';
import { Button } from '../Button/Button';
import { executeApiAction } from '../../utils/api';
import { cn } from '../../utils/cn';

export interface FormProps extends FormConfig {
  /**
   * Context for API calls (will be passed to executeApiAction)
   */
  context?: Record<string, any>;
  
  /**
   * Callback when form state changes
   */
  onChange?: (data: Record<string, any>) => void;
  
  /**
   * Callback for successful submission (in addition to onSubmit)
   */
  onSuccess?: (data: any) => void;
  
  /**
   * Callback for submission error (in addition to onSubmit)
   */
  onError?: (error: any) => void;
}

export const Form: React.FC<FormProps> = ({
  id,
  fields = [],
  layout,
  onSubmit,
  submitText = 'Submit',
  cancelText = 'Cancel',
  onCancel,
  showSubmit = true,
  showCancel = false,
  mode = 'onBlur',
  defaultValues = {},
  className,
  stateKey,
  context = {},
  onChange,
  onSuccess,
  onError,
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  
  // Get all fields (from simple fields array or from layout sections)
  const allFields = React.useMemo(() => {
    if (layout?.sections) {
      return layout.sections.flatMap(section => section.fields);
    }
    return fields;
  }, [fields, layout]);
  
  // Prepare default values
  const formDefaultValues = React.useMemo(() => {
    const values: Record<string, any> = { ...defaultValues };
    
    // Add field default values
    allFields.forEach(field => {
      if (field.defaultValue !== undefined && values[field.name] === undefined) {
        values[field.name] = field.defaultValue;
      }
    });
    
    return values;
  }, [defaultValues, allFields]);
  
  // Initialize react-hook-form
  const methods = useForm({
    mode,
    defaultValues: formDefaultValues,
  });
  
  const { handleSubmit, reset, watch } = methods;
  
  // Watch for changes
  React.useEffect(() => {
    if (onChange) {
      const subscription = watch((data) => {
        onChange(data as Record<string, any>);
      });
      return () => subscription.unsubscribe();
    }
  }, [watch, onChange]);
  
  // Handle form submission
  const onSubmitHandler = async (data: any) => {
    if (!onSubmit) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    try {
      // Transform data if needed
      const transformedData = onSubmit.transformData 
        ? onSubmit.transformData(data)
        : data;
      
      // Execute API action
      const response = await executeApiAction(
        {
          ...onSubmit,
          method: onSubmit.method || 'POST',
          body: transformedData,
        } as any,
        context
      );
      
      setSubmitSuccess(true);
      
      // Call success handlers
      if (onSubmit.onSuccess) {
        await onSubmit.onSuccess(response.data, context);
      }
      if (onSuccess) {
        onSuccess(response.data);
      }
      
      // Reset form if configured
      if (onSubmit.resetOnSuccess) {
        reset();
      }
      
      // Show success message (optional - could integrate with toast system)
      if (onSubmit.successMessage) {
        console.log(onSubmit.successMessage);
      }
    } catch (error: any) {
      const errorMessage = onSubmit.errorMessage || error.message || 'Submission failed';
      setSubmitError(errorMessage);
      
      // Call error handlers
      if (onSubmit.onError) {
        await onSubmit.onError(error, context);
      }
      if (onError) {
        onError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={handleSubmit(onSubmitHandler)}
        className={cn('space-y-6', className)}
      >
        {/* Form fields */}
        <FormLayout layout={layout} fields={fields} />
        
        {/* Submit error */}
        {submitError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{submitError}</p>
          </div>
        )}
        
        {/* Submit success */}
        {submitSuccess && onSubmit?.successMessage && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-600">{onSubmit.successMessage}</p>
          </div>
        )}
        
        {/* Action buttons */}
        {(showSubmit || showCancel) && (
          <div className="flex items-center gap-4">
            {showSubmit && (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="min-w-[120px]"
              >
                {isSubmitting ? 'Submitting...' : submitText}
              </Button>
            )}
            
            {showCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                {cancelText}
              </Button>
            )}
          </div>
        )}
      </form>
    </FormProvider>
  );
};

Form.displayName = 'Form';

