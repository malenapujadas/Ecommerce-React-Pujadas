//        IMPORTACIONES

// Modulos
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


// Estilos
import './CartListContainer.css'

// Componentes
import CartItem from '../cartItem/CartItem';
import Loader from '../loader/Loader';
// Core


//        LOGICA

// Función constructora
const CartListContainer = () => {

    const { productoCarList, limpiarCarrito, obtenerTotal } = useContext(CartContext);

    const [cargando, setCargando] = useState(false);
    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
        }, 1000);
    }, []);

    return (
        <div>
            {cargando ? (
                <   Loader />
            ) : (
                <div>
                    <div>
                        <div className='encabezado_carrito'>
                            <h3>Carrito de Compras </h3>
                        </div>
                        <div className="vaciar_carrito">
                            <button onClick={limpiarCarrito} >Vaciar Carrito</button>
                        </div>
                        <div className='productos_carrito'>
                            {productoCarList.length > 0 ?
                                <div>
                                    {
                                        productoCarList.map(item => (
                                            <CartItem key={item.id} item={item} />
                                        ))
                                    }
                                    <div className='datos_finales'>
                                        <p>Monto final : ${obtenerTotal()}</p>
                                    </div>
                                    <div className='comprar'>
                                        <Link to="/productos" className='seguir_comprando'>Seguir Compando</Link>
                                        <Link to="/compra"><button>Continuar La Compra</button></Link>
                                    </div>
                                </div>
                                :
                                <p className='carrito_vacio'>No has agregado productos.</p>
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


//        EXPORTACIÓN
export default CartListContainer