import React from 'react'
import { useParams } from "react-router-dom";


export const ProductosScreem = () => {

  const params = useParams.body;
  return (
    <div>
      <h1>productos Screem {params}
      </h1>
    </div>
  )
}
