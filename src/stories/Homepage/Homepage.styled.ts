import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 200px 200px 200px;
  }
`;
