# Form Component

A fully configurable form component built with `react-hook-form` that supports JSON-based configuration, multiple layouts, comprehensive validation, and seamless integration with the existing API action system.

## Features

- ✅ **JSON Configurable** - Define entire forms via JSON
- ✅ **Multiple Layouts** - Sections, tabs, accordion, grid, and more
- ✅ **Comprehensive Validation** - Required, min/max, pattern, email, custom validators
- ✅ **API Integration** - Built-in submission handling via API actions
- ✅ **Conditional Fields** - Show/hide fields based on form state
- ✅ **All Field Types** - Text, email, number, select, checkbox, radio, switch, slider, and more
- ✅ **TypeScript Support** - Fully typed configuration

## Installation

The Form component requires `react-hook-form`:

```bash
npm install react-hook-form @hookform/resolvers
```

## Basic Usage

### Simple Form

```tsx
import { Form } from '@kaushik91/rupa';

function MyForm() {
  return (
    <Form
      fields={[
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          validation: {
            required: 'Email is required',
            email: 'Invalid email format'
          }
        },
        {
          name: 'password',
          type: 'password',
          label: 'Password',
          validation: {
            required: true,
            minLength: { value: 8, message: 'Password must be at least 8 characters' }
          }
        }
      ]}
      submitText="Sign In"
      onSubmit={{
        method: 'POST',
        url: '/api/auth/login',
        successMessage: 'Login successful!',
        resetOnSuccess: false
      }}
    />
  );
}
```

### Form with Sections

```tsx
<Form
  layout={{
    type: 'sections',
    sections: [
      {
        id: 'personal',
        title: 'Personal Information',
        description: 'Tell us about yourself',
        fields: [
          { name: 'firstName', type: 'text', label: 'First Name', validation: { required: true } },
          { name: 'lastName', type: 'text', label: 'Last Name', validation: { required: true } }
        ]
      },
      {
        id: 'contact',
        title: 'Contact Details',
        fields: [
          { name: 'email', type: 'email', label: 'Email', validation: { required: true, email: true } },
          { name: 'phone', type: 'tel', label: 'Phone' }
        ]
      }
    ]
  }}
  submitText="Submit"
/>
```

### Form with Tabs

```tsx
<Form
  layout={{
    type: 'tabs',
    sections: [
      {
        id: 'account',
        title: 'Account',
        fields: [/* account fields */]
      },
      {
        id: 'profile',
        title: 'Profile',
        fields: [/* profile fields */]
      }
    ]
  }}
/>
```

## JSON Configuration

You can define forms entirely in JSON and render them with the layout renderer:

```json
{
  "type": "component",
  "props": {
    "component": "Form",
    "componentProps": {
      "fields": [
        {
          "name": "username",
          "type": "text",
          "label": "Username",
          "validation": {
            "required": "Username is required",
            "minLength": { "value": 3, "message": "Minimum 3 characters" }
          }
        }
      ],
      "onSubmit": {
        "method": "POST",
        "url": "/api/users",
        "successMessage": "User created successfully!"
      }
    }
  }
}
```

## Field Types

All supported field types:

- `text` - Standard text input
- `email` - Email input with validation
- `password` - Password input
- `number` - Number input
- `tel` - Telephone input
- `url` - URL input
- `date` - Date picker
- `datetime-local` - Date and time picker
- `time` - Time picker
- `textarea` - Multi-line text
- `select` - Dropdown selection
- `checkbox` - Single checkbox
- `radio` - Radio button group
- `switch` - Toggle switch
- `slider` - Range slider

## Validation

### Built-in Validators

```tsx
{
  validation: {
    required: true, // or custom message: "This field is required"
    minLength: { value: 3, message: "Minimum 3 characters" },
    maxLength: { value: 100, message: "Maximum 100 characters" },
    min: { value: 0, message: "Must be positive" },
    max: { value: 100, message: "Cannot exceed 100" },
    pattern: { 
      value: /^[A-Za-z]+$/, 
      message: "Only letters allowed" 
    },
    email: true, // or custom message
  }
}
```

### Custom Validators

```tsx
{
  validation: {
    validate: (value) => {
      if (value !== 'expected') {
        return 'Value must be "expected"';
      }
      return true;
    }
  }
}
```

