import React, { useState } from 'react'
import { data } from "../data/data.js";

const Food = () => {

    const [food , setFood]=useState(data)

    const filterType = (category) => {
        setFood(
          data.filter((item) => {
            return item.category === category;
          })
        );
      };

    const filterPrice = (price) => {
        setFood(
          data.filter((item) => {
            return item.price === price;
          })
        );
      };  

  return (
    <div className='max-w-[1640px] mx-auto px-4 my-12 space-y-5'>
      <h1 className='text-center text-4xl text-orange-600 font-bold'>Top Rated Menu Items</h1>

        {/* <--Filter Section--> */}
        <div className='flex flex-col lg:flex-row justify-between space-y-4'>
            {/* <--Filter Type--> */}
            <div className='space-y-1'>
                <p className='text-gray-700 font-bold'>Filter Type</p>
                <div className='flex justify-between flex-wrap lg:space-x-2'>
                    <button onClick={() => setFood(data)} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full' >All</button>
                    <button onClick={() => filterType('burger')} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full' >Burgers</button>
                    <button onClick={() => filterType('pizza')} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full' >Pizza</button>
                    <button onClick={() => filterType('salad')} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full' >Salad</button>
                    <button onClick={() => filterType('chicken')} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full' >Chicken</button>
                </div>
            </div>
            {/* <--Filter Price--> */}
            <div className='space-y-1'>
                <p className='text-gray-700 font-bold'>Filter Price</p>
                <div className='flex justify-between flex-wrap lg:space-x-2'>
                    <button onClick={() => filterPrice('$')} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full'>$</button>
                    <button onClick={() => filterPrice('$$')} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600 rounded-full'>$$$$</button>
                </div>
            </div>
        </div>

        {/* <--Food Images--> */}
        
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 '>
               {food.map((item , index)=>(
                <div   key={index}
                       className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                   <img   src={item.image}
                          alt={item.name}
                          className='w-full h-[200px] object-cover rounded-t-lg'/>
                   <div className='flex justify-between px-2 py-4'>
                     <p className='font-bold'>{item.name}</p>
                     <p><span className='bg-orange-600 rounded-full p-1'>{item.price}</span></p>
                   </div>
                   
                </div>
               ))
        }
            </div>
 

    </div>
  )
}

export default Food
