import { useState } from "react";
import { NavLink } from "react-router-dom";

const Form=()=>{
    const[form,setForm]=useState({
        email:'',
        password:''
    });

    const [errors,setErrors]=useState({
        email:'',
        password:''
    })
    
    const HandleOnChange=(event)=>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
            }
        );
        validate();
    };

    const validate=()=>{
        if(!/\S+@\S+\.\S+/.test(form.email)){
            setErrors({
                ...errors,
                email:'email inválido'
            })
        }
        else setErrors({
            ...errors,
            email:" "
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault()//prevenDefaul evita que se recargue la pagina cuando se da click al boton.
    }

    return (
        <div>
            <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
            <label  htmlFor="email">Email: </label><input name="email" type="email" placeholder="Ingrese email" value={form.email} onChange={HandleOnChange}/><br></br>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password">Password: </label><input name="password" type="password" placeholder="Ingrese tu password" value={form.password} onChange={HandleOnChange}/><br/>
            <button disabled={!form.email||!form.password||errors.email||errors.password}>Submit</button><br/>
            <hr></hr>
            <NavLink to={'/home'}><button>home</button></NavLink>
        </form>
        </div>
    ) 
}
export default Form;