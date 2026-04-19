import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <p className="text-dim">Card content goes here</p>
  }
};

export const WithHeader: Story = {
  args: {
    header: 'Card Header',
    children: <p className="text-dim">Card content goes here</p>
  }
};

export const WithFooter: Story = {
  args: {
    children: <p className="text-dim">Card content goes here</p>,
    footer: <small>Card footer content</small>
  }
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: 'Card Header',
    children: <p className="text-dim">Card content goes here</p>,
    footer: <small>Card footer content</small>
  }
};