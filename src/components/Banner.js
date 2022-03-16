import React from 'react'
import bck from '../images/bg-intro-desktop.svg'
import mobileBck from '../images/bg-intro-mobile.svg'
import fone from '../images/image-mockups.png'

const desktopStyles = {
  backgroundImage: `url(${bck})`,
  height: '100vh',
  width: '100vw'
}

const mobileStyles = {
  backgroundImage: `url(${mobileBck})`,
  position: "relative",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Banner = () => {
  return (
    <>
      <div className="bg-Very-Light-Gray overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row w-screen">
          <div className="flex flex-col md:mt-40 space-y-8 md:pl-32 items-center md:items-start mb-16 md:mb-0">
              <h2 className="text-5xl text-center md:text-left md:text-6xl leading-normal">Next generation digital banking</h2> 
              <div className="text-base text-Grayish-Blue w-4/5">
                Take your financial life online. Easybank accounts will
                be a one-stop-shop for spending, saving, budgeting, investing,
                and much more.
            </div>
            <button className="w-4/12 py-2 px-4 rounded-full bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-easyBank-White">Request Invite</button>
          </div> 
                        {/* desktop-banner-image */}
          <div className="hidden md:block bg-cover bg-left-bottom relative left-40 bottom-20 bg-no-repeat" style={desktopStyles}>
            <img src={fone} alt = "mockup" width = "580px" className = "relative bottom-3 left-16" /> 
          </div> 
                        {/* mobile-banner-image-start */}
          <div className="md:hidden flex justify-center" style={mobileStyles}>
          <img src={fone} alt = "mockup" width = "400px" className = "relative bottom-10 " />
          </div>
                          {/* mobile-banner-image-end */}
        </div>  
      </div>
    </>
  )
}

export default Banner;