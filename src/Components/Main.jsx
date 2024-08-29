import React from 'react'
import Nav from './Nav'
import '../index.css'
import logo from '../Resource/Logo.png'
import shoe5 from '../Resource/shoe5.png'
import shoe1 from '../Resource/shoe1.png'
import shoe2 from '../Resource/shoe2.png'
import shoe3 from '../Resource/shoe3.png'
import shoe4 from '../Resource/shoe4.png'


const Main = () => {

  const shoecase=[
    {
      name:'Addidas 4FDWX8',
      price:280,
      star:5,
      img:shoe1
    },
    {
      name:'Addidas forward',
      price:300,
      star:5,
      img:shoe2
    },
    {
      name:'Addidas 380RDX',
      price:280,
      star:5,
      img:shoe3
    },
    {
      name:'Addidas Classsic',
      price:250,
      star:5,
      img:shoe4
    },
  ]
  return (
    <div className='bg h-[100vh] inner-shadow  relative z-0'>
      {/* Background logo */}
      <div className='w-full absolute z-0 flex justify-center h-[80vh] items-center  '>
         <img src={logo} alt="bg-logo"  className=' w-[80vh]   opacity-50 bg-effect '/>
      </div>

      {/* Navigation Part start*/}
      <section className='relative z-10 '>
         <Nav />
      </section>
      {/*Main Content Start And the Main shoe*/}
      <section className='flex px-10 h-[60vh] zen-dots-regular  text-white '>

        {/* Left main*/}
        <div className='w-1/4 pl-10 flex flex-col justify-center'>
          <h2 className='text-[10vh]  font-extrabold w-20  '>JUST BUY IT</h2>
          <p className='font-mono font-thin  pl-8 relative'>YOU WILL BE AMAZED TO FIND A BEST DESIGNER SHOE'S</p>
        </div>

        {/*Middle main part*/}
        <div className='z-10 relative w-2/4 h-max flex justify-center items-center '>
          <img src={shoe5} alt=" Shoe" className='effect  h-auto -rotate-[20deg] -translate-x-20 translate-y-10 ' />
        </div>

        {/*Right main part*/}
        <div className='w-1/4  flex flex-col justify-around items- pt-40'>
          <div>
              <h1>ADDIDAS FOX286</h1>
              <p>$280</p>
          </div>
          <button>GET NOW</button>
          
        </div>

      </section> 
      {/*Small main part */}
      <section className='w-full h-10  relative flex justify-end px-10 mt-16 z-20'>
        <div className='flex justify-between w-4/5  '>
          {shoecase.map((item)=>(
            <div className='bg-white w-64 h-24 rounded-3xl zen-dots-regular flex'>

              <div className='w-4/5 h-full  -translate-x-12 translate-y-10'>
                <img src={item.img} alt="shoe" className='  h-30 drop-shadow-2xl drop -rotate-[25deg]'/>
              </div>

              <div className=' w-full  my-auto   flex flex-col items-start' >
                  
                    <h2 className='text-[10px] '>{item.name}</h2>
                    <p className='  text-[10px]'>{item.star} STAR</p>
                    <p className='text-[15px] '>${item.price}</p>
                    <p className=' w-full flex justify-end px-4'>+</p>
              
              </div>

              

            </div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default Main