import React from 'react'

const Header = () => {
  return (
    <div className='z-10 flex flex-col fixed w-[100vw] text-xs'>
      <div className='fixed w-[100vw] sm:h-[8.5vh] h-[11vh] pr-8 pl-8 b-0 flex bg-black text-white font-bold'>
          <div className='flex items-center w-[15vw] font-'>
              <img src='src\assets\logo.png' alt='logo' className='h-20  h-[5vh] ' />
              <h1>HumanoidX</h1>
          </div>
          <div className='flex items-center justify-end w-[85vw]'>
              <a href='#' className='px-[1vw]'>About</a>
              <a href='#' className='px-[1vw]'></a>
              <a className='px-[1vw]'>Projects</a>
              <a className='px-[1vw]'>OBs</a>
          </div>
      </div>
      <div className='pt-14 sm:pt-20 pb-0 t-0 text-white flex items-center'>
          <marquee behavior="scroll" direction="left" className='bg-[#178376] text-3xl font-semibold'><h1>NEW EVENT ALERT!!    NEW EVENT ALERT!!    NEW EVENT ALERT!!</h1></marquee>
      </div>
    </div>
  )
}

export default Header