import logo from '../../public/assets/logo-text.png'
const Footer = () => {
  return (
    <>
        <div className="container mx-auto flex justify-between pb-10 border-b border-gray-200">
            <div className="w-full md:w-4/12">
                <img src={logo} alt="logo" />
                <p className='font-normal text-[12px] text-[#64748B] pt-2 pb-4'>Curated tools, technologies, and resources for developers building modern software.</p>

                <ul className='flex gap-3'>
                    <li  className="font-semibold text-[12px] text-[#475569]"><a href="#">GitHub</a></li>
                    <li  className="font-semibold text-[12px] text-[#475569]"><a href="#">Twitter</a></li>
                    <li  className="font-semibold text-[12px] text-[#475569]"><a href="#">LinkedIn</a></li>
                </ul>
            </div>
            <div className="w-8/12 flex justify-around">

                <div className='flex flex-col gap-3'>
                    <p  className="font-bold text-[12px] text-[#0F172A] uppercase">Products</p>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-normal text-[12px] text-[#64748B]'><a href="#">Home</a></li>
                         <li className='font-normal text-[12px] text-[#64748B]'><a href="#">Technologies</a></li>
                         <li className='font-normal text-[12px] text-[#64748B]'><a href="#">Projects</a></li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <p  className="font-bold text-[12px] text-[#0F172A] uppercase">COMPANY</p>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-normal text-[12px] text-[#64748B]'><a href="#">About</a></li>
                         <li className='font-normal text-[12px] text-[#64748B]'><a href="#">Contact</a></li>
                         <li className='font-normal text-[12px] text-[#64748B]'><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <p  className="font-bold text-[12px] text-[#0F172A] uppercase">LEGAL</p>
                    <ul className='flex flex-col gap-2'>
                         <li className='font-normal text-[12px] text-[#64748B]'><a href="#">Privacy Policy</a></li>
                         <li className='font-normal text-[12px] text-[#64748B]'><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                
            </div>

        </div>
            <div className='flex justify-between py-5 container mx-auto'>
                <p className='font-normal text-[12px] text-[#94A3B8]'>© 2026 Dev Stack. All rights reserved.</p>
                <ul className='flex gap-5'>
                    <li className='font-normal text-[12px] text-[#94A3B8]'><a href="">Privacy</a></li>
                    <li className='font-normal text-[12px] text-[#94A3B8]'><a href="">Terms</a></li>
                </ul>
            </div>
    </>
  )
}

export default Footer