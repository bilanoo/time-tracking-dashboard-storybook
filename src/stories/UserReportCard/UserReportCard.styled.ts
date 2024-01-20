import styled from "styled-components";

export const Container = styled.div`
  border-radius: 12px;
  background-color: #1d204b;
`;

export const ProfileInformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5747ea;
  border-radius: 12px;
  margin: 0;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const ProfilePicContainer = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const ProfilePic = styled.img`
  max-height: 90%;
  max-width: 90%;
  align-self: center;
  justify-self: center;
`;

export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Headline = styled.p`
  padding: 0;
  margin-bottom: 0;
  color: #bcb8ff;
  font-size: 0.8rem;
`;

export const Username = styled.p`
  padding: 0;
  margin-top: 10px;
  color: white;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;

  @media (min-width: 768px) {
    font-size: 2rem;
    word-wrap: break-word;
    width: 150px;
  }
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  color: #bcb8ff;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
    margin-left: 25px;
    padding-top: 20px;
    padding-bottom: 30px;
  }
`;

export const InputBox = styled.input`
  display: none;
`;

export const InputLabel = styled.label<{ $checked: boolean }>`
  color: ${(props) => (props.$checked ? "white" : "inherit")};
  &:hover {
    color: white;
  }
`;
