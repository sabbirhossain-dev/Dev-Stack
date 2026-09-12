import { useState,useEffect } from "react";
import type { TechType } from "../technologiesType";
import { CardItems } from "./CardItems";
import Stack from "./Stack";
const Skills = () => {
    const [data, setData] = useState<TechType[]>([]);

    const [selectedItem,setSelectedItem] = useState<TechType[]>([])

    const [count, setCount] = useState(0)
    
    useEffect(()=>{

        const fetchData = async()=>{
            try{
                const res = await fetch("/technologies.json")

                if(!res.ok){
                    throw new Error("Data failed to fetch!")
                }
                const result:TechType[] = await res.json()
                setData(result)
            }
            catch(error){
                console.error(error)
            }
        }
        // fetch("/technologies.json")
        // .then((res)=>res.json())
        // .then((data)=>{
        //     setData(data)
        // })
        // .catch((error)=>{
        //     console.error(error)
        // })
        fetchData()
    },[])
  return (
    <div>
    <h3 className="text-[36px] font-extrabold text-[#0F172A]">Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h3>

    <p className="text-[17px] pt-1 font-normal text-[#64748B]">Pick one technology per category to build your ideal stack.</p>

    {/* card items */}
    <div className="flex justify-between gap-5 py-10">
      <div className="w-3/4">
      <CardItems 
      data={data} 
      setData={setData}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      count={count} 
      setCount={setCount}/>
      </div>
      <div className="w-1/4">
        <Stack 
        selectedItem={selectedItem} 
        setSelectedItem={setSelectedItem} 
        count={count} 
        setCount={setCount}/>
      </div>
    </div>
  
    </div>
  )
}

export default Skills