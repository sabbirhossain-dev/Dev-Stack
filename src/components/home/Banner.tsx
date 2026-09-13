
import banner from '/assets/banner-stack.png'
const Banner = () => {
  return (
    <div className='px-4 md:px-8 lg:px-0 md:py-12 flex flex-col md:flex-row justify-between items-center py-10 '>
        <div className='w-full md:w-1/2'>
            <h1 className='text-center md:text-left mx-auto md:w-full text-[30px] md:text-[60px] font-extrabold text-[#0F172A]0 md:leading-none leading-9'>Build Your Ideal <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>

            <p className='text-[14px] md:text-[18px] font-normal text-[rgb(71,85,105)] pt-4 md:pt-7 pb-12 md:w-[560px] text-center md:text-left'>Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.</p>
            <div className='flex mx-2 lg:mx-0 gap-5 justify-between md:justify-normal'>
                <button className='bg-gradient-to-r from-[#FF5722] to-[#D81B7E] text-[12px] md:text-[14px] font-semibold text-white py-2 px-3 rounded-md'>Explore Technologies</button>
                <button className='border text-[12px] md:text-[14px] font-semibold text-[#374151] py-2 px-10 rounded-md'>Learn more</button>
            </div>
        </div>
        <div>
            <img src={banner} alt="banner image" />
        </div>
    </div>
  )
}

export default Banner