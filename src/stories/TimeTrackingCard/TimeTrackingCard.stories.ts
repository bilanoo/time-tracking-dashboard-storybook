import { Meta, StoryObj } from "@storybook/react";
import { TimeTrackingCard } from "./TimeTrackingCard";
import WorkIcon from "../../assets/icon-work.svg";
import ExerciseIcon from "../../assets/icon-exercise.svg";
import PlayIcon from "../../assets/icon-play.svg";
import SelfCareIcon from "../../assets/icon-self-care.svg";
import SocialIcon from "../../assets/icon-social.svg";
import StudyIcon from "../../assets/icon-study.svg";

const meta = {
  title: "Time Tracking Card/Time Card",
  component: TimeTrackingCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    timeCardIcon: {
      options: [
        WorkIcon,
        ExerciseIcon,
        PlayIcon,
        SelfCareIcon,
        SocialIcon,
        StudyIcon,
      ],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimeTrackingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardType: "Work",
    activityHours: "32",
    lastWeekHours: "64",
    backgroundColor: "hsl(15, 100%, 70%)",
    timeCardIcon: WorkIcon,
  },
};
