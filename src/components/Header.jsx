import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    const openResume = () => {
        window.open("https://drive.google.com/file/d/1QeNsFcnlUmG_HaneBTiCd0ewfOuR1v-4/view", "_blank", "width=800,height=600");
      };
    
      return (
        <div className="fixed w-full z-10 py-24 px-24 flex items-center justify-end">
          <button onClick={openResume} className="bg-black px-8 py-2 border-4 text-2xl hover:bg-gray-500 rounded-full">
            Hire Me
          </button>
          <i className="ri-more-2-fill text-4xl ml-1"></i>
        </div>
      );
    };


export default Header