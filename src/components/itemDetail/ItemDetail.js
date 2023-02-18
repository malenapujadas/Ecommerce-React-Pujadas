//Importaciones
//Modulos
import { useState,useContext  } from 'react'
import { CartContext} from '../../context/CartContext'
//Estilos
import './ItemDetail.css'

//Componetnes
import Card from 'react-bootstrap/Card'
import ItemCount from '../itemCount/ItemCount'

//Core


//Logica
const ItemDetail = ({item}) => { //Funcion consructora

    const { agregarAlCarrito} = useContext(CartContext)


    const [cantidad, setCantidad] = useState(0)

    

    const agregar = (contador)=>{
        agregarAlCarrito(item,contador);
        setCantidad(contador);
    }


    //Retorno que se va a renderizar
    return(
        <article className='itemDetail-producto'>
            <Card style={{ width: '18rem' }} className='cardBody'>
                    <img src={item.imagen} alt={item.nombre}></img>
                    <Card.Body >
                        <Card.Text>{item.categoria}</Card.Text>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>{item.descripcion}</Card.Text>
                        <Card.Text>${item.precio}</Card.Text>

                        <ItemCount initial={1} stock={item.stock} agregar={agregar} />
                        {
                            cantidad > 0 &&
                            <p>¡Producto Agregado!</p>
                        }

                    </Card.Body>
            </Card>

        </article> 
    )

}


//Exportacion 
export default ItemDetail