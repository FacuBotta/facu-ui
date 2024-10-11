import { Input } from "../src/components/input/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    label: "Name",
    required: true,
    error: { message: "The name is required", value: false },
    placeholder: "testing",
    id: "testing",
    width: "20%",
    // className: 'bg-slate-100 border-2 border-slate-300 rounded-lg p-2 outline-blue-500',
  },
};

export const Password: Story = {
  args: {
    required: true,
    label: "Password",
    placeholder: "testing",
    errorStyles: { color: "blue", fontSize: "0.5rem" },
    // error: { message: 'The name is required', value: true},
    regexp: {
      message: "Characters '@ - _ ; \" ' are not allowed",
      pattern: /[@-_;"']/,
    },
    id: "testing",
    width: "50%",
    type: "password",
    className: "bg-slate-d100 border-2 border-slate-300 rounded-lg p-2",
  },
};
