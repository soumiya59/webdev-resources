import React from "react";
import tw from "twin.macro"

const P = tw.p`py-5 px-10 rounded-3xl hover:text-neutral-500 text-xl`
const LOGO = tw.p`flex items-center mt-8 text-darkblue`

export default function Navbar(){
    return (
        <div className="px-5 bg-pinky text-darkblue hidden md:block">
            <LOGO>
                <img src="logo3.png" alt="" className="pr-2"/>
                <p className="text-3xl">WebDev</p>
            </LOGO>
            <div className="text-center mt-5 ">
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