import React, { useState } from 'react'

const Extra2 = () => {

    const [isslide, setslide] = useState(false);
    const [isdrop, setdrop] = useState(false);


    return (<>



        <div className='hidden sm:flex w-full h-[520px] bg-zinc-900  gap-4  justify-center'>


            <div className='w-1/3 h-1/2 flex px-2  py-2 gap-3 '>

                <div className='w-1/2  flex flex-col gap-3 rounded-lg' >

                    <img className="w-full h-full object-cover hover:scale-105 hover:opacity-55 transition-all duration-500 ease-out rounded-lg" src="./images/scar.jpg" />
                    <img className="w-full h-full object-cover hover:scale-105 hover:opacity-55 transition-all duration-500 ease-out rounded-lg" src="./images/konaldo.jpg" />

                </div>


                <div className='w-1/2  flex flex-col gap-3 rounded-lg'>

                    <img className="w-full object-cover h-full hover:scale-105 hover:opacity-55 transition-all duration-500 ease-out rounded-lg" src="./images/sad_monalisa[1].jpg" />
                    <img className="w-full object-cover h-full  hover:scale-105 hover:opacity-55 transition-all duration-500 ease-out rounded-lg" src="./images/panda.jpg" />

                </div>

            </div>

            <div className='w-1/2 text-white flex flex-col justify-center '>

                <h1 className='font-extrabold mb-4 text-4xl'>Generate images with peace of mind</h1>
                <p className='font-medium text-xl '>Use the Picsart AI Image Generator with confidence, knowing that generated images are reviewed to help ensure that they meet our safety and community guidelines.</p>

            </div>

        </div>




        {/*Mobile view  */}



        <div className='sm:hidden w-full h-[320px] bg-zinc-900 flex gap-4 items-center justify-center'>


            <div className='w-2/3 h-2/3 flex items-center border-white px-2 py-2 gap-3 '>

                <div className='w-1/2  flex flex-col gap-3 rounded-lg' >

                    <img className="w-full h-full object-cover hover:scale-105 hover:opacity-55 transition-all duration-500 ease-out rounded-lg" src="./images/konaldo.jpg" />
                    <img className="w-full h-full object-cover hover:scale-105 hover:opacity-55 transition-all duration-500 ease-out rounded-lg" src="./images/konaldo.jpg" />

                </div>


                <div className='w-1/2  flex flex-col gap-3 rounded-lg'>

                    <img className="w-full object-cover h-full hover:scale-105 hover:opacity-55 transition-all duration-500 ease-out rounded-lg" src="./images/konaldo.jpg" />
                    <img className="w-full object-cover h-full  hover:scale-105 hover:opacity-55 transition-all duration-500 ease-out rounded-lg" src="./images/konaldo.jpg" />

                </div>

            </div>




            <div className='w-1/2 text-white flex flex-col justify-center '>

                <h1 className='font-bold mb-4 text-md'>Generate images with peace of mind</h1>
                <p className='font-base text-xs '>Use the Picsart AI Image Generator with confidence, knowing that generated images are reviewed to help ensure that they meet our safety and community guidelines.</p>

            </div>

        </div>






        {/* question box  */}


        <div className='hidden w-full  h-[520px] sm:flex py-4 justify-center'>

            <div className='w-1/2 py-2 bg-zinc-800 px-3 text-white'>


                <div className=' flex justify-center pb-4 rounded-lg mb-2 border-b-4 border-zinc-700 font-bold text-3xl'>Question Related to <span>TextCraft</span> </div>

                <div className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}>

                    <div className='font-extrabold mb-4 flex justify-between text-xl'> What is TextCraft?<span className='mr-4 cursor-pointer active:text-zinc-500' onClick={() => { if (isslide == false) { setslide("prompt") } else { setslide(false) }; }}><img onClick={() => { if (isdrop == false) { setdrop("1") } else { setdrop(false) } }} className={`w-10  invert ${isdrop == "1" ? "rotate-180" : ""} transfrom-all duration-500 ease-out `} src="./images/newd.svg" /></span></div>
                    <p onClick={() => { if (isslide == false) { setslide("prompt") } else { setslide(false); setdrop(false) } }} className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${isslide == "prompt" ? "block" : "hidden"} text-md`}>TextCraft is an online tool built with the MERN stack that uses generative AI to create unique images from text prompts. It's designed to make image creation simple and accessible for everyone, from students to creatives.</p>

                </div>

                <div className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}>

                    <div className='font-extrabold mb-4 flex justify-between text-xl'>Generate images with peace of mind <span className='mr-4 cursor-pointer active:text-zinc-500' onClick={() => { if (isslide == false) { setslide("prompt2") } else { setslide(false) }; }}><img onClick={() => { if (isdrop == false) { setdrop("2") } else { setdrop(false) } }} className={`w-10  invert ${isdrop == "2" ? "rotate-180" : ""} transfrom-all duration-500 ease-out `} src="./images/newd.svg" /></span></div>
                    <p onClick={() => { if (isslide == false) { setslide("prompt2") } else { setslide(false); setdrop(false) } }} className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${isslide == "prompt2" ? "block" : "hidden"} text-md`}>Use the Picsart AI Image Generator with confidence, knowing that generated images are reviewed to help ensure that they meet our safety and community guidelines.</p>

                </div>

                <div className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}>

                    <div className='font-extrabold mb-4 flex justify-between text-xl'>How do I use TextCraft?<span className='mr-4 cursor-pointer active:text-zinc-500' onClick={() => { if (isslide == false) { setslide("prompt3") } else { setslide(false) }; }}><img onClick={() => { if (isdrop == false) { setdrop("3") } else { setdrop(false) } }} className={`w-10  invert ${isdrop == "3" ? "rotate-180" : ""} transfrom-all duration-500 ease-out `} src="./images/newd.svg" /></span></div>
                    <p onClick={() => { if (isslide == false) { setslide("prompt") } else { setslide(false); setdrop(false) } }} className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${isslide == "prompt3" ? "block" : "hidden"} text-md`}>Just type a detailed text prompt describing the image you want, then click “Generate.” The AI processes your input and generates an image based on your description, which you can then view, download, or share.</p>

                </div>

                <div className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}>

                    <div className='font-extrabold mb-4 flex justify-between text-xl'>What kind of images can I create?<span className='mr-4 cursor-pointer active:text-zinc-500' onClick={() => { if (isslide == false) { setslide("prompt4") } else { setslide(false) }; }}><img onClick={() => { if (isdrop == false) { setdrop("4") } else { setdrop(false) } }} className={`w-10  invert ${isdrop == "4" ? "rotate-180" : ""} transfrom-all duration-500 ease-out `} src="./images/newd.svg" /></span></div>
                    <p onClick={() => { if (isslide == false) { setslide("prompt") } else { setslide(false); setdrop(false) } }} className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${isslide == "prompt4" ? "block" : "hidden"} text-md`}>You can create a wide range of images, including abstract art, realistic scenes, fantasy landscapes, and illustrations. The more detailed your prompt, the better the AI can customize the output to your vision.</p>

                </div>




            </div>
        </div>



        {/* mobile box  */}



        <div className='sm:hidden w-full  h-[560px] items-center flex py-4 justify-center'>

            <div className='w-4/5 py-2 px-3 rounded-lg h-fit text-white bg-zinc-800'>


                <div className=' flex justify-center mb-3 py-4 border-b-4 border-zinc-700 font-bold text-lg'>Question Related to <span>TextCraft</span> </div>

                <div className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}>

                    <div className='font-extrabold mb-4 flex justify-between text-sm'>What is TextCraft?<span className='mr-4 cursor-pointer active:text-zinc-500' onClick={() => { if (isslide == false) { setslide("prompt") } else { setslide(false) }; }}><img onClick={() => { if (isdrop == false) { setdrop("1") } else { setdrop(false) } }} className={`w-10  invert ${isdrop == "1" ? "rotate-180" : ""} transfrom-all duration-500 ease-out `} src="./images/newd.svg" /></span></div>
                    <p onClick={() => { if (isslide == false) { setslide("prompt") } else { setslide(false); setdrop(false) } }} className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${isslide == "prompt" ? "block" : "hidden"} text-xs`}>TextCraft is an online tool built with the MERN stack that uses generative AI to create unique images from text prompts. It's designed to make image creation simple and accessible for everyone, from students to creatives</p>

                </div>

                <div className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}>

                    <div className='font-extrabold mb-4 flex justify-between text-sm'>How do I use TextCraft?<span className='mr-4 cursor-pointer active:text-zinc-500' onClick={() => { if (isslide == false) { setslide("prompt2") } else { setslide(false) }; }}><img onClick={() => { if (isdrop == false) { setdrop("2") } else { setdrop(false) } }} className={`w-10  invert ${isdrop == "2" ? "rotate-180" : ""} transfrom-all duration-500 ease-out `} src="./images/newd.svg" /></span></div>
                    <p onClick={() => { if (isslide == false) { setslide("prompt2") } else { setslide(false); setdrop(false) } }} className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${isslide == "prompt2" ? "block" : "hidden"} text-xs`}>Just type a detailed text prompt describing the image you want, then click “Generate.” The AI processes your input and generates an image based on your description, which you can then view, download, or share.

