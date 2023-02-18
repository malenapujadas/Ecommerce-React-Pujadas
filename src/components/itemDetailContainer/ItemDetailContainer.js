//Importaciones
//Modulos
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"


//Estilos
import './ItemDetailContainer.css'
//Componetnes
import ItemDetail from '../itemDetail/ItemDetail'
//Core


//Logica
const ItemDetailContainer = () => { //Funcion consructora


    
    const {productoId} = useParams()
    const [item, setItem] = useState({});
    
    useEffect(()=>{
        const getProducto = async()=>{
            const queryRef = doc(db,"listaProductos",productoId);
            const response = await getDoc(queryRef);
            const newDoc = {
                id:response.id,
                ...response.data()
            }
            setItem(newDoc);
        }
        getProducto();
    },[productoId])


    //Retorno que se va a renderizar
    return(
        <section className='itemDetail-box'>
            
            
            <div>
                <ItemDetail item={item}/>
                <Link to="/productos" className='volver'>Volver a mis productos</Link>
            </div>

        </section>
    )

}


//Exportacion 
export default ItemDetailContainer