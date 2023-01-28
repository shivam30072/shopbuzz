import React from 'react'

const Products = ({ products, cart, setCart }) => {


  return (
    <div className='flex flex-wrap justify-center mt-2'>
        {products.map((prod, id) => {
            return(
            <div className=' sm:m-6 sm:w-[250px] w-[150px] m-1 flex flex-col justify-between sm:h-[300px]' key={id}>
                
                <div className='h-[50%]'><img className='w-[200px] h-[100%] transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-300 hover:shadow-2xl rounded-xl' src={prod.image} /></div>
                <div>
                <p className='font-bold'>Name: {prod.title}</p>
                <p className='font-bold'>price: Rs {Math.round(prod.price)}/-</p>
                <p className='font-bold'>rating: {prod.rating.rate}</p>
                {cart.includes(prod) ?  <button 
                className='bg-red-400 w-full border rounded mt-[5px] font-bold' 
                onClick={() => {setCart(cart.filter((c) => c.id !== prod.id))}}>
                Remove from cart
                </button> 
                : 
                <button 
                className='bg-green-400 w-full border rounded mt-[5px] font-bold'
                onClick={() => {setCart([...cart, prod])}}>
                  To cart
                </button>
                 }
                </div>
            </div>
            )
        })}
        
    </div>
  )
}

export default Products