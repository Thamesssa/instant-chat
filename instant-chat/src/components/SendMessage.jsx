import React from 'react'
import { useState } from 'react'

const SendMessage = () => {
  const [value, setValue]= useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(value)
    setValue("")
  }
  console.log(value)
  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg' >
      <form onSubmit={handleSendMessage} className='containerWrap flex px-2'>
        <input placeholder='Enter Message' value={value} onChange={e=> setValue(e.target.value)} className=' input w-full  focus:outline-none rounded-r-none' type="text" />
        <button type='submit' className='w-auto bg-gray-500 text-white rounded-r-lg px-5 text-small'>Send</button>
        </form>
      
    </div>
  )
}

export default SendMessage