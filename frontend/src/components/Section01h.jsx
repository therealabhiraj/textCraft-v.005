
import React from 'react'
import { Link } from 'react-router-dom'

const Section01h = ()=>
    {
    
    
        return (
            
    
    
                <div className=" bg-transparent scale-125 absolute z-10 min-411:w-80 lg:w-[720px] mb-16 bg-lgray  text-white  ">
    
                    <div className="min-411:text-3xl lg:text-5xl lg:w-[720px] lg:mb-2 min-411:w-80 w-56 text-base   mb-1 font-bold flex text-center  justify-center">Introducing TextCraft.</div>
                    <div className=" min-411:text-2xl lg:text-3xl min-411:w-80 w-56 lg:mb-2  text-sm mb-1 font-light flex justify-center lg:w-[720px] text-center">A new frontier for fast, controllable GenAI.</div>
    
                    <div className="flex lg:w-[720px] lg:mb-2 justify-center min-411:w-80 w-56 gap-3 text-xs ">
                        <button className="hover:border-white  border px-2 h-7 lg:h-7 lg:w-20 lg:text-lg flex items-center justify-center w-16 py-1 rounded-lg bg-white bg-opacity-40 hover:bg-opacity-0  "><Link to="/genimg">Try it</Link></button>
                        {/* <a href="https://www.youtube.com/" target="_blank" className="h-10 border-white border hover:text-white px-2 py-2 w-20 rounded-xl text-black bg-white bg-opacity-40 hover:bg-opacity-0  backdrop-blur-md"><button>Watch Demo</button></a> */}
                    </div>
    
                </div>
    
            
        )
    }
    
    export default Section01h



    
