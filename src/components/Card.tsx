import React from "react";

export interface props{
    logo:string;
    name:string;
    desc:string;
    url:string;
}
export default function app({logo,name,desc,url}:props){
    return(
        <div 
        onClick={(e) =>{e.preventDefault(); window.open(`${url}`, '_blank');}}      
        className='cursor-pointer w-full shadow-md flex items-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 bg-lightbeigy mb-2 text-darkblue'> 

            <div className=" w-1/5">
                <img src={logo} alt="" className="pr-4 py-4 text-center mx-auto max-w-10 max-h-20" />
            </div>
            <div className="">
                <div className="font-bold">{name}</div>
                <div className="font-light">{desc}</div>
            </div>

        </div>
    )
}