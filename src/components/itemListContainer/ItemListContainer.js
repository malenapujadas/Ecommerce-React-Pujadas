//Importaciones
//Modulos
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

//Estilos
import './ItemListContainer.css'

//Componetnes
import ItemList from '../itemList/ItemList'

//Core


//Logica
const ItemListContainer = () => { //Funcion consructora

    const {categoriaId} = useParams([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const queryRef = categoriaId
                ? query(
                    collection(db, "listaProductos"),
                    where("categoria", "==", categoriaId)
                )
                : collection(db, "listaProductos");

            // hacer la consulta
            const response = await getDocs(queryRef);
            const docsInfo = response.docs.map((doc) => {
                const newDoc = {
                    id: doc.id,
                    ...doc.data(),
                };
                return newDoc;
            });
            setProductos(docsInfo);
        };
        getData();
    }, [categoriaId]);




    //Retorno que se va a renderizar
    return(
        <div className='main-section'>
            
            <div>
                <h1>Mis productos</h1>
            </div>
            <ItemList item={productos}/>
        </div>

    )

}


//Exportacion 
export default ItemListContainer