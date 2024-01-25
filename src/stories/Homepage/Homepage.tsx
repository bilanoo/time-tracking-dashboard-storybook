import { useEffect, useState } from "react";
import { UserReportCard } from "../UserReportCard/UserReportCard";
import { Container } from "./Homepage.styled";
import data from "../../TimeTrackerData.json";

export const Homepage = () => {
  const [checked, setChecked] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );
  const [timeTrackingData, setTimeTrackingData] = useState(
    data.timeTrackerData.daily
  );

  console.log(timeTrackingData);
  useEffect(() => {
    setTimeTrackingData(data.timeTrackerData[checked]);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.id as "daily" | "weekly" | "monthly");
  };
  return (
    <Container>
      <UserReportCard
        username={"Jeremy Robson"}
        checked={checked}
        handleChange={handleChange}
      />
    </Container>
  );
};
