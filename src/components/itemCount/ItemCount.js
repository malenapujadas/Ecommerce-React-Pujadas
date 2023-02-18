//Importaciones
//Modulos
import { useState } from 'react'
//Estilos
import './ItemCount.css'
//Componetnes
//Core


//Logica
const ItemCount = ({stock, initial, agregar}) => { //Funcion consructora

    //useState
    const [contador, setContador] = useState(initial)

    //Funciones de sumar uno con un maximo de stock 
    const sumarUno = () => {
        if(contador < stock){
        setContador(contador + 1)
        }
    }

    //Funcion de restar uno al contador seteando un minimo
    const restarUno = () => {
        if (contador > 1){
        setContador(contador - 1)
        }
    }

    //Funcion agregar x cantida de productos 
    


    //Retorno que se va a renderizar
    return(
        <div className='box-count'>
            <div className='box-count-children'>
                <button disabled={stock === 0} onClick={restarUno} className='boton'>-</button>
                <p>{contador}</p>
                <button disabled={stock === 0} onClick={sumarUno} className='boton'>+</button>
            </div>
            <div className='agregar'>
                <button disabled={stock === 0} onClick={() => agregar(contador)}>Agregar al Carrito</button>
            </div>
        </div>
    )

}


//Exportacion 
export default ItemCount