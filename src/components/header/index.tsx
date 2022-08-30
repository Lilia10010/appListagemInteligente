import Logo from "../../assets/img/logo.svg";
import { Container, WrapperLogo } from "./styles";
export const Header = () => {
  return (
    <Container>
      <WrapperLogo>
        <img src={Logo} alt="logo blip" />
      </WrapperLogo>
    </Container>
  );
};
