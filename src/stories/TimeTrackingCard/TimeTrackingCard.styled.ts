import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 10em;
  border-radius: 8px;
  background-color: #d96c47;
`;

export const CardDetailsContainer = styled.div`
  background-color: #1d204b;
  margin-top: 20px;
  border-radius: 8px;
  min-height: 40px;
  z-index: 1;
  justify-content: center;
`;

export const GenericContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardType = styled.p`
  font-weight: bold;
  font-size: 0.6rem;
  padding-left: 8px;
  color: white;
`;

export const EllipsisContainer = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-top: 4px;
`;

export const EllipsisImage = styled.img`
  max-height: 40%;
  max-width: 40%;
  align-self: center;
  justify-self: center;
`;

export const HoursContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  height: fit-content;
  padding-bottom: 10px;
`;

export const ActivityHours = styled.p`
  font-size: 1rem;
  padding-left: 8px;
  padding-top: 0;
  color: white;
  margin: 0;
`;

export const LastWeekHours = styled.p`
  font-size: 0.5rem;
  padding-left: 8px;
  padding-top: 0;
  color: #bbc0ff;
  padding-right: 18px;
`;
