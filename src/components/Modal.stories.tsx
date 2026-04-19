import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useState } from 'react';
import Button from './Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Title"
        >
          <p className="text-dim">Modal content goes here. This is a sample modal with some text content to demonstrate the component.</p>
        </Modal>
      </>
    );
  }
};