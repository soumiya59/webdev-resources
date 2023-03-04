import React from "react";
import Card from './Card'
import tw from "twin.macro"

const SECTION = tw.div`p-5 md:mx-5  `
const ROW = tw.div`grid grid-cols-3 grid-rows-1 gap-5 justify-items-start`

interface item{
   name:string,
   logo:string,
   desc:string,
   url:string,
}
interface props{
    data:item[],
    header:string,
    id:string;
}
export default function Section({data,header,id}:props){
    return(
        <SECTION id={id}>
          <div className="flex items-venter mb-5 md:ml-2">
            <img src="tag.png" alt="" className="pr-2 w-10 h-8 "/>
            <p className="text-2xl font-extrabold">{header}</p>
          </div>
          <ROW>
            <>
              {data.map(item=>{
                return(
                <Card 
                  key={item.name}
                  logo={item.logo} 
                  name={item.name} 
                  desc={item.desc} 
                  url={item.url}
                />
                )
              })}
            </>
          </ROW>
        </SECTION>

    )
}