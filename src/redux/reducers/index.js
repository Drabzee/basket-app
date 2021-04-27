import { ADD_TO_BASKET, TOGGLE_ITEM_PURCHASE, UPDATE_FILTER_TEXT } from "../constants";

const initialState = {
  itemsList: {
    1: "Strawberry",
    2: "Blueberry",
    3: "Orange",
    4: "Banana",
    5: "Apple",
    6: "Carrot",
    7: "Celery",
    8: "Mushroom",
    9: "Green Pepper",
    10: "Eggs",
    11: "Cheese",
    12: "Butter",
    13: "Chicken",
    14: "Beef",
    15: "Pork",
    16: "Fish",
    17: "Rice",
    18: "Pasta",
    19: "Bread",
  },
  basketList: {
    1: { count: 1, isPurchased: false },
    6: { count: 1, isPurchased: false },
    10: { count: 1, isPurchased: false },
    13: { count: 1, isPurchased: false },
    17: { count: 1, isPurchased: false },
  },
  filterText: ""
};

const addToBasketHandler = (state, id) => {
  let basketItem = {};
  if (state.basketList[id]) {
    basketItem = {
      ...state.basketList[id],
      count: state.basketList[id].count + 1,
    };
  } else {
    basketItem = {
      count: 1,
      isPurchased: false,
    };
  }
  return {
    ...state,
    basketList: {
      ...state.basketList,
      [id]: basketItem,
    },
  };
};

const toggleItemPurchaseHandler = (state, id) => {
  return {
    ...state,
    basketList: {
      ...state.basketList,
      [id]: {
        ...state.basketList[id],
        isPurchased: !state.basketList[id].isPurchased
      }
    },
  };
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return addToBasketHandler(state, action.id);
    case TOGGLE_ITEM_PURCHASE:
      return toggleItemPurchaseHandler(state, action.id);
    case UPDATE_FILTER_TEXT:
      return {...state, filterText: action.text};
    default:
      return state;
  }
};

export default rootReducer;
