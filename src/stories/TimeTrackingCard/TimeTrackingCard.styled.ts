import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 200px;
  background: url(src/assets/icon-work.svg) 0 0;
  border-radius: 8px;
`;

export const CardDetailsContainer = styled.div`
  background-color: #1d204b;
  margin-top: 20px;
  border-radius: 8px;
`;

export const GenericContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardType = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  margin: 0;
  padding: 0;
`;

export const EllipsisContainer = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const EllipsisImage = styled.img`
  max-height: 40%;
  max-width: 40%;
  align-self: center;
  justify-self: center;
`;
