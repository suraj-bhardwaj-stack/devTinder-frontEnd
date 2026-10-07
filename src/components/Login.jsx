import axios from 'axios';
import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

export default function Login() {
    const [emailId , setEmailId] = useState("suraj@gmail.com");
    const [password , setPassword] = useState("Suraj@123");
    const dispatch = useDispatch()
    const navigate = useNavigate()
   

    const loginHandler = async (e)=>{
         try{
            const res = await axios.post( BASE_URL + '/login' , {
                email : emailId,
                password},
                { withCredentials: true }
            )
            dispatch(addUser(res.data))
            navigate('/ ')

         }catch(err){
            console.log(err.response?.data || err.message)
         }

          
        
    }

  return (
    <section className='login-wrapper flex justify-center pt-8'>
        <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input value={emailId} onChange={ (e)=>setEmailId(e.target.value)}  type="text" className="input" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input value={password} onChange={ (e)=>setPassword(e.target.value)} type="password" className="input" placeholder="Type here" />
                </fieldset>
                <div className="card-actions justify-center">
                    <button onClick={loginHandler} className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </section>
  )
}
