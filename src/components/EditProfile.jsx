import React, { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../slice/userSlice';


export default function EditProfile({user}) {
    const [firstName , setFirstName] = useState(user.firstName);
    const [lastName , setLastName] = useState(user.lastName);
    const [bio , setBio] = useState(user?.bio || '');
    const [gender , setGender] = useState(user?.gender || '')
    const [photoUrl , setPhotoUrl] = useState(user?.photoUrl || '')
    const [error , setError] = useState(false)
    const [toast , setToast] = useState(false)
    const dispatch = useDispatch()
    
    const updateProfile = async ()=>{
        setError("")
        try{
            const payload = {firstName , lastName , bio}
            if(photoUrl) payload.photoUrl = photoUrl;
            if(gender) payload.gender = gender
            const res = await axios.patch(BASE_URL + '/profile/edit' , payload , {withCredentials : true});
            dispatch(addUser(res.data.data))
            setToast(true);
            setTimeout(()=>{
                setToast(false)
            }, 3000)
        }catch(err){
            setError(err.response.data)
        }

    }
  return (
    <>
      <section className='editProfile-wrapper flex gap-20'>
        <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
                 <legend className="fieldset-legend text-center block w-full">Edit Profile</legend>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">First Name</legend>
                    <input value={firstName} onChange={ (e)=>setFirstName(e.target.value)}  type="text" className="input" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Last Name</legend>
                    <input value={lastName} onChange={ (e)=>setLastName(e.target.value)} type="text" className="input" placeholder="Type here" />
                </fieldset>
                 <fieldset className="fieldset">
                    <legend className="fieldset-legend">Bio</legend>
                    <input value={bio} onChange={ (e)=>setBio(e.target.value)} type="text" className="input" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo Url</legend>
                    <input value={photoUrl} onChange={ (e)=>setPhotoUrl(e.target.value)} type="text" className="input" placeholder="Type here" />
                </fieldset>
                 <fieldset className="fieldset">
                  <label htmlFor="gender" className="label pb-2">
                    <span className="label-text font-medium"> Gender</span>
                  </label>
                  <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}   className="select select-bordered w-full bg-base-100 text-base-content" >
                    <option value="" disabled> 
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </fieldset>
                <div className="card-actions justify-center">
                    {error}
                    <button onClick={updateProfile} className="btn btn-primary">Update Profile</button>
                </div>
            </div>
        </div>

         <section className="userCard-wrapper  flex justify-center pt-18">
            <div className="card  w-96 bg-base-300 shadow-sm px-4 py-4">
                <figure>
                    <img className="w-50"
                    src={photoUrl}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{`${firstName}  ${lastName}`}</h2>
                    <p>{bio}</p>
                    <span>Gender : {gender}</span>
                </div>
                </div>
        </section>
    </section>
    {toast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
            <span>Update successfully.</span>
        </div>
    </div>
    }
    
    </>
  
  )
}
