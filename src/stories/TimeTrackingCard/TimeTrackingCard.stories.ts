import { Meta, StoryObj } from "@storybook/react";
import { TimeTrackingCard } from "./TimeTrackingCard";

const meta = {
  title: "Time Tracking Card/Time Card",
  component: TimeTrackingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimeTrackingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
