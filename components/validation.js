const validation = (userData)=>{
    let errors={};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
        errors.email= "Email inválido";
    }

    if(!userData.email){
        errors.email="Ingrese un Email";
    }

    if(userData.email.lenght>35){
        errors.email="No puede tener más de 35 caracteres";
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password="La clave debe tener mas de 6 y menos de 10 caracteres"
    }
    if(!/\d/.test(userData.password)){
        errors.password="La clave debe tener al menos un número"
    }

    return errors;
}
export default validation;