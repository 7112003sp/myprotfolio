import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
const Tilt = (reference) => {
    useGSAP(function(){
        gsap.from("#sample",{
          transform:'rotateX(-90deg)',
          opacity:0,
          duration:4
    
        })
       })
      return (
        <div ref={reference.abc} id='tiltdiv'  className=' mt-40 ml-12'><h1 className=' text-[4.3vw] leading-[4vw] uppercase font-[prot2]'>I Am a
        <span className='text-gray-300 ' id='sample'> Full Stack</span></h1>
        <h1 className=' text-[8.2vw]  leading-[7vw] font-[prot2] font-bold drop-shadow-lg '  >DEVELOPER</h1>
       <h1 className=' text-[4.3vw] uppercase font-[prot2] '>available for Hire</h1></div>
      )
    }


export default Tilt