//Importaciones
//Modulos
import { Link } from 'react-router-dom'

//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget'
//Componetnes
//Core


//Logica
const NavBar = () => { //Funcion consructora


    //Retorno que se va a renderizar
    return(
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <p>PIUDULCE</p>
                </div>
                <div>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/productos'>productos</Link></li>
                        <li><Link to='/categoria/Tortas clasicas'>tortas clasicas</Link></li>
                        <li><Link to='/categoria/Tortas decoradas'>tortas decoradas</Link></li>
                        <li><Link to='/nosotros'>nosotros</Link></li>
                        
                    </ul>
                </div>
                <div className='numero'>
                    <CardWidget/>
                </div>
            </nav>
        </header>

    )

}


//Exportacion 
export default NavBar