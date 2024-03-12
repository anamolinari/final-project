import { Container } from "./style";

export function Input({ text, icon: Icon }) {
  return (
    <Container>
      {Icon && <Icon />}
      <p>{text}</p>
    </Container>
  );
}
