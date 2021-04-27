import { ADD_TO_BASKET, TOGGLE_ITEM_PURCHASE, UPDATE_FILTER_TEXT } from "../constants";

export const addToBasket = (id) => ({
  type: ADD_TO_BASKET,
  id
});

export const toggleItemPurchase = (id) => ({
  type: TOGGLE_ITEM_PURCHASE,
  id
});

export const updateFilterText = (text) => ({
  type: UPDATE_FILTER_TEXT,
  text
})