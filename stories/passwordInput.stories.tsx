import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../src/components/input/PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Text: Story = {
  args: {
    regexp: {
      message: "Characters '@ - _ ; \" ' are not allowed",
      pattern: /[@-_;"']/,
    },
    error: { message: 'The name is required', value: false },
    placeholder: 'testing',
    id: 'testing',
    width: '20%',
  },
};
