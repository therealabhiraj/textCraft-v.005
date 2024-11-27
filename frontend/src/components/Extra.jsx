import React, { useState } from 'react';

const Extra = () => {
    const [hovered, setHovered] = useState(null); // Track the active hover

    return (
        <>
        <div className="hidden sm:flex w-full  px-2 py-3   h-full  gap-4 items-center justify-center">

            <div className=' w-1/3 h-[410px] border-4 border-zinc-700 rounded-xl flex items-center'>
                    <video className='w-full h-[410px]  object-cover rounded-lg' src='./images/champ.mp4' autoPlay muted playsInline loop />
            </div>
            
                <div className="w-1/3 h-[410px]  px-6 py-10 bg-zinc-800 border-2 rounded-lg border-zinc-700 text-white">
                    <div className="font-extrabold px-2 py-4 text-3xl">How to generate AI images</div>

                    {/* Steps */}
                    <div
                        onMouseEnter={() => setHovered('prompt')}
                        onMouseLeave={() => setHovered(null)}
                        className="text-xl hover:h-24 hover:border-zinc-700 hover:bg-zinc-900 mt-2 mb-2 hover:scale-105 hover:translate-x-6 transition-all cursor-pointer duration-500 ease-out hover:border-4 px-3 py-2 rounded-xl font-bold"
                    >
                        What a Prompt
                        <p
                            className={`text-base py-2 ${
                                hovered === 'prompt' ? 'block' : 'hidden'
                            } font-light`}
                        >
                            Briefly describe your image idea in the prompt box above.
                        </p>
                    </div>

                    <div
                        onMouseEnter={() => setHovered('generate')}
                        onMouseLeave={() => setHovered(null)}
                        className="text-xl hover:h-24 hover:border-zinc-700 hover:bg-zinc-900 mt-2 mb-2 hover:scale-105 hover:translate-x-6 transition-all cursor-pointer duration-500 ease-out hover:border-4 px-3 py-2 rounded-xl font-bold"
                    >
                        Generate AI Images
                        <p
                            className={`text-base py-2 ${
                                hovered === 'generate' ? 'block' : 'hidden'
                            } font-light`}
                        >
                            Briefly describe your image idea in the prompt box above.
                        </p>
                    </div>

                    <div
                        onMouseEnter={() => setHovered('customize')}
                        onMouseLeave={() => setHovered(null)}
                        className="text-xl hover:h-24 hover:border-zinc-700 hover:bg-zinc-900 mt-2 mb-2 hover:scale-105 hover:translate-x-6 transition-all cursor-pointer duration-500 ease-out hover:border-4 px-3 py-2 rounded-xl font-bold"
                    >
                        Customize
                        <p
                            className={`text-base py-2 ${
                                hovered === 'customize' ? 'block' : 'hidden'
                            } font-light`}
                        >
                            Select the “Generate images” button to Create the images etc.
                        </p>
                    </div>

                    <div
                        onMouseEnter={() => setHovered('download')}
                        onMouseLeave={() => setHovered(null)}
                        className="text-xl hover:h-24 hover:border-zinc-700 hover:bg-zinc-900 mt-2 mb-2 hover:scale-105 hover:translate-x-6 cursor-pointer transition-all duration-500 ease-out hover:border-4 px-3 py-2 rounded-xl font-bold"
                    >
                        Download
                        <p
                            className={`text-base py-2 ${
                                hovered === 'download' ? 'block' : 'hidden'
                            } font-light`}
                        >
                            Use the Export button to download and share your designs.
                        </p>
                    </div>
                </div>




            </div>






{/* Mobile View */}


            <div className="sm:hidden w-full min-h-[320px]  px-2 py-4  flex gap-1 items-center justify-center">

            <div className=' w-1/2  min-h-[300px] border-4 border-zinc-700 rounded-xl flex items-center'>
                    <video className='w-full min-h-[300px]  object-cover rounded-lg' src='./images/champ.mp4' autoPlay muted playsInline loop ></video>
            </div>
            
                <div className="w-1/2 h-[310px] px-2 py-2 bg-zinc-800 border-2 rounded-lg border-zinc-800 text-white">
                    <div className="font-extrabold  text-md">How to generate AI images</div>

                    {/* Steps */}
                    <div
                        onMouseEnter={() => setHovered('prompt')}
                        onMouseLeave={() => setHovered(null)}
                        className="text-sm hover:h-24 hover:border-zinc-700 hover:bg-zinc-900 mt-2 mb-2 hover:scale-105 hover:translate-x-2 transition-all cursor-pointer duration-500 ease-out hover:border-4 px-3 py-2 rounded-xl font-bold"
                    >
                        What a Prompt
                        <p
                            className={`text-xs py-2 ${
                                hovered === 'prompt' ? 'block ' : 'hidden'
                            } font-light`}
                        >
                            Briefly describe your image idea in the prompt box above.
                        </p>
                    </div>

                    <div
                        onMouseEnter={() => setHovered('generate')}
                        onMouseLeave={() => setHovered(null)}
                        className="text-sm hover:h-24 hover:border-zinc-700 hover:bg-zinc-900 mt-2 mb-2 hover:scale-105 hover:translate-x-2 transition-all cursor-pointer duration-500 ease-out hover:border-4 px-3 py-2 rounded-xl font-bold"
                    >
                        Generate AI Images
                        <p
                            className={`text-xs py-2 ${
                                hovered === 'generate' ? 'block' : 'hidden'
                            } font-light`}
                        >
                            Briefly describe your image idea in the prompt box above.
                        </p>
                    </div>

                    <div
                        onMouseEnter={() => setHovered('customize')}
                        onMouseLeave={() => setHovered(null)}
                        className="text-sm hover:h-24 hover:border-zinc-700 hover:bg-zinc-900 mt-2 mb-2 hover:scale-105 hover:translate-x-2 transition-all cursor-pointer duration-500 ease-out hover:border-4 px-3 py-2 rounded-xl font-bold"
                    >
                        Customize
                        <p
                            className={`text-xs py-2 ${
                                hovered === 'customize' ? 'block' : 'hidden'
                            } font-light`}
                        >
                            Select the “Generate images” button to Create the images etc.
                        </p>
                    </div>

                    <div
                        onMouseEnter={() => setHovered('download')}
                        onMouseLeave={() => setHovered(null)}
                        className="text-sm hover:h-24 hover:border-zinc-700 hover:bg-zinc-900 mt-2 mb-2 hover:scale-105 hover:translate-x-2 cursor-pointer transition-all duration-500 ease-out hover:border-4 px-3 py-2 rounded-xl font-bold"
                    >
                        Download
                        <p
                            className={`text-xs py-2 ${
                                hovered === 'download' ? 'block' : 'hidden'
                            } font-light`}
                        >
                            Use the Export button to download and share your designs.
                        </p>
                    </div>
                </div>




            </div>
        </>
    );
};

export default Extra;
