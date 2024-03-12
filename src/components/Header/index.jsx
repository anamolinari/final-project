import { Container, HeaderContent } from "./style";
import { FiMenu, FiShoppingBag, FiLogOut, FiSearch } from "react-icons/fi";

import logoUser from "../../assets/logos/logo-user.svg";
import logoAdmin from "../../assets/logos/logo-admin.svg";

import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ userType }) {
  const logoSrc = userType === "admin" ? logoAdmin : logoUser;
  const showShoppingBagIcon = userType !== "admin";
  const isAdmin = userType === "admin";
  const buttonText = isAdmin ? "New dish" : "Order";
  const showShoppingBagButton = !isAdmin;

  return (
    <Container>
      <HeaderContent className={isAdmin ? "admin-header" : ""}>
        <FiMenu className="menu-icon" />

        <img src={logoSrc} alt="Food Explorer" />

        <div className="input-container">
          <Input text="Search for dishes or ingredients" icon={FiSearch} />
        </div>

        <div className="button-container">
          <Button
            buttonText={buttonText}
            icon={showShoppingBagButton ? FiShoppingBag : null}
          />
        </div>

        <FiLogOut className="logout-icon" />

        {showShoppingBagIcon && <FiShoppingBag className="bag-icon" />}
      </HeaderContent>
    </Container>
  );
}
