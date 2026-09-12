import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../technologiesType";
import Card from "./Card";

type PropsType = {
    data:TechType[];
    setData: Dispatch<SetStateAction <TechType[]>>
}
export const CardItems = ({data,setData}:PropsType) => {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((tech)=>(
        <Card key={tech.id} {...tech} 
        data={tech} setData={setData}/>
    )
    )} </div> 
    </>
  )
}
