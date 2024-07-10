import { Icon } from '../src/components/icon/Icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    color: 'black',
    type: 'star',
    fill: 'red',
    hoverColor: 'black',
    onClick: () => alert('click'),
  },
};
export const Secondary: Story = {
  args: {
    type: 'mapPin',
    color: 'black',
    hoverColor: 'blue',
    onClick: () => alert('cliqueadito'),
  },
};