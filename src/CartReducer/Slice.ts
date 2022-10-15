import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { Menu } from "../Menu";
import { toast } from "react-toastify";

export interface NewMenu extends Menu {
  cartQuantity: number;
}

interface FinalTotalReduce {
  total: number;
  quantity: number;
}

export interface FoodState {
  cartItem: [] | NewMenu[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState = {
  cartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [],
  totalQuantity: 0,
  totalPrice: 0,
} as FoodState;

const slice = createSlice({
  initialState,
  name: "fast-food",
  reducers: {
    addToCart: (state: any, action: PayloadAction<NewMenu>) => {
      const itemIndex = state.cartItem.findIndex(
        (item: Menu) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;

        toast.info(`Increased cart quantity`, {
          position: "bottom-left",
        });
      } else {
        const tempFood = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempFood);

        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    clearCart: (state: FoodState) => {
      state.cartItem = [];

      localStorage.removeItem("cart");

      toast.error("Cleared Cart", {
        position: "bottom-left",
      });
    },
    removeFromCart: (state: FoodState, action: PayloadAction<NewMenu>) => {
      const removedItem = state.cartItem.filter(
        (item: NewMenu) => item.id !== action.payload.id
      );

      state.cartItem = removedItem;

      localStorage.setItem("cart", JSON.stringify(state.cartItem));

      toast.error("Removed from cart", {
        position: "bottom-left",
      });
    },
    decreaseCartCount: (state: FoodState, action: PayloadAction<NewMenu>) => {
      const decreaseCount = state.cartItem.findIndex(
        (item: NewMenu) => item.id === action.payload.id
      );

      if (state.cartItem[decreaseCount].cartQuantity > 1) {
        state.cartItem[decreaseCount].cartQuantity -= 1;

        toast.info(`Decreased ${action.payload.title} cart quantity`, {
          position: "bottom-left",
        });

        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      } else if (state.cartItem[decreaseCount].cartQuantity === 1) {
        const removedItem = state.cartItem.filter(
          (item: NewMenu) => item.id !== action.payload.id
        );

        state.cartItem = removedItem;

        toast.error(`${action.payload.title} removed from cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    finalTotal: (state: any) => {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal: FinalTotalReduce, cartItem: NewMenu) => {
          const { price, cartQuantity } = cartItem;

          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.totalPrice = total;
      state.totalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  decreaseCartCount,
  finalTotal,
} = slice.actions;

export const store = configureStore({
  reducer: {
    cart: slice.reducer,
  },
});
