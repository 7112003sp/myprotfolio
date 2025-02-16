
import React, { useRef, useState } from 'react'
import Tilt from '../components/Tilt'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

import Bottom from '../components/Bottom'

const Page = () => {
  const id = useRef(null)

  const [valX, setvalX] = useState(0)
  const [valY, setvalY] = useState(0)
  const mousemoving=(e)=>{
   
    setvalX((e.clientX-id.current.getBoundingClientRect().x-id.current.getBoundingClientRect().width/2)/70)
    setvalY(-(e.clientY-id.current.getBoundingClientRect().y-id.current.getBoundingClientRect().height/2)/20)
  }

  useGSAP(function(){
    gsap.to(id.current,{
      transform:`rotateX(${valY}deg) rotateY(${valX}deg)`,
      duration:5,
      ease:'power4.out(1,0.3)'
      
    })
  },[valX,valY])
 
  return (
    <div onMouseMove={(e)=>{
mousemoving(e)
    }}className='h-screen bg-black relative p-7 '>
        <div  id='page-in' className='bg-[url(bg.jpg)] relative    shadow-2xl shadow-white bg-cover h-full rounded-[50px] w-full p-10'>
        <Tilt abc={id}/>
       
        
       
       <Bottom/>
 

        </div>
    </div>
  )
}
  

export default Page