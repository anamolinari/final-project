import { Container, TagWrapper, CounterBtn } from "./style";

import { Tag } from "../Tag";
import { Counter } from "../Counter";
import { Button } from "../Button";

export function Content({ image, title, info, isAdminPage }) {
  return (
    <Container>
      <div className="img">
        <img src={image} />
      </div>
      <div className="text">
        <h1>{title}</h1>
        <h2>{info}</h2>
      </div>

      <TagWrapper className="tag">
        <Tag text="Lettuce" />
        <Tag text="Onion" />
        <Tag text="Naan bread" />
        <Tag text="Cucumber" />
        <Tag text="Radish" />
        <Tag text="Tomato" />
      </TagWrapper>

      <CounterBtn
        className="counter-btn"
        $isadminpage={isAdminPage ? "true" : "false"}
      >
        {!isAdminPage && <Counter className="counter" />}
        <Button buttonText={isAdminPage ? "Edit dish" : "Include"} />
      </CounterBtn>
    </Container>
  );
}
