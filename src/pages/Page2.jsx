import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react"; 

const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger)
  
    useGSAP(function(){
     gsap.from(".rotatetext",{
       transform:'rotateX(-80deg)',
       opacity:0,
       duration:1,
       stagger:1,
       scrollTrigger:{
         trigger:'.rotatetext',
        
         start:'top 70%'
         ,end:'top -240%'
         ,scrub:2
       }
 
     })
    })
    
   return (
     <div id='section2' className='text-center p-10  text-black shadow-white ' >
       <div>
         <h3 className=''>© surya 2025 | designed and developed
         </h3>
       </div>
     <div className='rotatetext'>        <h3 className='text-[33vw] font-[prot5] text-center uppercase  leading-[30vw] mt-20'>Bringing</h3>
     </div>
     <div className='rotatetext'>
         <h3 className='text-[33vw] font-[prot5] text-center uppercase leading-[30vw]'>ideas</h3>
     </div>
     <div className='rotatetext'>
         <h3 className='text-[33vw] font-[prot5] text-center uppercase leading-[30vw]'>to life</h3>
     </div>
     <div className='rotatetext'>
         <h3 className='text-[33vw] font-[prot5] text-center uppercase leading-[30vw]'>with</h3>
     </div>
     <div className='rotatetext'>
         <h3 className='text-[33vw] font-[prot5] text-center uppercase leading-[30vw]'>full-stack</h3>
     </div>
     
     <div className='rotatetext  '>
       
         <h3 className='text-[33vw] font-[prot5]  text-center uppercase leading-[30vw]'>development</h3>
     </div>
     <div className="h-[2px] w-1/2 bg-white mt-10 mx-auto"></div>
 
     </div>
     
   )
 }
 


export default Page2