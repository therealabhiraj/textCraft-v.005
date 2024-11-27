import React from 'react'
import Slider from './Slider'
import Sliderm from './Sliderm'

const Section02h = () => {
    
    return (
        <div>
            <section className=" flex  bg-cgray flex-col gap-6  h-fit items-center justify-center w-full">

                <div className=" w-3/4 px-1 py-2 lg:h-fit lg:py-3 lg:mt-3 bg-zinc-800 text-white hover:border-white hover:border-2 h-3/4 flex shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] flex-col rounded-3xl hover:scale-105 transition all duration-700 ease-in items-center  ">

                    <div className=" min-411:text-2xl lg:text-3xl text-base px-1 py-1  font-bold">Unleashing creativity through AI</div>
                    <div className=" min-411:text-xl lg:text-2xl text-xs px-1 py-1 text-center font-light">TextCraft Madeup Using MERN and GenAI Technology</div>
                    <div className="w-full flex px-1 py-1 justify-center">
                        <button className="border-white active:invert border px-2 h-7 py-1 w-16 text-xs rounded-lg active:bg-black bg-opacity-40  mt-2  lg:scale-125">Tools</button>
                    </div>

                </div>

                <div className=" w-3/4 px-1 py-2 lg:h-fit lg:py-3 lg:mt-3 bg-zinc-800 text-white hover:border-white hover:border-2 h-3/4 flex shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] flex-col rounded-3xl hover:scale-105 transition all duration-700 ease-in items-center  ">

                    <div className=" min-411:text-2xl lg:text-3xl text-base px-1 py-1  font-bold">Empowering your imagination with AI</div>
                    <div className=" min-411:text-xl lg:text-2xl text-xs px-1 py-1 text-center font-light">Bring your ideas to life with MERN and AI-powered image generation.</div>
                    <div className="w-full flex px-1 py-1 justify-center">
                        <button className="border-white active:invert border px-2 h-7 py-1 w-16 text-xs rounded-lg active:bg-black bg-opacity-40  mt-2  lg:scale-125">Tools</button>
                    </div>

                </div>

            </section>


            <div id="library" className='flex lg:text-3xl border-b-4 border-zinc-800 py-4 text-white gap-3 mt-4 text-lg bg-cgray items-end  font-bold'><img src="./images/library.png " className='w-7 invert lg:w-12 ml-3' />LIBRARY</div>
            <div className='relative bg-cgray py-6 w-full flex justify-center h-fit   sm:h-[800px]'>
                <Slider/>

                    {/* phone view */}



                <Sliderm/>
                

            </div>

        </div>
    )
}

export default Section02h