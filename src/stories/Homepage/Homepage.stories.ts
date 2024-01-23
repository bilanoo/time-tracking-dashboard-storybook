import { Meta, StoryObj } from "@storybook/react";
import { Homepage } from "./Homepage";

const meta = {
  title: "Pages/Homepage",
  component: Homepage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Homepage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
