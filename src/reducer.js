export const initialState = {
  basket: [
    {
      id: "3423414",
      title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
      price: 10.99,
      rating: 4,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466251246i/30643314._UY500_SS500_.jpg",
    },
    {
      id: "3423414",
      title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
      price: 10.99,
      rating: 4,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466251246i/30643314._UY500_SS500_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for Adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // Logic for Removing item from basket

      // I clone the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as its not in basket)`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
