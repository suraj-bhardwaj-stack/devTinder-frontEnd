
import { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../slice/userSlice'

function Body() {
  const dispatch = useDispatch()
  const naviagte = useNavigate()
  const fetchData = async() =>{
        try{
            const res = await axios.get(BASE_URL + '/profile/view'  ,{ withCredentials: true });
            dispatch(addUser(res.data))
        }catch(err){
            if(err.response?.status === 401){
              naviagte('/login')
            }
            console.log(err)
            console.log(err.response?.data)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <section className='body-wrapper'>
        <NavBar/>
        <Outlet/>
    </section>
  )
}

export default Body