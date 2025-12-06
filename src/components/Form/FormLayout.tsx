import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormLayoutConfig, FormSectionConfig, FormFieldConfig } from '../../types/form';
import { FormField } from './FormField';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs/Tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../Accordion/Accordion';
import { cn } from '../../utils/cn';

export interface FormLayoutProps {
  layout?: FormLayoutConfig;
  fields?: FormFieldConfig[];
}

export const FormLayout: React.FC<FormLayoutProps> = ({ layout, fields = [] }) => {
  const { watch } = useFormContext();
  const allValues = watch();
  
  // Simple layout (no sections)
  if (!layout || !layout.sections) {
    return (
      <div
        className={cn(
          'space-y-4',
          layout?.type === 'two-column' && 'grid grid-cols-2 gap-4',
          layout?.type === 'grid' && `grid grid-cols-${layout.columns || 2} gap-${layout.gap || 4}`
        )}
      >
        {fields.map((field) => (
          <FormField key={field.name} field={field} formData={allValues} />
        ))}
      </div>
    );
  }
  
  // Filter visible sections
  const visibleSections = layout.sections.filter((section) => {
    if (section.visible === undefined) return true;
    return typeof section.visible === 'function'
      ? section.visible(allValues)
      : section.visible;
  });
  
  // Render section fields
  const renderSectionFields = (section: FormSectionConfig) => {
    const sectionClass = cn(
      'space-y-4',
      section.layout === 'two-column' && 'grid grid-cols-2 gap-4',
      section.layout === 'grid' && `grid grid-cols-${section.columns || 2} gap-4`
    );
    
    return (
      <div className={sectionClass}>
        {section.fields.map((field) => (
          <FormField key={field.name} field={field} formData={allValues} />
        ))}
      </div>
    );
  };
  
  // Render section header
  const renderSectionHeader = (section: FormSectionConfig) => (
    <>
      {section.title && (
        <h3 className="text-lg font-semibold">{section.title}</h3>
      )}
      {section.description && (
        <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
      )}
    </>
  );
  
  // Sections layout
  if (layout.type === 'sections') {
    return (
      <div className="space-y-6">
        {visibleSections.map((section, index) => (
          <div key={section.id || index} className="space-y-4">
            {renderSectionHeader(section)}
            {renderSectionFields(section)}
            {section.divider !== false && index < visibleSections.length - 1 && (
              <hr className="my-6 border-border" />
            )}
          </div>
        ))}
      </div>
    );
  }
  
  // Tabs layout
  if (layout.type === 'tabs') {
    return (
      <Tabs defaultValue={visibleSections[0]?.id || '0'}>
        <TabsList>
          {visibleSections.map((section, index) => (
            <TabsTrigger
              key={section.id || index}
              value={section.id || String(index)}
            >
              {section.title || `Tab ${index + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>
        {visibleSections.map((section, index) => (
          <TabsContent
            key={section.id || index}
            value={section.id || String(index)}
            className="mt-6"
          >
            {section.description && (
              <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
            )}
            {renderSectionFields(section)}
          </TabsContent>
        ))}
      </Tabs>
    );
  }
  
  // Accordion layout
  if (layout.type === 'accordion') {
    return (
      <Accordion type="multiple" className="w-full">
        {visibleSections.map((section, index) => (
          <AccordionItem
            key={section.id || index}
            value={section.id || String(index)}
          >
            <AccordionTrigger>
              {section.title || `Section ${index + 1}`}
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {section.description && (
                <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
              )}
              {renderSectionFields(section)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  
  // Default to sections layout
  return (
    <div className="space-y-6">
      {visibleSections.map((section, index) => (
        <div key={section.id || index} className="space-y-4">
          {renderSectionHeader(section)}
          {renderSectionFields(section)}
          {section.divider !== false && index < visibleSections.length - 1 && (
            <hr className="my-6 border-border" />
          )}
        </div>
      ))}
    </div>
  );
};

FormLayout.displayName = 'FormLayout';