</p>

                </div>

                <div className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}>

                    <div className='font-extrabold mb-4 flex justify-between text-sm'>What kind of images can I create?<span className='mr-4 cursor-pointer active:text-zinc-500' onClick={() => { if (isslide == false) { setslide("prompt3") } else { setslide(false) }; }}><img onClick={() => { if (isdrop == false) { setdrop("3") } else { setdrop(false) } }} className={`w-10  invert ${isdrop == "3" ? "rotate-180" : ""} transfrom-all duration-500 ease-out `} src="./images/newd.svg" /></span></div>
                    <p onClick={() => { if (isslide == false) { setslide("prompt") } else { setslide(false); setdrop(false) } }} className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${isslide == "prompt3" ? "block" : "hidden"} text-xs`}>You can create a wide range of images, including abstract art, realistic scenes, fantasy landscapes, and illustrations. The more detailed your prompt, the better the AI can customize the output to your vision.</p>

                </div>

                <div className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}>

                    <div className='font-extrabold mb-4 flex justify-between text-sm'>How long does image generation take?
                    <span className='mr-4 cursor-pointer active:text-zinc-500' onClick={() => { if (isslide == false) { setslide("prompt4") } else { setslide(false) }; }}><img onClick={() => { if (isdrop == false) { setdrop("4") } else { setdrop(false) } }} className={`w-10  invert ${isdrop == "4" ? "rotate-180" : ""} transfrom-all duration-500 ease-out `} src="./images/newd.svg" /></span></div>
                    <p onClick={() => { if (isslide == false) { setslide("prompt") } else { setslide(false); setdrop(false) } }} className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${isslide == "prompt4" ? "block" : "hidden"} text-xs`}>Generating an image usually takes a few seconds to a minute, depending on the complexity of your prompt and current server demand. We strive to provide quick results for all users.</p>

                </div>






            </div>
        </div>







    </>
    )
}

export default Extra2