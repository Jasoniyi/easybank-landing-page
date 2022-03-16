import React from 'react'
import { data } from '../data/data'

const About = () => {
  return (
    <div className="bg-Light-Grayish-Blue md:-mt-20">
      <div className="flex flex-col py-20 md:px-28 space-y-8 px-6 items-center md:items-start ">
        <div className='text-bold md:text-4xl text-3xl'>Why Chose Easybank?</div>
        <div className='text-Grayish-Blue md:w-2/4 text-base'>We leverage Open Banking to turn your bank account into your financial Hub.
          Control your finances like never before.
        </div>
        <div className='flex md:flex-row md:space-x-24 md:items-start md:py-4 flex-col'>
          {
            data.map((item) => (
              <div className='flex space-y-6 flex-col items-center py-4' key={item.id}>
                <div>
                  <img src={item.image} alt='about' width="70" />
                </div>
                <div className='text-lg font-medium'>{item.title}</div>
                <div className='text-Grayish-Blue text-sm text-center md:text-left'>{item.content}</div>
              </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default About