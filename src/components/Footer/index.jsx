import { Container } from "./style";
import logo from "../../assets/logos/logo-footer.svg";

export function Footer() {
  return (
    <Container>
      <img src={logo} alt="Food Explorer" />
      <p>© 2024 - All rights reserved.</p>
    </Container>
  );
}
