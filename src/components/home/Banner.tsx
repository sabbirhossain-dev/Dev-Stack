
import banner from '/assets/banner-stack.png'
const Banner = () => {
  return (
    <div className='flex justify-between items-center py-7'>
        <div className='w-full md:w-1/2'>
            <h1 className='text-[60px] font-extrabold text-[#0F172A] leading-none'>Build Your Ideal <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>

            <p className='text-[18px] font-normal text-[rgb(71,85,105)] pt-7 pb-12 w-[560px]'>Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.</p>
            <div className='flex gap-5'>
                <button className='bg-gradient-to-r from-[#FF5722] to-[#D81B7E] text-[14px] font-semibold text-white py-2 px-3 rounded-md'>Explore Technologies</button>
                <button className='border text-[14px] font-semibold text-[#374151] py-2 px-10 rounded-md'>Learn more</button>
            </div>
        </div>
        <div>
            <img src={banner} alt="banner image" />
        </div>
    </div>
  )
}

export default Banner