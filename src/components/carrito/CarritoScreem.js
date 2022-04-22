import React, {useReducer, useState } from 'react'
import { carritoReducer } from '../../reducers/carritoReducer'
import  './styles.css'

import dataJson from '../../dataJson.json'
import { useForm } from '../../hooks/useForm'




export const CarritoScreem = () => {

  const [monto, setMonto] = useState(0)



  const [formValues, handleInputChange, reset ] = useForm({
    descripcion: '',
  });

  console.log(  formValues.descripcion )


   const handleSubmit = (e) => {
    e.preventDefault();
   const prod = dataJson.filter(producto => producto.codigo_interno === formValues.descripcion)
    console.log(prod[0])
    const precio = Number(prod[0].precio_venta)
    console.log(precio)
    setMonto(monto + precio)
    // const newProducto =
    //   {
    //         "id": "15245",
    //         "codigo_interno": "20852",
    //         "descripcion": "ADIDAS E89210 CALZA ESS MF38 3/4",
    //         "precio_costo": "24.08",
    //         "precio_venta": "38.55",
    //         "created": "2019-10-20 15:16:18",
    //         "legth": 0
    //   }

      const action = {
        type: 'add',
        payload: prod[0],
      }
      dispatch(action)
      reset();
  }

  const handleDelete = (codigo_interno, precio) => {
    setMonto(monto + precio)
    const action = {
        type: 'delete',
        payload: codigo_interno
      }
    dispatch(action);
   }

  const initialState = [
    {
            // codigo_interno: "20788",
            // descripcion: "ADIDAS 235532 MAD CLIMA",
            // precio_costo: "50.90",
            // precio_venta: "81.50",
            // created: Date.now()
    }
  ]

  const [ carrito, dispatch ] = useReducer( carritoReducer, initialState)


  return(
    <div className="container">
      <div className="row">
        <div className='col-3 div1'>
          <div className="hola1">
          <form onSubmit= { handleSubmit }>
            <input
            className= "input-vendedor"
            name = "descripcion"
            value = {formValues.descripcion}
            onChange= {handleInputChange}
            placeholder = {"Codigo de barra"}
            // onChange= { prueba2 }
            />
          </form>
            <input
            className= "input-vendedor"
            value = "marta"
            readOnly
            />
          </div>
          <div className="hola2"> hola2</div>

         </div>
      <div className='col-9 div2'>
        <div className="col hola22">
          <h1>Lista de productos({carrito.length ? carrito.length : 0 })</h1>
          <h1>Monto total({monto ? monto : 0})</h1>
        </div>
        <div className="col hola21">
          <ul
          className="list-group list-group-flush">

              {
                carrito.map((car, i ) =>(
                  <li
                  className= "list-group-item"
                  key= {i}
                  >
                    <input>
                    </input>
                    {i} - {car.descripcion} {car.precio_venta}
                    <button
                    className= "btn btn-danger"
                    // onClick = {() => handleDelete(car.codigo_interno, car.precio_venta)}
                    // value = {}
                    >
                    Borrar
                    </button>
                    </li>
                ))
              }

          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
