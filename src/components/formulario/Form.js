//Importaciones
//Modulos
import { Link } from 'react-router-dom'
//Estilos
import './Form.css'
//Componetnes
//Core


//Logica
const Form = () => { //Funcion consructora

    //Retorno que se va a renderizar
    return(
        <div className='formulario'>
            <Link to="/productos" className='volver'>Volver a mis productos</Link>
            <div>
                <h2>Terminar mi compra</h2>
                    <div className='datosp'>
                        <h3>
                            <span>1 </span>
                            Datos personales
                            </h3>
                            <div className='form'>
                                <input type='text' id='name' placeholder='Nombre' name='name'></input>
                                <input type='text' id='surname' placeholder='Apellido' name='name'></input>
                                <input type='text' id='email' placeholder='Mail' name='email'></input>
                                <input type='text' id='email' placeholder='Repita su mail' name='repetirmail'></input>
                                <input type='text' id='adress' placeholder='Direccion' name='direccion'></input>
                                <input type='text' id='number' placeholder='Telefono' name='telefono'></input>
                            </div>
                    </div>
                    <div className='pago'>
                        <h3>
                            <span>2 </span>
                            Metodo de pago
                        </h3>
                        <select required name="payment" id="payment">
                            <option value disabled>Selecciona tu metodo de pago</option>
                            <option value="cash">Efectivo</option>
                            <option value="credit">Tarjeta de credito</option>
                            <option value="debit">Tarjeta de debito</option>
                        </select>
                    </div>
            </div>
            <button className='finish'>Terminar compra</button>
        </div>
    )

}


//Exportacion 
export default Form