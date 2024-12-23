import classes from "../Meals/AvailableMeal.module.css";
import img from "../../assets/breakfast.jpg";
import img1 from "../../assets/breakfast1.jpg";
import img2 from "../../assets/image1.jpg";
import img3 from "../../assets/image2.jpg";
import img4 from "../../assets/africa1.jpg";
import img5 from "../../assets/africa2.jpg";
import img6 from "../../assets/desserts1.jpg";
import img7 from "../../assets/desserts2.jpg";
import img8 from "../../assets/family1.jpg";
import img9 from "../../assets/family2.jpg";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "b1",
    image: `${img}`,
    name: "Slice Loaf and Egg Cheese (free cup of Coffee)",
    price: 23.99,
    description: "An america specialty",
  },
  {
    id: "b2",
    image: `${img1}`,
    name: "Fries and Ham with some veggies",
    price: 33.99,
    description: "Finest Breakfast for Remote techies",
  },
  {
    id: "b3",
    image: `${img2}`,
    name: "Beef Burger",
    price: 19.69,
    description: "American, meaty, raw",
  },
  {
    id: "b4",
    image: `${img3}`,
    name: "Beef Burger Duo",
    price: 38.47,
    description: "Enjoy with your partner",
  },
  {
    id: "b5",
    image: `${img4}`,
    name: "Spaghetti with Sauce",
    price: 13.96,
    description: "Some Kind of Nigeria Vibe",
  },
  {
    id: "b6",
    image: `${img5}`,
    name: "White Rice with Hot Sauce and Beef",
    price: 15.99,
    description: "For my Nigeria prince and princess",
  },
  {
    id: "b7",
    image: `${img6}`,
    name: "Crispy Doghnut",
    price: 9.8,
    description: "Would you like some desserts",
  },
  {
    id: "b8",
    image: `${img7}`,
    name: "Chocolate Cake",
    price: 50.99,
    description: "You know what time it is?... It's Cake O'clock",
  },
  {
    id: "b9",
    image: `${img8}`,
    name: "Family Special 1",
    price: 104.99,
    description: "Let's add some weight together",
  },
  {
    id: "b10",
    image: `${img9}`,
    name: "Family Special 2",
    price: 155.99,
    description:
      "Did you had a loong day and too tired to cook.... Say no more!",
  },
];

const AvailableMeals = (props) => {
  const items = DUMMY_MEALS.map((item) => (
    <div className={classes.card} key={item.id}>
      <ul>
        <MealItem
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      </ul>
    </div>
  ));
  return <div className={classes.meals}>{items}</div>;
};

export default AvailableMeals;
