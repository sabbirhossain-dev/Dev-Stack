import {  type Dispatch, type SetStateAction } from "react";
import type { TechType } from "../technologiesType";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

type PropsType = {
    data:TechType;
    setData: Dispatch<SetStateAction <TechType[]>>
    selectedItem: TechType[];
    setSelectedItem: Dispatch<SetStateAction <TechType[]>>
    count: number
    setCount: Dispatch<SetStateAction <number>>
}
const Card = ({data,selectedItem,setSelectedItem,count,setCount}:PropsType) => {

    // const [disableButton, setDisableButton] = useState(false)

    const isSelectedCard = selectedItem.some((item)=>item.id === data.id)

    const handleAddButton =()=>{
        // setDisableButton(true);
        toast.success(`${data.name} is added!`)
        //selected items is here
        setSelectedItem((prev)=>[...prev,data])
        const countIncrease = count+1
        setCount(countIncrease)
    }


  return (
    <div className={`border ${isSelectedCard ? "border-green-300 shadow-md" : "border-gray-200"} p-5 rounded-md hover:shadow-md hover:border-green-300 transition-all duration-300`}>
        <div className="flex justify-between">
            <img src={data.icon} alt="icon" className="w-8 h-auto" />
            <button
            style={{color:data.btnColor, backgroundColor:data.btnBg}} className={`bg-blue-50 py-1 px-2 rounded-xl font-medium text-[11px] text-${data.btnColor} flex items-center`}>{data.badge}</button>
        </div>

        <h3 className="font-bold text-[18px] text-[#0F172A] pt-7">{data.name}</h3>
        <p className="font-normal text-[11px] text-[#64748B] pt-3 pb-4">{data.description}</p>

        <div className="flex justify-between items-center gap-5 pb-5">
            <button className="bg-gray-200 py-1 px-2 rounded-md font-medium text-[11px] text-[#475569]">{data.category}</button>
            <p className="font-medium text-[11px] text-[#64748B]">{data.level}</p>
            <p className="font-semibold text-[11px] text-[#334155] flex gap-1 items-center"><span className="text-yellow-500"><FaStar /></span>{data.rating}</p>
        </div>
        <button className={`btn btn-neutral text-sm  w-full !h-9 !min-h-0 `} onClick={handleAddButton} disabled={isSelectedCard}> {isSelectedCard ? "Added!": "Add to Stack"}</button>
    </div>
  )
}

export default Card