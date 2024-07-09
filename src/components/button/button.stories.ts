import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Login!',
    className: 'bg-slate-200',
    onClick: () => alert('cliqueadito'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'otro clic',
    onClick: () => alert('Clicked'),
  }
};