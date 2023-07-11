import React from 'react'

const SubHero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
    {/* <--Card 1--> */}
      <div className='relative rounded-xl'>
        <div className='absolute rounded-xl px-2 w-full h-full bg-black/50 text-white'>
           <p className='font-bold text-2xl  pt-4'>Sun's Out, BOGO's Out</p>
           <p>Through 8/26</p>
           <button className='bg-white text-black absolute bottom-4'>Order Now</button>
        </div>         
        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src=' https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' />
      </div>
          {/* <--Card 2--> */}
          <div className='relative rounded-xl'>
        <div className='absolute rounded-xl px-2 w-full h-full bg-black/50 text-white'>
           <p className='font-bold text-2xl  pt-4'>New Restaurants</p>
           <p>Added Daily</p>
           <button className='bg-white text-black absolute bottom-4'>Order Now</button>
        </div>         
        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src=' https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' />
      </div>
          {/* <--Card 3--> */}
          <div className='relative rounded-xl'>
        <div className='absolute rounded-xl px-2 w-full h-full bg-black/50 text-white'>
           <p className='font-bold text-2xl  pt-4'>We Deliver Desserts Too</p>
           <p>Tasty Treats</p>
           <button className='bg-white text-black absolute bottom-4'>Order Now</button>
        </div>         
        <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src=' https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' />
      </div>
    </div>
  )
}

export default SubHero
