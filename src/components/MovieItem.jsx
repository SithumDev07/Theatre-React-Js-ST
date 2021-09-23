import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

function MovieItem({ title, imageURI, duration, releasedDate, rating, genre }) {
    return (
        <div className='cursor-pointer relative'>
            <div className='flex items-center absolute top-1 left-2 text-gray-50 font-bold z-10 text-xl'>
                {rating}
                <StarIcon className='ml-1 w-4 h-4 text-yellow-500' />
            </div>
            <div className='h-80 xl:w-52 2xl:w-64'>
                {/* onError={() => setImage('https://www.tibs.org.tw/images/default.jpg')} */}
                <img src={imageURI} className='object-cover object-bottom w-full h-full hover:opacity-75 transition ease-in-out duration-150' alt={title} />
            </div>
            <h2 className='text-gray-50 font-extrabold mt-2 text-xl'>{title.length < 26 ? title : title.slice(0, 21) + "..."}</h2>
            <p className='text-gray-50 my-3 text-sm'>{duration} | {genre.map((item) => `${item}, `)}</p>
            <p className='text-gray-50 text-sm'>Released {releasedDate}</p>
            <button className='border-opacity-70 border-2 border-red-600 px-7 py-2 uppercase text-gray-50 tracking-wide font-semibold mt-3 hover:bg-red-500 transform transition duration-300'>Get Tickets</button>
        </div>
    )
}

export default MovieItem
