import React from "react";
import tw from "twin.macro"

const P = tw.p`py-5 px-10 hover:bg-pinky hover:text-white rounded-3xl`
const LOGO = tw.p`flex items-center mt-8 text-white`

export default function Navbar(){
    return (
        <div className=" min-w-fit px-5 bg-purply">
            <LOGO>
                <img src="logo3.png" alt="" className=" max-w-28 pr-2"/>
                <p className="text-5xl text-slate-200">WebDev</p>
            </LOGO>
            <div className=" text-slate-200 text-center mt-5">
            <P><a href="#images">images</a></P>
            <P><a href="#icons">icons</a></P>
            <P><a href="#inspiration">inspiration</a></P>
            <P><a href="#colors">colors</a></P>
            <P><a href="#tailwindCss">tailwind</a></P>
            <P><a href="#css">css</a></P>
            </div>
        </div>
    )
}