import React from 'react'
import { FilmIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <div className='w-full h-auto py-16'>
            <div className='w-3/4 h-full flex flex-col mx-auto mt-10'>
                <h3 className='ml-1 uppercase tracking-widest font-bold text-red-700' style={{ userSelect: 'none' }}>Now Playing</h3>
                <h1 className='text-gray-50 text-8xl uppercase font-light' style={{ userSelect: 'none' }}><span className='font-extrabold tracking-wide'>Now</span> Playing</h1>
                <button className='ml-1 uppercase flex items-center mt-8 bg-red-500 px-3 py-3 self-start text-gray-100 font-semibold tracking-wide'>
                    <FilmIcon className='w-6 h-6 mr-2' />
                    View Showtimes
                </button>
            </div>
        </div>
    )
}

export default Header
