import { Meta, StoryObj } from "@storybook/react";
import { UserReportCard } from "./UserReportCard";

const meta = {
  title: "User Report Card/Report Card",
  component: UserReportCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserReportCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: "Jeremy Robson",
    checked: "Daily",
  },
};

export const Weekly: Story = {
  args: {
    username: "Jeremy Robson",
    checked: "Weekly",
  },
};

export const Monthly: Story = {
  args: {
    username: "Jeremy Robson",
    checked: "Monthly",
  },
};
