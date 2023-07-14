import { TOGGLE_BRANDS, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const initailState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: "stock",
};

export const filterReducer = (state = initailState, action) => {
  switch (action.type) {
    case TOGGLE_BRANDS:
      return {};
    case TOGGLE_STOCK:
      return {};
    default:
      return state;
  }
};
