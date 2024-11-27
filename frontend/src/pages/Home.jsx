import React from 'react'
import Footerh from '../components/Footerh'
import Headerh from '../components/Headerh'
import Section02h from '../components/Section02h'
import Section01h from '../components/Section01h'
import Extra from '../components/Extra'
import Extra2 from '../components/Extra2'
import Text from '../components/text'
import Text3 from '../components/text3'

const Home = () => {
    
  return (
    <>
       <Headerh />
    <div className=' w-full bg-zinc-900 lg:-top-28 top-[-54px] lg:h-[750px] h-[500px] relative z-20 overflow-hidden flex  justify-center items-end  '>
      <video className=" object-cover w-full  px-1 h-[500px] lg:h-[700px]  brightness-75 "src="./images/home01.mp4"   autoPlay muted playsInline loop></video>
      <Section01h/>
    </div>
      <Section02h/>
      <Extra/>
      <Text3/>
      <Text/>
      <Extra2/>
      
    
    <Footerh/>

    
    </>
  )
}

export default Home