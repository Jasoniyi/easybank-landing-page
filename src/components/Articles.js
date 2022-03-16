import React from 'react'
import { articles } from '../data/articles'

const Articles = () => {
  return (
    <>
      <div className="py-16 md:px-28 bg-Very-Light-Gray px-8">
        <div className="mt-8 text-4xl text-center md:text-left">Latest Articles</div>
        <div className='py-16 flex md:flex-row flex-col space-x-6 space-y-8 md:space-y-0'>
          {
            articles.map((blog) => (
              <div className="flex flex-col bg-easyBank-White space-y-2" key={blog.id}>
                <div className="">
                  <img src={blog.images} alt={blog.title} className="h-full rounded-t-md"/>  
                </div>
                <div className="px-6 text-xs text-Grayish-Blue">{blog.author}</div>
                <div className="px-6 hover:text-Lime-Green cursor-pointer">{blog.title}</div>
                <div className="px-6 text-sm text-Grayish-Blue pb-4">{blog.content}</div>
              </div>
            )) 
          }
        </div>
        
        
      </div>
    </>
  )
}

export default Articles