import { Input } from '../src/components/input/Input';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
    width: '20%',
    // className: 'bg-slate-100 border-2 border-slate-300 rounded-lg p-2 outline-blue-500',
  },
};

export const MultiInputs: Story = {
  render: () => (
    <>
      <Input label="Name" required={true} error={{ message: 'The name is required', value: false }} placeholder="name" width="20%" />
      <Input label="Email" required={true} error={{ message: 'The name is required', value: false }} placeholder="email" width="20%" />
      <Input label="Password" required={true} placeholder="password" regexp={{ message: 'Characters \'@ - _ ; " \' are not allowed', pattern: /[@-_;"']/ }} id="testing" width="50%" type="password" />
    </>
  )
}

export const Password: Story = {
  args: {
    required: true,
    label: 'Password',
    placeholder: 'testing',
    // error: { message: 'The name is required', value: true},
    regexp: { message: 'Characters \'@ - _ ; " \' are not allowed', pattern: /[@-_;"']/ },
    id: 'testing',
    color: 'currentColor',
    width: '50%',
    type: 'password',
  },
};