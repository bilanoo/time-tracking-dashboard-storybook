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
import WorkIcon from "../../assets/icon-work.svg";

export const TimeTrackingCard = () => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <img
          src={WorkIcon}
          style={{
            position: "absolute",
            filter: "brightness(90%)",
            padding: 0,
            width: "30px",
            overflow: "hidden",
            marginLeft: "7.5em",
          }}
        />
      </div>
      <CardDetailsContainer>
        <GenericContainer>
          <CardType>Work</CardType>
          <EllipsisContainer>
            <EllipsisImage src={Ellipsis} alt="clickable ellipsis" />
          </EllipsisContainer>
        </GenericContainer>
        <HoursContainer>
          <ActivityHours>32hrs</ActivityHours>
          <LastWeekHours>Last Week - 36hrs</LastWeekHours>
        </HoursContainer>
      </CardDetailsContainer>
    </Container>
  );
};
