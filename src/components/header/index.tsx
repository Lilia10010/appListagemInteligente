import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import { Container, WrapperLogo } from "./styles";
export const Header = () => {
  return (
    <Container>
      <WrapperLogo>
        <Link to="/">
          <img src={Logo} alt="logo blip" />
        </Link>
      </WrapperLogo>
    </Container>
  );
};
