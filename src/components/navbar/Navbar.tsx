
import { NavLink } from 'react-router-dom'
import logo from '/assets/logo-text.png'

const Navar = () => {
  return (
    <>
       <div className='border-b border-gray-200 sticky top-0 z-10 bg-white'>
         <div className="container mx-auto flex justify-between items-center py-8 ">
          {/* logo part */}
            <div>
              <img src={logo} alt="logo" />
            </div>

            {/* menu item part */}
            <div>
              <ul className='flex gap-10'>
                <NavLink to="/" className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'>Home</NavLink>

                <NavLink to="/technologies" className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'>Technologies</NavLink>

                <NavLink to="/projects" className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'>Projects</NavLink>

                <NavLink to="/about" className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'>About</NavLink>
                
                <NavLink to="/contact" className='text-[14px] font-medium text-[#475569] hover:text-[#DB2777] transition-all duration-300'>Contact</NavLink>
              
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