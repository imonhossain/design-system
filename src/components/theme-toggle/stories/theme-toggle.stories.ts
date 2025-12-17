import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeToggle } from "../theme-toggle";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showLabel: {
      control: "boolean",
      description: "Show label text next to the toggle",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the toggle",
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showLabel: true,
    size: "medium",
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    showLabel: true,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    showLabel: true,
    size: "large",
  },
};
