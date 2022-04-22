import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ProductItem = ({data}) => {

  const listItemTest = data.slice(0, 15)


  const [formValues, handleInputChange, reset ] = useForm({
    descripcion: 'hola',

  });


  const imputChange = ({target}) => {
    console.log(target.name)
  }

  return (
    <div>
      <ul>
        <li>
          <input></input>
          <input></input>
          <input></input>
        </li>`
        {/* {
                listItemTest ?
                listItemTest.map((item, i ) =>(
                  <li
                  className= "list-group-item"
                  key= {i}
                  >
                    {i}
                    <input
                    // value= {item.descripcion}
                    value= {
                      item.descripcion
                    }
                    name = "descripcion"
                    onChange = {imputChange}
                    onSelect = {({target})=> {
                      console.log(target)
                    }}
                    // readOnly
                    ></input>
                    <input
                    value= {item.precio_venta}

                    onChange = {imputChange}
                    // readOnly
                    ></input>
                    <button
                    className= "btn btn-danger"
                    // onClick = {() => handleDelete(item.codigo_interno, item.precio_venta)}
                    // value = {}
                    >
                    Borrar
                    </button>
                    </li>
                )) : ""
        } */}
      </ul>
    </div>
  )
}
