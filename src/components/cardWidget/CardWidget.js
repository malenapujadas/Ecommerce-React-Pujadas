//Importaciones
//Modulos
//Estilos
import './CardWidget.css'
//Componetnes
import { AiFillShopping } from "react-icons/ai";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
//Core


//Logica
const CardWidget = () => { //Funcion consructora

    const {totalProductos, productoCarList} = useContext(CartContext);
    //Retorno que se va a renderizar
    return(
        <div className='cardWidget'>
            <Link to="/carrito" >
            <AiFillShopping className='carrito'/>
            </Link>
            {
                productoCarList.lenght > 0 &&
                <p className='numero'>{totalProductos()}</p> 
            }
        </div>
    )

}


//Exportacion 
export default CardWidget