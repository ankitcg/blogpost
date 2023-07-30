import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center bg-black'>
        <h1 className='text-5xl text-white font-bold w-96 my-10'>Never miss another article</h1>
        <div className='my-10'>
            <input className='my-4 mx-4 ' type='email' placeholder='Enter your email here'/>
            <button className='text-black bg-white w-16 h-10 rounded-3xl'>Join</button>
        </div>
    </div>
  )
}

export default Footer