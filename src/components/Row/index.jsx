import { Container } from "./style";
import { Items } from "../Items";

export function Row({ title, itemsData, isAdminPage }) {
  return (
    <Container>
      <h1 className="title">{title}</h1>

      <div className="itemsWrapper">
        {itemsData.map((item, index) => (
          <Items
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
            value={item.value}
            isAdminPage={isAdminPage}
          />
        ))}
      </div>
    </Container>
  );
}
