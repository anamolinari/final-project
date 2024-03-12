import { Container } from "./style";
import { FiChevronLeft } from "react-icons/fi";

export function ButtonBack() {
  return (
    <Container>
      <button className="btn-back">
        <FiChevronLeft />
        Back
      </button>
    </Container>
  );
}
