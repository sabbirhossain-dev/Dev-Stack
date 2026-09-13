
import { useState } from 'react'
import logo from '/assets/logo-text.png'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

const Navar = () => {

  const [toggleMenu,setToggleMenu] = useState(false)

  const handleToggle =()=>{
    setToggleMenu(!toggleMenu)
    console.log("first")
  }

  
  return (
    <>
    
    {/* toggle menu */}
    <div className='sticky top-0 border-b border-gray-200'>
      <div className='flex justify-between gap-5 bg-white px-7 py-5'>

      <button className='border border-gray-200 px-2 rounded-md' onClick={handleToggle}>
        {toggleMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>


      <div>
        <img src={logo} alt="logo" />
      </div>
        {/* <ul className='flex flex-col gap-10'>
                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Home</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Technologies</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Projects</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">About</a></li>
                
                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Contact</a></li>
              
           </ul> */}

              <div className='flex gap-4'>
              <button className='hover:text-[#D91B7E] transition-all duration-300'>Sign In</button>
              <button className='btn btn-secondary !h-9 !min-h-0 rounded-3xl bg-[#D91B7E] border-[#D91B7E]'>Sign Up</button>
            </div>
    </div>
    </div>


    {/* normal menu */}
       <div className='hidden md:block border-b border-gray-200 sticky top-0 z-10 bg-white'>
         <div className="container mx-auto flex justify-between items-center py-8 ">
          {/* logo part */}
            <div>
              <img src={logo} alt="logo" />
            </div>

            {/* menu item part */}
            <div>
              <ul className='flex gap-10'>
                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Home</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Technologies</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Projects</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">About</a></li>
                
                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Contact</a></li>
              
              </ul>
            </div>

            {/* buttons part */}
            <div className='flex gap-4'>
              <button className='hover:text-[#D91B7E] transition-all duration-300'>Sign In</button>
              <button className='btn btn-secondary !h-9 !min-h-0 rounded-3xl bg-[#D91B7E] border-[#D91B7E]'>Sign Up</button>
            </div>
        </div>
       </div>
    </>
  )
}

export default Navar