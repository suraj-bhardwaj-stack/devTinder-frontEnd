import React, { useState } from 'react'

export default function Login() {
    const [emailId , setEmailId] = useState("");
    const [password , setPassword] = useState("");

    const loginHandler = (e)=>{
         console.log(emailId , password)
        
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
                    <input value={password} onChange={ (e)=>setPassword(e.target.value)} type="text" className="input" placeholder="Type here" />
                </fieldset>
                <div className="card-actions justify-center">
                    <button onClick={loginHandler} className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </section>
  )
}
