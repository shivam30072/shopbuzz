import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState();

  // const [count, setCount] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((tot, prod) => tot + Number(Math.round(prod.price)), 0));
  }, [cart])


  return (
    <div className=' max-w-[1640px] '>
      <nav className='w-full h-[10vh] flex justify-between items-center bg-slate-100 border-b-2 border-slate-300'>
        <div className='w-[200px] ml-8'>
         <span className='text-2xl font-semibold font-sans text-green-500'><Link to={'/'}>Home</Link></span>
        </div> 
        <div className='sm:w-[300px]'>
          <span className='sm:text-xl text-sm font-bold font-mono'>Total- Rs. {total}/- </span>
        </div>
      </nav>
     
     <main className='max-w-[1640px] bg-slate-100 flex justify-center'>
       <div className='w-[80%] bg-slate-200 rounded-xl flex flex-wrap justify-center  sm:block'>
        {cart.length > 0 ? 
        cart.map((prod, id) => {
          return(
            <div className=' sm:m-6 sm:w-[250px] w-[120px] m-4 flex flex-col justify-between sm:h-[270px]'  key={id}>
              <div className='h-[60%]'><img className='w-[200px] h-[100%] rounded-xl' src={prod.image} /></div>
                <div className=''>
                <p className='font-bold'>Name: {prod.title}</p>
                <p className='font-bold'>price: Rs {Math.round(prod.price)}/-</p>
                </div>
                <div className='flex w-[85px] justify-between' >
                 <div onClick={() =>{handleIncreaseQuantity(prod.id)}}
                 className=' w-[20px] border border-blue-300 h-[30px] bg-white ml-2 text-2xl font-bold cursor-pointer'>+
                 </div>
                 <div 
                 className=' border-2 border-slate-400 bg-white text-xl w-[30%] h-7'>1
                 </div>
                 <div 
                  onClick={() => {count > 0 ? setCount(count-1) : ''}} 
                  className=' border border-blue-300 bg-white h-[30px] ml-2 w-[20px] text-2xl font-bold cursor-pointer'>-
                  </div>
                 
                </div>
                <div className=' w-[25px] ml-2 rounded bg-red-500'><img
                 onClick={() =>{setCart(cart.filter((c) => c.id !== prod.id))}} 
                 className='p-1 cursor-pointer w-[25px] mr-2' src='https://cdn-icons-png.flaticon.com/512/484/484560.png' alt='remove' /></div>
            </div>
          )
        })

        :
        <div className='h-[90vh] flex justify-center items-center font-bold text-3xl'>
          <span>Cart is Empty! <img className='w-[200px]' src='https://cdn-icons-png.flaticon.com/512/6009/6009591.png' alt= 'icon' /></span>
        </div>
      }
      
       </div>
       <div className='mt-2 sm:w-[50px] w-[50px]'>
        <img className='cursor-pointer sm:w-full' onClick={() => {setCart([])}} src='https://cdn-icons-png.flaticon.com/512/5028/5028066.png' />
        <span className='ml-3 font-semibold'>ALL</span>
       </div>
      
     </main>
         
    </div>
  )
}

export default Cart