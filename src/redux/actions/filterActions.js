import { TOGGLE_BRANDS, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const toggleBrands = (brandName) => {
  return {
    type: TOGGLE_BRANDS,
    payload: brandName,
  };
};
export const toggleStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
