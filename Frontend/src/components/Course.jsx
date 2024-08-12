import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 text-center items-center justify-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta repellat debitis rerum reprehenderit dolores eos, possimus hic error quam non nihil? Explicabo, ducimus. Ut sint nostrum temporibus expedita fugiat ipsam, consectetur illum odio nam, praesentium quam a sapiente possimus nulla labore et? Saepe, ipsum unde totam rerum quis asperiores?
            </p>
            <Link to="/">
            <button className= 'bg-pink-500 text-white hover:bg-pink-700 rounded-md px-4 py-2 mt-6'>Back</button>

            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {list.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Course