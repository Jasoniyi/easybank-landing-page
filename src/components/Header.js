import React, {useState} from 'react'
import logo from '../images/logo.svg'
import menuIcon from '../images/icon-hamburger.svg'
import closeIcon from '../images/icon-close.svg'

import Modal from "./Modal"

const Header = () => {
  const [showMenu, setShowMenu ] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(true)
  }

  const handleMenuClose = () => {
    setShowMenu(false)
  }
 
  return (
    <>
      <div className="flex justify-around py-4 bg-easyBank-White drop-shadow-md items-center">
        <div className="">
          <img src={logo} alt='logo' />  
        </div>

        {/* mobile-screen */}
        {
          showMenu ? 

          <button className="md:hidden" onClick={handleMenuClose} >
          <img src={closeIcon} width='20px' alt='' className="transition ease-in-out delay-150" /> 
        </button> : 
        
        ( <button className="md:hidden" onClick={handleMenuClick}>
        <img src={menuIcon} width='30px' alt='' className="transition ease-in-out delay-150" /> 
      </button>)
        }

      
        

        {/* end-mobile-screen */}

        <div className="hidden md:block">
          <ul className="flex flex-row space-x-6 ">
          <li className="cursor-pointer hover:text-Lime-Green">Home</li>
          <li className="cursor-pointer hover:text-Lime-Green">About</li>
          <li className="cursor-pointer hover:text-Lime-Green">Contact</li>
          <li className="cursor-pointer hover:text-Lime-Green">Blog</li>
          <li className="cursor-pointer hover:text-Lime-Green">Careers</li>  
          </ul>  
        </div>
        <button className="hidden md:block py-2 px-4 rounded-full bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-easyBank-White">Request Invite</button>
      </div>  

        {
          showMenu && <div className="w-full h-full relative"><Modal /></div>
        }
        
    </>
  )
}

export default Header