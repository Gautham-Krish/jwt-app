import React , {useState , useEffect} from 'react';

import vali from './vali';
const Login = ({submit}) => {
    const [values,setValues]=useState({
        
        email:"",
        password:"",   
       });
       const [errors,setErrors] = useState({});
       const [dataIsCorrect,setDataIsCorrect] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        })
    }
   
    const handleFormSubmit =(event) => {
        event.preventDefault();
        setErrors(vali(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if(Object.keys(errors).length=== 0 && dataIsCorrect) {
            submit(true);
        }
    }, [errors]);
  return (
    <div className='comt comt-login'>
        <div className='app-wrapper'>
            <div>
                 <h2 className='title'>login</h2>
            </div>
            <form className='form-wrapper'>
                
                <div>
                    <label className='label'>Email</label>
                    <input type='email' className='input' name='email' value={values.email} onChange={handleChange}/>
                
                    {errors.email && <p className='error'>{errors.email}</p>}</div>
         
                <div>
                    <label className='label'>Password</label>
                    <input type='password' className='input' name='password' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                <div>
                    <button className='submit' onClick={handleFormSubmit}>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;