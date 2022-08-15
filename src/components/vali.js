const vali = (values) => {
    let errors = {};
   
    if(!values.email){
        errors.email="email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="email is invalid"
    }
    if(!values.password){
        errors.password="password is required"
    } else if (values.password.length <8){
        errors.password="password must be at least 8 characters"
    }  return errors;
}

export default vali