export interface Menu {
  id: number;
  title: string;
  type?: string;
  price: number;
  img: string;
}

interface BurgerMenu {
  burger: Menu[];
  shakes: Menu[];
  drinks: Menu[];
}

export const burgerMenu: BurgerMenu = {
  burger: [
    {
      id: 1,
      title: "Big Mac",
      type: "veg",
      img: "https://i.ibb.co/P4kDRR9/BigMac.jpg",
      price: 8.99,
    },
    {
      id: 2,
      title: "Quarter Cheese",
      type: "veg",
      img: "https://i.ibb.co/PFTWv59/Quater-Cheese.jpg",
      price: 4.69,
    },
    {
      id: 3,
      title: "Quarter Double Cheese",
      type: "veg",
      img: "https://i.ibb.co/X2SRrY7/Quater-Double-Cheese.jpg",
      price: 5.29,
    },
    {
      id: 4,
      title: "Giant Mac",
      type: "veg",
      img: "https://i.ibb.co/zXx2fZy/Giant-Mac.jpg",
      price: 8.99,
    },
    {
      id: 5,
      title: "Crispy Chicken",
      type: "non-veg",
      img: "https://i.ibb.co/zmvbzQY/Cripsy-Chiken.jpg",
      price: 3.99,
    },
    {
      id: 6,
      title: "The Classic",
      type: "veg",
      img: "https://i.ibb.co/sjDQqm8/The-Classic.jpg",
      price: 4.59,
    },
    {
      id: 7,
      title: "Chicken Nugget",
      type: "non-veg",
      img: "https://i.ibb.co/4Yb7YTn/Chicken-Nugget.jpg",
      price: 5.99,
    },
  ],
  shakes: [
    {
      id: 11,
      title: "M&M's Candy",
      img: "https://i.ibb.co/5KN1wtM/HotFudge.jpg",
      price: 6.99,
    },
    {
      id: 12,
      title: "Hot Caramel",
      img: "https://i.ibb.co/KWv0SXm/Hot-Caramel.jpg",
      price: 6.99,
    },
    {
      id: 13,
      title: "Hot Fudge",
      img: "https://i.ibb.co/VLJwX7T/HotFudge.jpg",
      price: 6.99,
    },
  ],
  drinks: [
    {
      id: 20,
      title: "Coca-cola",
      img: "https://i.ibb.co/BCpHfH8/coca-cola-drink.jpg",
      price: 2.99,
    },
    {
      id: 21,
      title: "Sprite",
      img: "https://i.ibb.co/wKQJkkb/sprite-drink.jpg",
      price: 2.99,
    },
    {
      id: 22,
      title: "Diet-coke",
      img: "https://i.ibb.co/0ZwyfPT/diet-coke-drink.jpg",
      price: 3.29,
    },
  ],
};
