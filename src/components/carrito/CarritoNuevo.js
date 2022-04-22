import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppingReducers';
import { ProductItem } from './ProductItem';

let x = parseFloat("330000") + parseFloat("1.04");

export const CarritoNuevo = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const {products, cart} = state
  return (
    <div>
      <div>
        <form action="">
          <input></input>
          <input></input>
          <input></input>
        </form>
        <h1> {
        console.log( x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") )
        }
          </h1>
      </div>
      <div>
        <ul>
          <ProductItem data={products}/>
        </ul>
      </div>
    </div>
  )
}
