import { useState } from "react";
import validation from "./validation";

const Form=({login})=>{
    const[userData,setUserData]=useState({
        email:'',
        password:''
    });

    const [errors,setErrors]=useState({
        email:'',
        password:''
    })
    
    const HandleOnChange=(event)=>{
        setErrors(validation({...userData,[event.target.name]: event.target.value }))
        setUserData({ ...userData,[event.target.name]: event.target.value,})
 
    };

    const handleSubmit=(event)=>{
        event.preventDefault()//prevenDefaul evita que se recargue la pagina cuando se da click al boton.
        login(userData)
    }

    return (
        <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
            <label  htmlFor="email">Email: </label>
            <input id="email" name="email" type="email"  placeholder="Ingrese email" value={userData.email} onChange={HandleOnChange}/><br/><br/>
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <label htmlFor="password">Password: </label>
            <input id="password" name="password" type="password" placeholder="Ingrese su password" value={userData.password} onChange={HandleOnChange}/><br/><br/>
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <button>Submit</button><br/>
        </form>
        </div>
    ) 
}
export default Form;