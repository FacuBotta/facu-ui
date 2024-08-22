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
    label: 'Select',
    required: true,
    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
        <option>Option 6</option>
      </>
    )
    
  }
};