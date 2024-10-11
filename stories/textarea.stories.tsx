import React from 'react';
import { Textarea } from '../src/components/textarea/Textarea';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Textarea>;
const textareaRef = React.createRef<HTMLTextAreaElement>();

console.log(textareaRef.current);

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log(textareaRef.current?.value);
};

export const Text: Story = {
  args: {
    placeholder: 'testing',
    ref: textareaRef,
    minHeight: '60px',
    width: '70%',
    content: 'oh yeah'
  },
  render: (args) => {
    return (
      <>
        <Textarea ref={args.ref} {...args} />
        <button onClick={(e) => handleClick(e)}>click</button>
      </>
    );
  },
};