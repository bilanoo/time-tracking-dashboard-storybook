import {
  Container,
  Headline,
  InputBox,
  InputLabel,
  ProfileInformationContainer,
  ProfilePic,
  ProfilePicContainer,
  SelectionContainer,
  Username,
  UsernameContainer,
} from "./UserReportCard.styled";
import userProfilePic from "../assets/image-jeremy.png";

interface UserReportCardInterface {
  username: string;
  checked: "daily" | "weekly" | "monthly";
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserReportCard = ({
  username,
  checked,
  handleChange,
}: UserReportCardInterface) => {
  console.log(checked);
  return (
    <Container>
      <ProfileInformationContainer>
        <ProfilePicContainer>
          <ProfilePic
            src={userProfilePic}
            alt="User profile picture"
            style={{
              maxHeight: "90%",
              maxWidth: "90%",
              alignSelf: "center",
              justifySelf: "center",
            }}
          />
        </ProfilePicContainer>
        <UsernameContainer>
          <Headline>Report For</Headline>
          <Username>{username}</Username>
        </UsernameContainer>
        ​
      </ProfileInformationContainer>
      <SelectionContainer>
        <InputBox type="checkbox" id="Daily" onChange={handleChange} />
        <InputLabel
          htmlFor="Daily"
          $checked={checked === "daily" ? true : false}
        >
          Daily
        </InputLabel>
        <InputBox type="checkbox" id="Weekly" onChange={handleChange} />
        <InputLabel
          htmlFor="Weekly"
          $checked={checked === "weekly" ? true : false}
        >
          Weekly
        </InputLabel>
        <InputBox type="checkbox" id="Monthly" onChange={handleChange} />
        <InputLabel
          htmlFor="Monthly"
          $checked={checked === "monthly" ? true : false}
        >
          Monthly
        </InputLabel>
      </SelectionContainer>
    </Container>
  );
};
