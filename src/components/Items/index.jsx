import { useState } from "react";
import { Container } from "./style";
import { FiHeart, FiEdit } from "react-icons/fi";

import { Counter } from "../Counter";
import { Button } from "../Button";

export function Items({ image, title, text, value, isAdminPage }) {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  return (
    <Container>
      <div>
        <img src={image} alt={title} />

        {isAdminPage ? (
          <FiEdit className="edit-icon" onClick={toggleHeart} />
        ) : (
          <FiHeart
            className={isHeartFilled ? "heart filled" : "heart"}
            onClick={toggleHeart}
          />
        )}

        <h1>{title}</h1>
        <p>{text}</p>
        <h2>{value}</h2>
      </div>
      <div className="counter-btn">
        {!isAdminPage && <Counter className="counter" />}
        {!isAdminPage && <Button className="items-btn" buttonText="Include" />}
      </div>
    </Container>
  );
}
