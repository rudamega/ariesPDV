import { TYPES } from '../actions/shoppingActions';
import dataJson from '../dataJson.json'

export const shoppingInitialState = {
  products: dataJson,
  cart: [
    {"id":"234"}
  ]
};


export const shoppingReducer = (state = [], action) => {
  switch (action.types) {
    case TYPES.ADD_TO_CART: {

    }
    default:
    return state;
  }
}
