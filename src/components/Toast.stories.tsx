import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';
import { useState } from 'react';
import Button from './Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button onClick={() => setShow(true)}>Show Success Toast</Button>
        <Toast show={show} message="Operation completed successfully!" type="success" onClose={() => setShow(false)} />
      </>
    );
  }
};

export const Error: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button onClick={() => setShow(true)}>Show Error Toast</Button>
        <Toast show={show} message="An error occurred. Please try again." type="error" onClose={() => setShow(false)} />
      </>
    );
  }
};

export const Warning: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button onClick={() => setShow(true)}>Show Warning Toast</Button>
        <Toast show={show} message="This is a warning message." type="warning" onClose={() => setShow(false)} />
      </>
    );
  }
};

export const Info: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button onClick={() => setShow(true)}>Show Info Toast</Button>
        <Toast show={show} message="Here's some helpful information." type="info" onClose={() => setShow(false)} />
      </>
    );
  }
};