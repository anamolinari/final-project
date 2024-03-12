import { Container } from "./style";

import { Header } from "../../../components/Header";
import { Row } from "../../../components/Row";
import { Footer } from "../../../components/Footer";

import banner from "../../../assets/banner.png";

export function Home() {
  const userType = "user";

  return (
    <Container>
      <Header userType={userType} />
      <img src={banner} alt="Banner" className="banner" />

      <div className="row">
        <Row
          title="Main course"
          itemsData={[
            {
              image: "/src/assets/items/img-1.png",
              title: "Ravanello Salad",
              text: "Radishes, green leaves, olive oil, vinegar, salt and pepper.",
              value: "$ 9.48",
            },
            {
              image: "/src/assets/items/img-2.png",
              title: "Spaghetti Gambe",
              text: "Fresh pasta with shrimp and pesto.",
              value: "$ 15.08",
            },
            {
              image: "/src/assets/items/img-3.png",
              title: "Parma Toasts",
              text: "Parma ham and arugula on naturally fermented bread.",
              value: "$ 4.92",
            },
            {
              image: "/src/assets/items/img-10.png",
              title: "Molla Salad",
              text: "Arugula, olive oil, lemon juice, salt and pepper.",
              value: "$ 8.50",
            },
          ]}
        />

        <Row
          title="Dessert"
          itemsData={[
            {
              image: "/src/assets/items/img-4.png",
              title: "Plum Pie",
              text: "Plum pie with buttery crust, sprinkled with sugar.",
              value: "$ 14.39",
            },
            {
              image: "/src/assets/items/img-5.png",
              title: "Peach Pastries",
              text: "Delicious peach turnover with mint leaves.",
              value: "$ 9.99",
            },
            {
              image: "/src/assets/items/img-6.png",
              title: "Macarons",
              text: "Almond flour, butter, egg whites, and sugar.",
              value: "$ 5.92",
            },
            {
              image: "/src/assets/items/img-11.png",
              title: "Apricot Cake",
              text: "Fresh apricots in a gluten-free pastry.",
              value: "$ 15.30",
            },
          ]}
        />

        <Row
          title="Drinks"
          itemsData={[
            {
              image: "/src/assets/items/img-7.png",
              title: "Espresso",
              text: "Creamy coffee made at the perfect temperature and pressure.",
              value: "$ 3.00",
            },
            {
              image: "/src/assets/items/img-8.png",
              title: "Passion fruit juice",
              text: "Chilled, creamy, sweet passion fruit juice.",
              value: "$ 6.00",
            },
            {
              image: "/src/assets/items/img-9.png",
              title: "Autumn tea",
              text: "Anise, cinnamon, and lemon tea. Feel the Italian autumn.",
              value: "$ 2.50",
            },
            {
              image: "/src/assets/items/img-7.png",
              title: "Bourbon Apple",
              text: "Apple, whiskey, cinnamon. On the rocks.",
              value: "$ 12.99",
            },
          ]}
        />
      </div>
      <Footer />
    </Container>
  );
}
