import React from 'react'

const Modal = () => {
  return (
    <div className="absolute w-full h-screen top-0 left-0 modal-body z-10">
        <div className=" bg-white w-2/3 mx-20 py-6 modal-content-animation">
            <ul className="flex flex-col items-center space-y-8 text-lg font-semibold">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
        </div>
    </div>
  )
}

export default Modal