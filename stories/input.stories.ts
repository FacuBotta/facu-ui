import { Input } from '../src/components/input/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    label: 'Name',
    required: true,
    error: { message: 'The name is required', value: false },
    placeholder: 'testing',
    id: 'testing',
    width: '100%',
    className: 'bg-slate-100 border-2 border-slate-300 rounded-lg p-2 outline-blue-500',
  },
};

export const Password: Story = {
  args: {
    required: true,
    label: 'Password',
    placeholder: 'testing',
    id: 'testing',
    width: '60%',
    type: 'password',
    className: 'bg-slate-100 border-2 border-slate-300 rounded-lg p-2',
  },
};

export const serach: Story = {
  args: {
    placeholder: 'testing',
    id: 'testing',
    width: '60%',
    type: 'search',
    className: 'bg-slate-100 border-2 border-slate-300 rounded-lg p-2',
  },
};