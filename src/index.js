//Importaciones


//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//Estilos
import './index.css';

//Componentes
import CartProvider from './context/CartContext';
import NavBar from './components/navbar/NavBar.js';
import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer.js';
import CartListContainer from './components/cartListContainer/CartListContainer';
import Form from './components/formulario/Form';



//Core
import reportWebVitals from './reportWebVitals';




//Logica
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/productos' element={<ItemListContainer/>} />
          <Route exact path='/producto/:productoId' element={<ItemDetailContainer />} />
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route exact path='/carrito' element={<CartListContainer/>}/>
          <Route exact path='/nosotros' element={<AboutUs />} />
          <Route exact path='/compra' element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
