import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { FormConfig } from '../../types/form';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;

/**
 * Basic form with simple validation
 */
export const BasicForm: Story = {
  args: {
    fields: [
      {
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name',
        validation: {
          required: 'First name is required',
          minLength: {
            value: 2,
            message: 'First name must be at least 2 characters',
          },
        },
      },
      {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        validation: {
          required: 'Last name is required',
        },
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'your.email@example.com',
        description: 'We will never share your email with anyone else.',
        validation: {
          required: 'Email is required',
          email: 'Please enter a valid email address',
        },
      },
      {
        name: 'age',
        type: 'number',
        label: 'Age',
        placeholder: '18',
        validation: {
          required: 'Age is required',
          min: {
            value: 18,
            message: 'You must be at least 18 years old',
          },
          max: {
            value: 120,
            message: 'Please enter a valid age',
          },
        },
      },
    ],
    submitText: 'Submit',
    onSubmit: {
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      successMessage: 'Form submitted successfully!',
      resetOnSuccess: true,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Form with two-column layout
 */
export const TwoColumnForm: Story = {
  args: {
    layout: {
      type: 'two-column',
      gap: 4,
    },
    fields: [
      {
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'John',
        validation: { required: true },
      },
      {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Doe',
        validation: { required: true },
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'john.doe@example.com',
        validation: { required: true, email: true },
      },
      {
        name: 'phone',
        type: 'tel',
        label: 'Phone',
        placeholder: '+1 (555) 123-4567',
      },
      {
        name: 'address',
        type: 'text',
        label: 'Street Address',
        placeholder: '123 Main St',
      },
      {
        name: 'city',
        type: 'text',
        label: 'City',
        placeholder: 'New York',
      },
    ],
    submitText: 'Save Contact',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Form with sections
 */
export const FormWithSections: Story = {
  args: {
    layout: {
      type: 'sections',
      sections: [
        {
          id: 'personal',
          title: 'Personal Information',
          description: 'Please provide your personal details',
          fields: [
            {
              name: 'firstName',
              type: 'text',
              label: 'First Name',
              validation: { required: true },
            },
            {
              name: 'lastName',
              type: 'text',
              label: 'Last Name',
              validation: { required: true },
            },
            {
              name: 'email',
              type: 'email',
              label: 'Email Address',
              validation: { required: true, email: true },
            },
          ],
          divider: true,
        },
        {
          id: 'address',
          title: 'Address',
          description: 'Where can we reach you?',
          fields: [
            {
              name: 'street',
              type: 'text',
              label: 'Street Address',
            },
            {
              name: 'city',
              type: 'text',
              label: 'City',
            },
            {
              name: 'country',
              type: 'select',
              label: 'Country',
              options: [
                { label: 'United States', value: 'us' },
                { label: 'Canada', value: 'ca' },
                { label: 'United Kingdom', value: 'uk' },
                { label: 'Australia', value: 'au' },
              ],
            },
          ],
          divider: true,
        },
        {
          id: 'preferences',
          title: 'Preferences',
          fields: [
            {
              name: 'newsletter',
              type: 'checkbox',
              label: 'Subscribe to newsletter',
            },
            {
              name: 'notifications',
              type: 'switch',
              label: 'Enable notifications',
            },
          ],
        },
      ],
    },
    submitText: 'Complete Registration',
    showCancel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Form with tabs layout
 */
export const FormWithTabs: Story = {
  args: {
    layout: {
      type: 'tabs',
      sections: [
        {
          id: 'account',
          title: 'Account',
          description: 'Manage your account settings',
          fields: [
            {
              name: 'username',
              type: 'text',
              label: 'Username',
              validation: {
                required: true,
                minLength: { value: 3, message: 'Username must be at least 3 characters' },
              },
            },
            {
              name: 'email',
              type: 'email',
              label: 'Email',
              validation: { required: true, email: true },
            },
            {
              name: 'password',
              type: 'password',
              label: 'Password',
              validation: {
                required: true,
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
              },
            },
          ],
        },
        {
          id: 'profile',
          title: 'Profile',
          description: 'Your public profile information',
          fields: [
            {
              name: 'displayName',
              type: 'text',
              label: 'Display Name',
            },
            {
              name: 'bio',
              type: 'textarea',
              label: 'Bio',
              placeholder: 'Tell us about yourself',
            },
            {
              name: 'website',
              type: 'url',
              label: 'Website',
              placeholder: 'https://example.com',
            },
          ],
        },
        {
          id: 'privacy',
          title: 'Privacy',
          description: 'Control your privacy settings',
          fields: [
            {
              name: 'profileVisibility',
              type: 'radio',
              label: 'Profile Visibility',
              options: [
                { label: 'Public', value: 'public' },
                { label: 'Friends Only', value: 'friends' },
                { label: 'Private', value: 'private' },
              ],
              defaultValue: 'public',
            },
            {
              name: 'showEmail',
              type: 'switch',
              label: 'Show email on profile',
            },
          ],
        },
      ],
    },
    submitText: 'Save Settings',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Form with accordion layout
 */
export const FormWithAccordion: Story = {
  args: {
    layout: {
      type: 'accordion',
      sections: [
        {
          id: 'basic',
          title: 'Basic Information',
          fields: [
            {
              name: 'companyName',
              type: 'text',
              label: 'Company Name',
              validation: { required: true },
            },
            {
              name: 'industry',
              type: 'select',
              label: 'Industry',
              options: [
                { label: 'Technology', value: 'tech' },
                { label: 'Healthcare', value: 'health' },
                { label: 'Finance', value: 'finance' },
                { label: 'Education', value: 'education' },
              ],
            },
          ],
        },
        {
          id: 'contact',
          title: 'Contact Details',
          fields: [
            {
              name: 'contactEmail',
              type: 'email',
              label: 'Contact Email',
              validation: { required: true, email: true },
            },
            {
              name: 'contactPhone',
              type: 'tel',
              label: 'Contact Phone',
            },
          ],
        },
        {
          id: 'additional',
          title: 'Additional Information',
          fields: [
            {
              name: 'companySize',
              type: 'slider',
              label: 'Number of Employees',
              validation: {
                min: { value: 1, message: 'Must have at least 1 employee' },
                max: { value: 10000, message: 'Maximum 10000' },
              },
              defaultValue: 10,
              props: {
                step: 10,
              },
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Company Description',
              placeholder: 'Describe your company...',
            },
          ],
        },
      ],
    },
    submitText: 'Submit Company Info',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Form with grid layout
 */
export const FormWithGrid: Story = {
  args: {
    layout: {
      type: 'grid',
      columns: 3,
      gap: 4,
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        colSpan: 3,
        validation: { required: true },
      },
      {
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        validation: { required: true },
      },
      {
        name: 'middleName',
        type: 'text',
        label: 'Middle Name',
      },
      {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        validation: { required: true },
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        colSpan: 2,
        validation: { required: true, email: true },
      },
      {
        name: 'phone',
        type: 'tel',
        label: 'Phone',
      },
      {
        name: 'address',
        type: 'textarea',
        label: 'Full Address',
        colSpan: 3,
      },
    ],
    submitText: 'Submit',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Form with all field types
 */
export const AllFieldTypes: Story = {
  args: {
    fields: [
      {
        name: 'textField',
        type: 'text',
        label: 'Text Input',
        placeholder: 'Enter text',
      },
      {
        name: 'emailField',
        type: 'email',
        label: 'Email Input',
        placeholder: 'email@example.com',
      },
      {
        name: 'passwordField',
        type: 'password',
        label: 'Password Input',
        placeholder: 'Enter password',
      },
      {
        name: 'numberField',
        type: 'number',
        label: 'Number Input',
        placeholder: '42',
      },
      {
        name: 'textareaField',
        type: 'textarea',
        label: 'Textarea',
        placeholder: 'Enter multiple lines',
      },
      {
        name: 'selectField',
        type: 'select',
        label: 'Select Dropdown',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ],
      },
      {
        name: 'checkboxField',
        type: 'checkbox',
        label: 'I agree to terms and conditions',
      },
      {
        name: 'radioField',
        type: 'radio',
        label: 'Radio Group',
        options: [
          { label: 'Choice A', value: 'a' },
          { label: 'Choice B', value: 'b' },
          { label: 'Choice C', value: 'c' },
        ],
      },
      {
        name: 'switchField',
        type: 'switch',
        label: 'Enable feature',
      },
      {
        name: 'sliderField',
        type: 'slider',
        label: 'Volume',
        defaultValue: 50,
      },
      {
        name: 'dateField',
        type: 'date',
        label: 'Date',
      },
      {
        name: 'timeField',
        type: 'time',
        label: 'Time',
      },
    ],
    submitText: 'Submit All Fields',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Form with conditional fields
 */
export const ConditionalFields: Story = {
  args: {
    fields: [
      {
        name: 'accountType',
        type: 'radio',
        label: 'Account Type',
        options: [
          { label: 'Personal', value: 'personal' },
          { label: 'Business', value: 'business' },
        ],
        defaultValue: 'personal',
      },
      {
        name: 'personalName',
        type: 'text',
        label: 'Full Name',
        visible: (formData) => formData.accountType === 'personal',
        validation: {
          required: 'Name is required for personal accounts',
        },
      },
      {
        name: 'companyName',
        type: 'text',
        label: 'Company Name',
        visible: (formData) => formData.accountType === 'business',
        validation: {
          required: 'Company name is required for business accounts',
        },
      },
      {
        name: 'taxId',
        type: 'text',
        label: 'Tax ID',
        visible: (formData) => formData.accountType === 'business',
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        validation: { required: true, email: true },
      },
    ],
    submitText: 'Create Account',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

