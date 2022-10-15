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
      img: "https://i.ibb.co/JvTNC0P/big-mac-burger.jpg",
      price: 8.99,
    },
    {
      id: 2,
      title: "Quarter Cheese",
      type: "veg",
      img: "https://i.ibb.co/tJvZcyF/quarter-cheese-burger.jpg",
      price: 4.69,
    },
    {
      id: 3,
      title: "Quarter Double Cheese",
      type: "veg",
      img: "https://i.ibb.co/zGZX6c0/quarter-double-cheese-burger.jpg",
      price: 5.29,
    },
    {
      id: 4,
      title: "Giant Mac",
      type: "veg",
      img: "https://i.ibb.co/27hYWQm/big-mac.jpg",
      price: 8.99,
    },
    {
      id: 5,
      title: "Crispy Chicken",
      type: "non-veg",
      img: "https://i.ibb.co/dLMwqBK/crispy-chicken-burger.jpg",
      price: 3.99,
    },
    {
      id: 6,
      title: "The Classic",
      type: "veg",
      img: "https://i.ibb.co/jTQX4pc/the-classic-burger.jpg",
      price: 4.59,
    },
    {
      id: 7,
      title: "Chicken Nugget",
      type: "non-veg",
      img: "https://i.ibb.co/sbQbbJN/chicken-nugget.jpg",
      price: 5.99,
    },
  ],
  shakes: [
    {
      id: 10,
      title: "Oreo Cookie",
      img: "https://i.ibb.co/zxf6X49/oreo-shake.jpg",
      price: 6.99,
    },
    {
      id: 11,
      title: "M&M's Candy",
      img: "https://i.ibb.co/nRkBZsW/m-m-shake.jpg",
      price: 6.99,
    },
    {
      id: 12,
      title: "Hot Caramel",
      img: "https://i.ibb.co/6wdh00T/hot-caramel-shake.jpg",
      price: 6.99,
    },
    {
      id: 13,
      title: "Hot Fudge",
      img: "https://i.ibb.co/c3gC8Vv/hot-fudge-shake.jpg",
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
