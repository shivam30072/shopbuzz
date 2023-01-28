import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    /* */
  return (
    <div className=' w-full sm:h-[10vh] bg-slate-200 sm:flex sm:justify-between sm:items-center  h-[15vh] flex justify-center items-center'>
        <div className='sm:pl-6 flex-none sm:flex-none mr-2'>
            <span className='font-bold sm:text-2xl'>ShoppBuzz</span>
        </div>
        <div className='sm:w-[35%] sm:h-[35px] sm:flex sm:rounded-sm shadow-xl flex-1 sm:flex-none w-[40%] h-[35px]'>
          <input className='w-full h-full sm:pl-4 pl-2 text-sm rounded-md' type='text' placeholder='search here' />
        </div>
       <div className='pr-6 flex-none ml-2'>
        <span><Link to={'/cart'}>
        <img className='w-[30px]' src='https://cdn-icons-png.flaticon.com/512/891/891462.png' /> </Link></span>
        </div>
    </div>
  )
}

export default Navbar