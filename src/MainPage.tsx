import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { CartPage } from "./pages/CartPage";
import { store } from "./CartReducer/Slice";
import { PageNotFound } from "./pages/PageNotFound";
import { BurgerPage } from "./FoodPage/BurgerPage";
import { Beverages } from "./FoodPage/Beverages";
import { Shakes } from "./FoodPage/ShakesPage";
import { FoodNavbar } from "./pages/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./pages/footer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ToastContainer />
          <FoodNavbar />
          <Routes>
            <Route path="/" element={<BurgerPage />} />
            <Route path="/cart-Page" element={<CartPage />} />
            <Route path="/beverage-Page" element={<Beverages />} />
            <Route path="/shakes-Page" element={<Shakes />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
