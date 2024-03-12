import { Container } from "./style";

import { Header } from "../../../components/Header";
import { ButtonBack } from "../../../components/ButtonBack";
import { Content } from "../../../components/Content";
import { Footer } from "../../../components/Footer";

export function Details() {
  const userType = "admin";

  return (
    <Container>
      <Header userType={userType} />
      <ButtonBack className="btn-back" />

      <Content
        image="../../src/assets/items/img-1.png"
        title="Ravanello Salad"
        info="Radishes, green leaves, olive oil, vinegar, salt and pepper."
        isAdminPage={true}
      />

      <Footer />
    </Container>
  );
}
