import React from 'react'

const Aboutme = () => {
  
    return (
        <div className=' h-screen p-10'>
            <div className='bg-[url(bg.jpg)] bg-cover  h-full w-full rounded-[50px]'>
              <div className='pt-10 pl-16'>
            <h3  className=" uppercase font-[prot] font-bold text-[10vh] mb-4 text-blue-400 drop-shadow-lg">
                About Me
              </h3>
              </div>
              <p className="max-w-2xl text-[2vw] text-white leading-[55px] m-5 top-0 ml-14">
              Hi, I'm <span className="font-bold text-emerald-200">B. Surya Prakash</span>, a passionate 
              <span className="text-emerald-200"> Full-Stack Web Developer</span>. I specialize in crafting 
              responsive, user-friendly web applications with modern technologies like 
              <span className="text-blue-400"> React</span>, <span className="text-green-300">Node.js</span>, and <span id='textcolor' className="text-cyan-400">Tailwind CSS</span>. 
              With a keen eye for design and a love for problem-solving, I build digital 
              experiences that are both functional and engaging. Let’s create something amazing!
            </p>
        </div>
        </div>
      )
    }
    

export default Aboutme