import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../slice/feedSlice';
import UserCard from './UserCard';


export default function Feed() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.feed)
    const fetchData = async ()=>{
        if(user) return
        try{
            const res = await axios.get(BASE_URL + '/user/feed' , { withCredentials: true });
            const feedData = res?.data?.users;
            dispatch(addFeed(feedData))
            console.log(user)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <section className='feed-wrapper'>
        {
            user && user.length > 0 && <UserCard user={user[0]}/>
        }
    </section>
  )
}
