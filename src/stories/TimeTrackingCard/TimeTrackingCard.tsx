import {
  CardDetailsContainer,
  CardType,
  Container,
  EllipsisContainer,
  EllipsisImage,
  GenericContainer,
} from "./TimeTrackingCard.styled";
import Ellipsis from "../../assets/icon-ellipsis.svg";

export const TimeTrackingCard = () => {
  return (
    <Container>
      <CardDetailsContainer>
        <GenericContainer>
          <CardType>Work</CardType>
          <EllipsisContainer>
            <EllipsisImage src={Ellipsis} alt="clickable ellipsis" />
          </EllipsisContainer>
        </GenericContainer>
      </CardDetailsContainer>
    </Container>
  );
};
