import {
  ActivityHours,
  CardDetailsContainer,
  CardType,
  Container,
  EllipsisContainer,
  EllipsisImage,
  GenericContainer,
  HoursContainer,
  LastWeekHours,
} from "./TimeTrackingCard.styled";
import Ellipsis from "../../assets/icon-ellipsis.svg";

interface ITimeTrackingCard {
  cardType: string;
  activityHours: string;
  lastWeekHours: string;
  timeCardIcon: string;
  backgroundColor: string;
}

export const TimeTrackingCard = ({
  cardType,
  activityHours,
  lastWeekHours,
  timeCardIcon,
  backgroundColor,
}: ITimeTrackingCard) => {
  return (
    <Container style={{ backgroundColor: backgroundColor }}>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          maxWidth: "10%",
          height: "fit-content",
          paddingRight: "40px",
        }}
      >
        <img
          src={timeCardIcon}
          style={{
            position: "absolute",
            filter: "brightness(90%)",
            width: "30px",
            overflow: "hidden",
          }}
        />
      </div>
      <CardDetailsContainer>
        <GenericContainer>
          <CardType>{cardType}</CardType>
          <EllipsisContainer>
            <EllipsisImage src={Ellipsis} alt="clickable ellipsis" />
          </EllipsisContainer>
        </GenericContainer>
        <HoursContainer>
          <ActivityHours>{activityHours}hrs</ActivityHours>
          <LastWeekHours>Last Week - {lastWeekHours}hrs</LastWeekHours>
        </HoursContainer>
      </CardDetailsContainer>
    </Container>
  );
};
