import React from "react";
import tw from "twin.macro"

const P = tw.p`py-5 px-10 rounded-3xl hover:text-neutral-500 text-xl flex items-center `
const LOGO = tw.a`flex items-center mt-8 justify-center `

export default function Navbar(){
    return (
        <div className="px-3 hidden md:block ">
            <LOGO href="#">
                <img src="icon.png" alt="" className=" w-16 pr-2"/>
                <p className="text-3xl font-bold">WebDev</p>
            </LOGO>
            
            <div className="text-center mt-5 ">
            <P>
                <img src="nav/colors.png" alt="" className="w-9 h-6 pr-3" />
                <a href="#colors">
                colors
            </a></P>
            <P>
                <img src="nav/images.png" alt="" className="w-9 h-6 pr-3" />
                <a href="#images">
                images
            </a></P>
            <P>
                <img src="nav/icons.svg" alt="" className="w-9 h-6 pr-3" />
                <a href="#icons">
                icons
            </a></P>
            <P>
                <img src="nav/tail2.png" alt="" className="w-9 h-5 pr-3" />
                <a href="#tailwind">
                tailwindCss
            </a></P>
            <P>
                <img src="nav/inspo.png" alt="" className="w-10 h-7 pr-3" />
                <a href="#inspiration">
                inspiration
            </a></P>
            </div>
        </div>
    )
}