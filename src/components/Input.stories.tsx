import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'textarea']
    },
    required: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  }
};

export const Text: Story = {
  ...Template,
  args: {
    label: 'Text Input',
    id: 'text-input',
    type: 'text'
  }
};

export const Email: Story = {
  ...Template,
  args: {
    label: 'Email Input',
    id: 'email-input',
    type: 'email'
  }
};

export const Password: Story = {
  ...Template,
  args: {
    label: 'Password Input',
    id: 'password-input',
    type: 'password'
  }
};

export const Textarea: Story = {
  ...Template,
  args: {
    label: 'Textarea',
    id: 'textarea-input',
    type: 'textarea'
  }
};

export const Required: Story = {
  ...Template,
  args: {
    label: 'Required Input',
    id: 'required-input',
    required: true
  }
};

export const WithError: Story = {
  ...Template,
  args: {
    label: 'Input with Error',
    id: 'error-input',
    error: 'This field is required'
  }
};