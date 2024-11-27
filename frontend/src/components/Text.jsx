import React from 'react'

const Text = () => {
    return (<>

        <div className='hidden sm:flex w-full h-[520px] bg-black  gap-4  justify-center'>

            <div className='w-1/3 text-white flex flex-col justify-center '>

                <h1 className='font-extrabold mb-4 text-4xl'>Introducing AI Image Generator</h1>
                <p className='font-medium text-xl '>Thanks to recent developments in AI, image creation has never been easier. With tools like the Picsart text-to-image generator, everybody can create images from scratch regardless of their skill and experience. All it takes is a short text prompt. Imagine the possibilities for AI-generated images: for creators and marketers looking to stand out with original content, as well as for anyone who felt held back by artistic ability. The possibilities for creative empowerment are truly endless with the AI image creator.</p>

            </div>

            <div className='w-1/3 h-full flex px-2 py-2 gap-3 '>

            <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/videoseries?list=PLX8kxDvYUXKb3lMu7i5xMP46qrrbpxIA7&autoplay=1&loop=1&controls=0" 
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay; encrypted-media; clipboard-write; accelerometer; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
</iframe>
            </div>


        </div>



        {/* mobile view */}




        <div className='sm:hidden w-full h-[320px] bg-black flex gap-3 items-center justify-center '>



            <div className='w-1/3 text-white flex flex-col justify-center '>

                <h1 className='font-bold mb-4 text-sm'>Generate images with peace of mind</h1>
                <p className='font-base text-xs '>Use the Picsart AI Image Generator with confidence, knowing that generated images are reviewed to help ensure that they meet our safety and community guidelines.</p>

            </div>


            <div className='w-1/2 flex items-center border-white px-2 py-2 gap-3 '>

                <iframe className='w-full' src='https://www.youtube-nocookie.com/embed/SBW2p4PR42U?playlist=SBW2p4PR42U&loop=1&autoplay=1&mute=1&controls=0'></iframe>


            </div>

        </div>


    </>
    )
}

export default Text