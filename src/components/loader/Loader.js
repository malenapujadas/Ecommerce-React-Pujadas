//Importaciones
//Modulos
import { useState, useEffect} from 'react'

//Estilos

import './Loader.css'
//Componetnes
//Core


//Logica
const Loader = () => { //Funcion consructora

    const [cargando, setCargando] = useState(true)

    useEffect (() =>{
        setTimeout(()=>{
            setCargando(false)
        },50000)
    }, [])


    //Metodo 1 : Condicional simple con if fuera del return

/*    if (cargando){
        //Render
        return (
            <div className='loader-padding'>
                Loader...
            </div>
        )
    }else{
        //Render
        return (
            <div className='loader-padding'>
                Ya cargo por completo
            </div>
        )
    } */

    //Metodo 2 : operador terneario cambia el value de un tag 
    /* return (
        <div className='loader-padding'>
            {cargando ? 'Esta cargando' : 'Ya cargo'}
        </div> 
    ) */

    //Metodo 3 : terneario que cambia el tag
    return (
        <div className='loader-padding'>
            {cargando && <h2>Estaba cargando</h2>}
            {!cargando && <h2>Estaba cargando</h2>}
        </div>
    )





}


//Exportacion 
export default Loader