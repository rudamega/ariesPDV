import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CasaAries } from '../CasaAries';
import { CarritoNuevo } from '../components/carrito/CarritoNuevo';
import { CarritoScreem } from '../components/carrito/CarritoScreem';
// import { Informes } from '../components/Informes';
import { CrearProductosScreem } from '../components/productos/CrearProductosScreem';
import { ListarProductosScreem } from '../components/productos/ListarProductosScreem';
import { ProductosScreem } from '../components/productos/ProductosScreem';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (

  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<CasaAries/>}/>
      <Route index element={<CasaAries />} />
      <Route path="productos" element={<ListarProductosScreem />}/>
      <Route path="productos:id" element={<ProductosScreem />}/>
      <Route path="productos/new" element={<CrearProductosScreem/>} />
      <Route path="informes" element={<CarritoNuevo />} />
      <Route path="carrito" element={<CarritoScreem />} />
    </Routes>
  </BrowserRouter>
  )
}