### Async Validators

```tsx
{
  validation: {
    validate: async (value) => {
      const response = await fetch(`/api/check-username/${value}`);
      const data = await response.json();
      return data.available || 'Username is already taken';
    }
  }
}
```

## Layout Types

### Single Column (Default)

```tsx
<Form fields={[/* fields */]} />
```

### Two Column

```tsx
<Form
  layout={{ type: 'two-column' }}
  fields={[/* fields */]}
/>
```

### Grid

```tsx
<Form
  layout={{ 
    type: 'grid', 
    columns: 3,
    gap: 4 
  }}
  fields={[
    { name: 'field1', type: 'text', colSpan: 2 },
    { name: 'field2', type: 'text' }
  ]}
/>
```

### Sections

```tsx
<Form
  layout={{
    type: 'sections',
    sections: [/* section configs */]
  }}
/>
```

### Tabs

```tsx
<Form
  layout={{
    type: 'tabs',
    sections: [/* section configs */]
  }}
/>
```

### Accordion

```tsx
<Form
  layout={{
    type: 'accordion',
    sections: [/* section configs */]
  }}
/>
```

## Conditional Fields

Show/hide fields based on form state:

```tsx
{
  fields: [
    {
      name: 'accountType',
      type: 'radio',
      options: [
        { label: 'Personal', value: 'personal' },
        { label: 'Business', value: 'business' }
      ]
    },
    {
      name: 'companyName',
      type: 'text',
      label: 'Company Name',
      visible: (formData) => formData.accountType === 'business'
    }
  ]
}
```

## API Integration

Forms integrate seamlessly with the existing API action system:

```tsx
<Form
  fields={[/* fields */]}
  onSubmit={{
    method: 'POST',
    url: '/api/endpoint',
    successMessage: 'Success!',
    errorMessage: 'Something went wrong',
    resetOnSuccess: true,
    transformData: (data) => ({
      ...data,
      timestamp: new Date().toISOString()
    }),
    onSuccess: (response, context) => {
      console.log('Form submitted successfully', response);
    },
    onError: (error, context) => {
      console.error('Form submission failed', error);
    }
  }}
/>
```

## Props

### FormConfig

| Prop | Type | Description |
|------|------|-------------|
| `fields` | `FormFieldConfig[]` | Array of field configurations |
| `layout` | `FormLayoutConfig` | Layout configuration |
| `onSubmit` | `FormSubmitConfig` | Submission configuration |
| `submitText` | `string` | Submit button text (default: "Submit") |
| `cancelText` | `string` | Cancel button text |
| `onCancel` | `() => void` | Cancel button handler |
| `showSubmit` | `boolean` | Show submit button (default: true) |
| `showCancel` | `boolean` | Show cancel button (default: false) |
| `mode` | `'onChange' \| 'onBlur' \| 'onSubmit'` | Validation mode |
| `defaultValues` | `Record<string, any>` | Default form values |
| `className` | `string` | Custom CSS class |

### FormFieldConfig

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Field name (required) |
| `type` | `FormFieldType` | Field type (required) |
| `label` | `string` | Field label |
| `placeholder` | `string` | Placeholder text |
| `description` | `string` | Helper text |
| `defaultValue` | `any` | Default value |
| `validation` | `FormFieldValidation` | Validation rules |
| `options` | `Array<{label, value}>` | Options for select/radio |
| `disabled` | `boolean \| ((formData) => boolean)` | Disable field |
| `visible` | `boolean \| ((formData) => boolean)` | Show/hide field |
| `props` | `Record<string, any>` | Additional props |
| `colSpan` | `number` | Grid column span |
| `rowSpan` | `number` | Grid row span |

## Examples

Check the `Form.stories.tsx` file for comprehensive examples including:

- Basic forms with validation
- Two-column layouts
- Forms with sections
- Forms with tabs
- Forms with accordion
- Grid layouts
- All field types
- Conditional fields

See `example-config.json` for a complete JSON configuration example.

## TypeScript Support

All types are exported and can be imported:

```tsx
import type { 
  FormConfig, 
  FormFieldConfig, 
  FormLayoutConfig,
  FormValidation 
} from '@kaushik91/rupa';
```

