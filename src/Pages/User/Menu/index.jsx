import { Container } from "./style";
import { FiX } from "react-icons/fi";

import { Input } from "../../../components/Input";
import { Footer } from "../../../components/Footer";

export function Menu() {
  return (
    <Container>
      <div className="header-menu">
        <FiX />
        <p>Menu</p>
      </div>
      <div className="input">
        <Input text="Search for dishes or ingredients" />
      </div>
      <div className="content">
        <h2>Logout</h2>
      </div>
      <Footer />
    </Container>
  );
}
