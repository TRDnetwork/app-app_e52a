import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'John Doe',
    size: 'md'
  }
};

export const WithFallback: Story = {
  args: {
    alt: 'John Doe',
    size: 'md'
  }
};

export const Small: Story = {
  args: {
    alt: 'JD',
    size: 'sm'
  }
};

export const Large: Story = {
  args: {
    alt: 'John Doe',
    size: 'lg'
  }
};