import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import Button from './Button';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => {
    const items = [
      {
        label: 'Edit',
        value: 'edit',
        onSelect: () => console.log('Edit selected')
      },
      {
        label: 'Duplicate',
        value: 'duplicate',
        onSelect: () => console.log('Duplicate selected')
      },
      {
        label: 'Delete',
        value: 'delete',
        onSelect: () => console.log('Delete selected')
      }
    ];
    return (
      <Dropdown
        trigger={<Button variant="outline">Open Menu</Button>}
        items={items}
      />
    );
  }
};