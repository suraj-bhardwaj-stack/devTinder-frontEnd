import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { removeUser } from "../slice/userSlice"
import axios from "axios"
import { BASE_URL } from "../utils/constants"


export default function NavBar() {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = async ()=>{
        try{
            await axios.post(BASE_URL + '/logout' ,{} ,{withCredentials : true})
            dispatch(removeUser())
            navigate('/login')
        }catch(err){

        }
    }
  return (
    <section className="nav-wrapper bg-base-300 shadow-sm px-4">
     <div className="navbar">
        <div className="flex-1">
            <a className="logo">
                <img src="/dev-tinder.png" alt="DevTinder" width=' 60px' />
            </a>
        </div>
        {user && <div className="flex gap-2">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                   
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logoutHandler}>Logout</Link></li>
                </ul>
                </div>
            </div> 
            }
        </div>
    </section>
  )
}
