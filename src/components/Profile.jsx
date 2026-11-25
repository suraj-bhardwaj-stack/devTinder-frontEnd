import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import EditProfile from "./EditProfile";


export default function Profile() {

  const user = useSelector((store) => store.user)
  console.log(user)

  return (
    <section className='profile-wrapper flex justify-center pt-18 gap-20'>
        

        {
          user &&  <EditProfile user={user}/>
        }

       
    </section>
  )
}
