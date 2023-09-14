import { useState } from "react";
import axios from "axios"
function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, SetError] = useState('')
    
    const handleLogin = async (e)=>{
        e.preventDefault();
        console.log(email + ' e ' + password);
      
       try{
        const response = await axios.post("http://localhost:3000/login",
        JSON.stringify({email,password}),
        {
            headers: {'Content-Type': 'application/json'}
        }
        )
       }catch(error){
        if(!error?.response){
            SetError('erro ao acessar o servidor')
        }else if(error.response.status == 401)
        SetError("usuario ou senha invalidos")
       }
        
    }


    return(
      <div className='login-form-wrap'>
            <h2>
              login
            </h2>
            <form className='login-form'>
            <input type='email' 
            name='email' 
            placeholder='Email'
            required
            onChange={(e)=>setEmail(e.target.value)}
            />

            <input type='password' 
            name='password' 
            placeholder='password'
            required
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button 
            type='submit' 
            className='btn-login'
            onClick={(e)=> handleLogin(e)}></button>
            </form>
            <p>{error}</p>
          </div>
    );
    }
export default Login