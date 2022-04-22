


export const carritoReducer = (state = [], action) => {

  switch (action.type) {
    case 'add':
      console.log(state)
      return[...state, action.payload];
      case 'delete':
      return state.filter(producto => producto.codigo_interno !== action.payload)

    default:
      return state;
  }

}
