//Importaciones
//Modulos
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

//Estilos
import './CartItem.css'
//Componetnes
//Core


//Logica
const CartItem = ({item}) => { //Funcion consructora

    const {eliminarProducto} = useContext(CartContext)

    return (
        <div className='contenedor_producto_carrito'>
            <div className='texto_producto_carrito'>
            {/* <img src={item.imagen} alt={item.nombre}></img> */}
                <div className='claves'>
                    <p className='clave'>Nombre</p>
                    <p className='clave'>Precio U.</p>
                    <p className='clave'>Cantidad</p>
                    <p className='clave'>Total</p>
                </div>
                <div>
                    <div className='valores'>
                        <p className='valor'>{item.nombre}</p>
                        <p className='valor'>${item.precio}</p>
                        <p className='valor'>{item.cantidad}</p>
                        <p className='valor'>${item.precioTotal}</p>
                    </div>
                </div>
            </div>
            <div className='borrar_producto'>
                <p onClick={()=>eliminarProducto(item.id)}></p>
            </div>
        </div>

    )

}


//Exportacion 
export default CartItem