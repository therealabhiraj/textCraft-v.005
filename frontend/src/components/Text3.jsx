import React from 'react'

const text3 = () => {
  return (
    <>


        <div className='hidden sm:flex w-full text-white gap-2 px-2 mt-8 mb-12 py-8 h-fit'>

            <div className='w-1/2 h-fit flex flex-col gap-1 items-center justify-center'>

                <div className='w-20'><img className='w-full' src="./images/text.png" /></div>
                <div className='w-ful font-semibold text-lg  text-center '>Create AI images with text prompts</div>
                <div className='text-center text-md'>Easily generate images with detailed text prompts in just a few seconds.</div>


            </div>


            <div className='w-1/2 h-fit flex-col gap-1 flex   items-center justify-center'>

                <div className='w-20'><img className='w-full' src="./images/pic.png" /></div>
                <div className='text-center text-lg font-semibold'>Generate images in hundreds of styles
                </div>
                <div className='text-md text-center'>Customize your images with different styles, moods, colors, and designs inspired by famous artists.</div>


            </div>



            <div className='w-1/2 h-fit flex flex-col gap-1 items-center justify-center'>

                <div className='w-20'><img className='w-full' src="./images/high.png" /></div>
                <div className='text-center text-lg font-semibold'>High-res images with incredible details
                </div>
                <div className='text-center text-md'>Generate high-quality images with up to 8K resolution for incredible details and texture.</div>


            </div>


        </div>



        {/* mobile screen */}



        <div className='w-full sm:hidden text-white gap-1 px-1 mt-5 mb-5 py-6 h-fit flex '>

            <div className='w-1/2 h-fit flex flex-col gap-2 items-center justify-center'>

                <div className='w-14'><img className='w-full' src="./images/text.png" /></div>
                <div className='w-full font-semibold text-sm  text-center '>Create AI images with prompts</div>
                <div className='text-center text-xs'>Easily generate images with detailed text prompts.</div>


            </div>


            <div className='w-1/2 h-fit flex-col gap-1 flex   items-center justify-center'>

                <div className='w-14'><img className='w-full' src="./images/pic.png" /></div>
                <div className='text-center text-sm font-semibold'>Generate images in hundreds of styles
                </div>
                <div className='text-xs text-center'>Customize your images with different styles and designs.</div>


            </div>



            <div className='w-1/2 h-fit flex flex-col gap-1 items-center justify-center'>

                <div className='w-14'><img className='w-full' src="./images/high.png" /></div>
                <div className='text-center text-sm font-semibold'>High-res images with incredible details
                </div>
                <div className='text-center text-xs'>Generate high-quality images for details and texture.</div>


            </div>


        </div>


    </>
  )
}

export default text3