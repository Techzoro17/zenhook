import React from 'react'
import logo from '../Resource/Logo.png'
import profile from '../Resource/user.png'
import '../index.css'


const Nav = () => {
  return (
    <div>
        <div className='flex justify-around h-16 g items-center     ' >

            <img src={logo} alt="Logo"  className='h-1/2  '/>

            <ul className='atomic-age-regular flex justify-between w-2/5 text-lg text-white '>
                  <li >MEN</li>
                  <li>WOMEN</li>
                  <li>KIDS</li>
                  <li>CUSTOMIZE</li>
                  <li>FAVOURITES</li>
            </ul>

            <section className='flex text-white items-center justify-between font-semibold  h-full space-x-2 '>
              <img src={profile} alt="User_profile"  className='h-1/2 w-1/2'/>
              <h2>LOGIN</h2>
            </section>

        </div>
        <div className='w-11/12  h-[1px] mx-auto bg-white'>
          
        </div>
    </div>
  )
}

export default Nav