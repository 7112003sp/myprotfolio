import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

const Bottom = () => {
  useGSAP(function(){
    gsap.from(".animatetext",{

opacity:0,
duration:5
    })
  })
   
      return (
        <div className='absolute bottom-0 w-full mb-20'><div>
          </div>
          <h2 className='animatetext font-[prot1] text-2xl'>
          MERN STACK | REACT DEVELOPER</h2>
           <h3 className='animatetext font-[prot4] text-2xl'>FULL STACK DEVELOPER </h3></div>
      )
    }

export default Bottom