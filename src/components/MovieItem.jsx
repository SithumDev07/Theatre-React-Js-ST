import React from 'react'

function MovieItem({ title, imageURI, duration, releasedDate, rating, genre }) {
    return (
        <div className='cursor-pointer'>
            {/* https://i.redd.it/x98yj7ti6h831.jpg */}
            <div className='h-80 w-64'>
                <img src={imageURI} className='object-cover object-bottom w-full h-full hover:opacity-75 transition ease-in-out duration-150' alt="Image" />
            </div>
            <h2 className='text-gray-50 font-extrabold mt-2 text-xl'>{title}</h2>
            <p className='text-gray-50 my-3 text-sm'>{duration} | {genre.map((item) => `${item}, `)}</p>
            <p className='text-gray-50 text-sm'>Released {releasedDate}</p>
            <button className='border-opacity-70 border-2 border-red-600 px-7 py-2 uppercase text-gray-50 tracking-wide font-semibold mt-3'>Get Tickets</button>
        </div>
    )
}

export default MovieItem
