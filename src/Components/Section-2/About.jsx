import React,{useState} from 'react'

const WhoWeAre = () => {
  
  function alertTwitter(){
    alert("We don't have a Twitter Accout yet 😂")
  }

  function setDesignTrue(){
    setDesign(true);
  }
  function setDesignFalse(){
    setDesign(false);
  }

  function setElectricalTrue(){ 
    setElectrical(true);  
  }
  function setElectricalFalse(){
    setElectrical(false);
  }

  function setManagementTrue(){
    setManagement(true);
  }
  function setManagementFalse(){
    setManagement(false);
  }

  function setSocialMediaTrue(){
    setSocialMedia(true);
  } 
  function setMediaFalse(){
    setSocialMedia(false);
  }

  const [isDesign,setDesign]=useState(false);
  const [isElectrical,setElectrical]=useState(false);
  const [isManagement,setManagement]=useState(false);
  const [isSocialMedia,setSocialMedia]=useState(false);
    
  return (
    <div id="about" className='text-white pb-[10vh] my-[2vh]'>

      {/* <hr className='ml-[8vw] w-[60vw] mb-[5vh]'/> */}

      <div className='flex sm:flex-col items-center justify-center '>
        <div className='px-[8vw] flex flex-col  z-0 justify-center'>
              <h1 className='text-[#178376] text-5xl pb-4 font-bold'>Who are we?</h1>
              <h3 className='sm:pl-8 text-white text-2xl'>We are a group of like minded individuals promoting <span className=' font-semibold'>Humanoid Robotics</span> in VIT,Chennai</h3>
        </div>
        <img src='assets/sheldon_logo.png' onClick={alertTwitter} alt='WhoWeAre' className='hover:scale-125 duration-500 hover:duration-500 w-[20vw] sm:w-[50vw] mr-[10vw] object-cover' />
      </div>
    
      {/* <hr className='ml-[32vw] w-[60vw] my-[10vh]'/>  */}

      <div className='flex sm:flex-col ml-[8vw] w-[84vw] h-[50vh] justify-around items-center'>
        <div className='sm:order-1 flex w-[30vw] sm:w-[60vw] items-center justify-around '>
          <img src='assets/Departments/dept-1.png' alt='Departments' className={isDesign?'duration-500 scale-125 w-[6vw] sm:w-[10vw] h-auto':'hover:scale-125 duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' }/>
          <img src='assets/Departments/dept-2.png' alt='Departments' className={isElectrical?'duration-500 scale-125 w-[6vw] sm:w-[10vw] h-auto':'hover:scale-125 duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } />
          <img src='assets/Departments/dept-3.png' alt='Departments' className={isManagement?'duration-500 scale-125 w-[6vw] sm:w-[10vw] h-auto':'hover:scale-125 duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } />
          <img src='assets/Departments/dept-3.png' alt='Departments' className={isSocialMedia?'duration-500 scale-125 w-[6vw] sm:w-[10vw] h-auto':'hover:scale-125 duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } />                
        </div>
        <div className='flex flex-col pt-[5vh] z-0 text-white sm:mb-16 '>
          <h1 className='text-[#178376] text-5xl pb-4 font-bold'>What do we have?</h1>
          <div className='pl-8'>
            <h3 className='text-white text-2xl  font-semibold'>We oversee 4 departments </h3> 
            <h3 onMouseOver={setDesignTrue} onMouseOut={setDesignFalse} className='hover:scale-125 duration-500 hover:duration-500 text-2xl'>Design & Automation</h3>
            <h3 onMouseOver={setElectricalTrue} onMouseOut={setElectricalFalse} className='hover:scale-125 duration-500 hover:duration-500 text-white text-2xl '>Electrical & Programming</h3>
            <h3 onMouseOver={setManagementTrue} onMouseOut={setManagementFalse} className='hover:scale-125 duration-500 hover:duration-500 text-2xl '>Management</h3>
            <h3 onMouseOver={setSocialMediaTrue} onMouseOut={setMediaFalse} className='hover:scale-125 duration-500 hover:duration-500 text-white text-2xl '>Social Media & Content</h3>
          </div>       
        </div>
      </div> 
      
      {/* <hr className='ml-[8vw] w-[60vw] my-[10vh] sm:mt-[20vh]'/> */}

      <div className='flex sm:flex-col items-center justify-center '>
        <div className='px-[8vw] sm:pb-8 flex flex-col  z-0 justify-center'>
              <h1 className='text-[#178376] text-5xl pb-4 font-bold'>What do we do?</h1>
              <h3 className='sm:pl-8 text-white text-2xl'>Our mission is to innovate in humanoid robotics, creating many more bots for everyday community and home use.</h3>
        </div>
        <img src='assets/RobotAssets/robot hand.png' alt='WhoWeAre' className='hover:scale-125 duration-500 hover:duration-500 w-[20vw] sm:ml-[10vw] sm:mt-[5vh] sm:w-[50vw] mr-[10vw] object-cover' />
      </div>

      {/* <hr className='ml-[8vw] w-[84vw] mt-[10vh]'/>  */}

    </div>
  )
}

export default WhoWeAre