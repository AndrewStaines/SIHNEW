import React from "react";
import img from '../assets/lad2.jpg'
import img1 from '../assets/ci.png'
import img2 from '../assets/gi.png'
import modi from '../assets/ji.png'
import img3 from '../assets/sup.png'
import log from '../assets/logo.png'
import { Link } from 'react-router-dom';
function Landing() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col  gap-4  bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})` }}>
                <div className="flex flex-row gap-44 bg-green-800 h-28 p-2 w-screen">
                    <div className="flex flex-row gap-44 mx-auto">
                    <div><img src={img1} className="shadow-md shadow-green-800 rounded-xl  p-2 h-20 bg-white hover:shadow-green-400"></img></div>
                    <div><img src={log} className="shadow-md shadow-green-800 rounded-xl h-20 hover:shadow-green-400"></img></div>
                    <div><img src={img2} className="shadow-md shadow-green-800 rounded-xl  p-2 h-20 bg-white hover:shadow-green-400"></img></div>
                    <div><img src={img3} className="shadow-md shadow-green-800 rounded-xl h-20 hover:shadow-green-400"></img></div></div></div>
                    <div className="flex flex-row bg-green-800 h-fit p-2 w-screen">
                    <div className="flex flex-row gap-12 mx-auto cursor-pointer ">
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">About</h1>
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">Recognization</h1>
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">Funding</h1>
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">Schemes&Policies</h1>
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">Market Access</h1>
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">Marquee Initiatives</h1>
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">Resources</h1>
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">Get Featured</h1>
                        <h1 className="text-2xl text-red-400 drop-shadow-lg">Network</h1>
                    </div>
                    </div>
                    <input type="search" name="" className="mx-auto bg-[#EAF0F7] px-14 text-xl py-3 rounded-lg focus:outline-none w-96 border-2 border-black" placeholder="⌕   Search" id="" />
                    <div className="flex flex-row items-center justify-center shadow-md shadow-green-800 rounded-xl  p-2 h-96 w-fit mx-auto border-4 hover:border-green-400 border-green-700 hover:shadow-green-400 cursor-pointer">
                        <h1 className="text-yellow-600" >“A big business starts small.”</h1>
                    <div><img src={modi} className="h-96 rounded-xl "></img></div>
                    </div>
                    <div className="flex flex-row gap-12 mx-auto">
                    <Link className="bg-[#009c00] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#009c0080] text-center no-underline" to='/signup'>Signup</Link>
                    <Link className="bg-[#009c00] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#009c0080] text-center no-underline" to='/home'>Login</Link>
                    </div>
            </div>
        </>
    )
}

export default Landing