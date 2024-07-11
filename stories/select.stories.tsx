import { Select } from '../src/components/select/Select';
import type { Meta, StoryObj } from '@storybook/react';
import React from "react";

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Text: Story = {
  args: {
    width: '150px',
    className: 'bg-slate-100 border-2 border-slate-300 rounded-lg p-2 outline-blue-500',
    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </>
    )
    
  }
};