/*************************
 * Importaciones
 *************************/
//useContext (utilizar el contexto creado), creatContext (crear el contexto de la aplicacion)=> react

import {createContext, useState } from "react";


//1° Crear el contexto          valor dentro del argumento de la funcion es el valor x default del contexto
//2° Exportar el contexto creado
export const CartContext = createContext() //es un array porque como es el contexto para el carrito, voy a pasar objetos dentro de ese array

//3° Crear nuestra funcion para poder usar el contexto, ya que un padre no le puede pasar el manejador de estado a un hijo
//4° podemos definirlo como un hook personalizado
//5° exportar la funcion que almacena el hook useContext
/* export const useCartContext = () =>{ return useContext(CartContext) } */
//hacemos esto xq no podemos exportar un hook, el hook tiene q funcionar en el componente q se declaro


//6° crear el componente del contexto proveedor

const CartProvider = ({children}) => {

    //Estado del CartProvider
    const [productoCarList, setProductoCarList] = useState([])

    //Funciones denuestro CartProvider

    const existeEnElCarrito = (id) =>{
        const elementoExistente = productoCarList.some((elemento)=>elemento.id === id);
        return elementoExistente
    }






    const agregarAlCarrito = (producto, cantidad) => {

        const newList = [...productoCarList];

        if(existeEnElCarrito(producto.id)){
            const productoIndex = productoCarList.findIndex(element=>element.id===producto.id);

            newList[productoIndex].cantidad = newList[productoIndex].cantidad + cantidad;

            newList[productoIndex].precioTotal = newList[productoIndex].cantidad * newList[productoIndex].precio;

            setProductoCarList(newList)

        } else{
            const newProducto={...producto, cantidad:cantidad, precioTotal: cantidad*producto.precio}
            const newList = [...productoCarList];
            newList.push(newProducto);
            setProductoCarList(newList);
        }
    }



    const eliminarProducto = (idProducto) => {
        const copiaArray = [...productoCarList]
        const nuevaLista = copiaArray.filter(elm => elm.id !== idProducto)
        setProductoCarList(nuevaLista) 
    }

    const limpiarCarrito = () => {
        setProductoCarList([])
    }

    const totalProductos = ()=>{
        const totalProductos = productoCarList.reduce((acc,item)=>acc + item.cantidad,0);
        return totalProductos;
    }

    const obtenerTotal = () => {
        let total = 0
        productoCarList.forEach((e) => total += (e.cantidad*e.precio))
        return total        
    };





    //Render del CartProvider
    return(
        <CartContext.Provider value={{
            productoCarList,
            agregarAlCarrito, 
            eliminarProducto, 
            limpiarCarrito, 
            existeEnElCarrito, 
            totalProductos,
            obtenerTotal}}> 
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider









