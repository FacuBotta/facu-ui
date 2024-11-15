import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../src/components/icon/Icon';

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
export const Themes: Story = {
  args: {
    color: 'red',
    type: 'sun',
    width: 100,
    strokeWidth: 2,
    filled: false,
    onClick: () => alert('cliqueadito'),
  },
};
export const LinkedIn: Story = {
  args: {
    color: 'black',
    strokeWidth: 2,
    type: 'linkedIn',
    width: 100,
    hoverColor: 'red',
    onClick: () => alert('cliqueadito'),
  },
};
