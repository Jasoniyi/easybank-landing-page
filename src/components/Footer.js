import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pininterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className="bg-Dark-Blue md:px-28 py-10 flex md:justify-between flex-col md:flex-row ">
      <div className="flex justify-between md:gap-32 flex-col md:flex-row space-y-6 md:space-y-0 items-center">
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="bg-white" />
          <div className="flex justify-between space-x-3 pt-8">
            <img src={facebook} alt='facebook' />
            <img src={youtube} alt='youtube' />
            <img src={twitter} alt='twitter' />
            <img src={pininterest} alt='pininterest' />
            <img src={instagram} alt='instagram' />
          </div>
        </div>
        <div className="">
          <ul className="text-sm text-easyBank-White text-center md:text-left">
            <li>About Us</li>
            <li className="py-2">Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="">
          <ul className="text-sm text-easyBank-White text-center md:text-left">
            <li>Careers</li>
            <li className="py-2">Support</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col text-sm items-center space-y-4 mt-8 md:mt-0 md:space-y-0">
        <button className="w-2/5 md:w-4/5 py-2 rounded-full bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-easyBank-White">Request Invite</button>
        <p className="text-Grayish-Blue md:pt-5">&copy;Easybank.All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer