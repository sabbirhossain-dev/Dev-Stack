
const Stack = () => {
  return (
    <div className="border border-gray-100 rounded-md p-5">
        <h3 className="text-[16px] font-bold text-[#0F172A]">Your Stack</h3>

        <p  className="text-[12px] font-normal text-[#94A3B8]">No technologies selected yet.</p>

        <div className="p-5 mt-3 flex justify-center items-center border border-gray-100 shadow-sm rounded-md">
            <p className="text-[12px] font-normal text-[#94A3B8]"> Your Stack is empty</p>
        </div>
    </div>
  )
}

export default Stack