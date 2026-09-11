import { useState,useEffect } from "react";
import type { TechType } from "../technologiesType";
const Skills = () => {
    const [data, setData] = useState<TechType[]>([]);
    
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
    <h3>Explore the Technologies</h3>
    <div>
    {data.map(({name,id,category})=>(
      <div key={id}>
        <p>{name}</p>
        <p>{category}</p>
      </div>
    )
      
    )}</div>
  
    </div>
  )
}

export default Skills