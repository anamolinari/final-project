import { Container } from "./style";

export function Button({ buttonText, icon: Icon }) {
  return (
    <Container>
      {Icon && <Icon />}
      <h4>{buttonText}</h4>
    </Container>
  );
}
