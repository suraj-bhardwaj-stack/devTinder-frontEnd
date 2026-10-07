import { useSelector } from "react-redux"


export default function NavBar() {
    const user = useSelector((store) => store.user)
    
  return (
    <section className="nav-wrapper bg-base-300 shadow-sm px-4">
     <div className="navbar">
        <div className="flex-1">
            <a className="logo">
                <img src="/dev-tinder.png" alt="DevTinder" width=' 60px' />
            </a>
        </div>
        <div className="flex gap-2">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                {user && 
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                }
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>
    </section>
  )
}
