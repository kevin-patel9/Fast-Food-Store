import { burgerMenu, Menu } from "../Menu";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartReducer/Slice";
import vegIcon from "./FoodTypeIcon/vegIcon.png";
import nonVegIcon from "./FoodTypeIcon/non-vegIcon.png";
import { Footer } from "../pages/footer";

export const BurgerPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (food: any) => {
    dispatch(addToCart(food));
  };

  return (
    <>
      <div className="food-container">
        {burgerMenu.burger.map((food: Menu) => {
          const { id, price, title, img, type } = food;

          return (
            <div key={id} className="burger-container">
              {type == "veg" ? (
                <div
                  className="food-type-icon"
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <img
                    src={vegIcon}
                    style={{
                      position: "absolute",
                      top: "-0.6rem",
                      right: "-0.4rem",
                    }}
                  />
                </div>
              ) : (
                <div style={{ width: "0rem", height: "1rem" }}>
                  <img
                    src={nonVegIcon}
                    style={{
                      position: "absolute",
                      top: "-2rem",
                      right: "-2.4rem",
                    }}
                  />
                </div>
              )}
              <div>
                <img src={img} />
                <h4>{title}</h4>
                <p>$ {price}</p>
                <Button variant="warning" onClick={() => handleAddToCart(food)}>
                  Add To Cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
