import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/button/button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'perrito!',
    className: 'bg-yellow-500 border-2 border-black border-yellow-500 text-black',
    onClick: () => alert('cliqueadito'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'otro clic',
    onClick: () => alert('Clicked'),
  }
};