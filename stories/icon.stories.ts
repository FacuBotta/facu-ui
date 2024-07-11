import { Icon } from '../src/components/icon/Icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    color: 'white',
    type: 'burgerMenu',
    width: 100,
    filled: true,
    hoverColor: '#ff0394',
    onClick: () => alert('cliqueadito'),
  },
};
export const Secondary: Story = {
  args: {
    color: 'white',
    type: 'linkedIn',
    width: 100,
    hoverColor: 'red',
    onClick: () => alert('cliqueadito'),
  },
};