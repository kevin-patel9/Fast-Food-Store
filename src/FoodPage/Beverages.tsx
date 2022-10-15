import { burgerMenu } from "../Menu";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartReducer/Slice";
import { Menu } from "../Menu";

export const Beverages = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (food: any) => {
    dispatch(addToCart(food));
  };

  return (
    <div className="food-container">
      {burgerMenu.drinks.map((food: Menu) => {
        const { id, price, title, img } = food;

        return (
          <div key={id} className="burger-container">
            <div>
              <img src={img} />
              <h3>{title}</h3>
              <p>$ {price}</p>
              <Button variant="warning" onClick={() => handleAddToCart(food)}>
                Add To Cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
