import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../technologiesType";

import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

type PropsType = {
    selectedItem: TechType[];
    setSelectedItem: Dispatch<SetStateAction <TechType[]>>
    count: number
    setCount: Dispatch<SetStateAction <number>>
}
const Stack = ({selectedItem,setSelectedItem,count,setCount}:PropsType) => {

  const handleDelete=(id:number)=>{

    const AfterDelete = selectedItem.filter((item)=>item.id != id)
    toast.info("removed")
    const countTech = count - 1;
    setCount(countTech)
    setSelectedItem(AfterDelete)
  }

  const handleRemoveAll =()=>{
    setSelectedItem([])
    toast.info("removed all")
    setCount(0)
  }
  return (
    <div className="border border-gray-200 rounded-md p-6">
        <h3 className="text-[16px] font-bold text-[#0F172A]">Your Stack</h3>

        <p  className="text-[12px] font-normal text-[#94A3B8] pb-3">{count <= 0 ? "No technologies selected yet." : `${count} Technologies Selected`}</p>

            {selectedItem.length === 0 &&
        <div className= "border border-dashed border-gray-300 shadow-sm rounded-md text-center py-5">
          <p className="text-[12px] font-normal text-[#94A3B8]"> Your Stack is empty</p>
            </div>
            }

            {selectedItem.map((item:TechType)=>(
              <div key={item.id}>
                <div className="flex justify-between gap-5 items-center border rounded-md p-4 mb-2">
                  <div className="flex gap-3 items-center">
                    <img src={item.icon} alt="logo" className="w-8 h-auto"/>

                  <div className="">
                    <p className="font-bold text-[12px] text-[#0F172A]">{item.name}</p>
                    
                    <p className="font-bold text-[8px] text-[#94A3B8]">{item.category}</p>
                  </div>
                  </div>
                <button onClick={()=>handleDelete(item.id)}><RxCross2 /></button>
                </div>


              </div>
            )
            
          )}
         {count > 0 &&  <button className="btn btn-outline btn-error !h-9 min-h-0 w-full mt-7 font-semibold" onClick={handleRemoveAll}>Remove All</button>}
    </div>
  )
}

export default Stack