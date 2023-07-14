import { TOGGLE_BRANDS } from "../actionTypes/actionTypes";

export const toggleBrands = (brandName) => {
  return {
    type: TOGGLE_BRANDS,
    payload: brandName,
  };
};
