
import { useState } from 'react'
import logo from '/assets/logo-text.png'
import { FaBars } from 'react-icons/fa6'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false)

  const handleToggle =()=>{
    setToggleMenu(!toggleMenu)
    console.log("first")
  }

  
  return (
    <>
    
    {/* toggle menu */}
    <div className='sticky top-0 border-b border-gray-200'>
      <div className='flex justify-between items-center gap-5 bg-white px-4 py-5 md:hidden'>

      <button className='border border-gray-200 p-2 rounded-md relative' onClick={handleToggle}>
        {toggleMenu ? <RxCross1 size={20} className='text-red-600'/> : <FaBars size={20} />}
      </button>

      <div>
        <img src={logo} alt="logo" className='w-28' />
      </div>
              <div className='flex gap-2'>
              <button className='text-[12px] md:text-[16px] hover:text-[#D91B7E] transition-all duration-300'>Sign In</button>
              <button className='btn btn-secondary !h-7 px-2 !min-h-0 md:!h-9 md:!min-h-0 rounded-3xl bg-gradient-to-r from-[#FF5722] to-[#D81B7E] border-none text-[12px] md:text-[16px]'>Sign Up</button>
            </div>
    </div>

      {toggleMenu && <ul className='flex flex-col w-2/3 gap-6 bg-white px-10 pl-16 py-3 pb-16 border border-gray-100 rounded-md rounded-t-none shadow-md absolute top-18 left-0'>
                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Home</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Technologies</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Projects</a></li>

                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">About</a></li>
                
                <li className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'><a href="#">Contact</a></li>
              
           </ul>}

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
              <button className='btn btn-secondary !h-9 !min-h-0 rounded-3xl bg-gradient-to-r from-[#FF5722] to-[#D81B7E] border-none '>Sign Up</button>
            </div>
        </div>
       </div>
    </>
  )
}

export default Navbar