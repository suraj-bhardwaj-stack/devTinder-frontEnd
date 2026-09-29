import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <section className='body-wrapper'>
        <NavBar/>
        <Outlet/>
    </section>
  )
}

export default Body