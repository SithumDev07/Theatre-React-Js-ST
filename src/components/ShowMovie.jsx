import React from 'react'
import data from '../data';
import { PlayIcon } from '@heroicons/react/outline'

function ShowMovie({ match }) {
    const dataExtracted = data.find((item) => item.id == match.params.id);
    console.log(dataExtracted.background);
    return (
        <div className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-opacity-50' style={{ background: `url('${dataExtracted.background}')` }}>
            <div className='container mx-auto flex'>
                <div className='flex-1 mt-8'>
                    <h1 className='text-gray-50 uppercase tracking-wide text-8xl font-extrabold'>{dataExtracted.title}</h1>
                    <p className='text-gray-300 text-xl font-bold uppercase tracking-wide mb-8 mt-2'>{dataExtracted.released} <span className='text-red-500'>|</span> {dataExtracted.genre.map((item) => `${item}, `)}</p>
                    <div className='flex items-center text-gray-50 text-xl'>
                        <h2 className='uppercase tracking-wider mr-5 font-semibold'>The Story</h2>
                        <p className='flex-1'>{dataExtracted.description}</p>
                    </div>
                    <div className='flex items-center text-gray-50 text-xl font-semibold mt-6'>
                        <h2 className='mr-5 uppercase tracking-wider'>Trailers</h2>
                        <div className='flex-1 h-56 grid grid-cols-4 gap-6 2xl:gap-8'>
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/f7/Spider-Man_No_Way_Home_logo.jpg" alt={dataExtracted.photoURI} className='mr-3 w-full h-full object-contain hover:opacity-75 transition ease-in-out duration-150' />
                            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d14be704c687b00085af34e%2F-Spider-Man--Far-From-Home-%2F960x0.jpg%3Ffit%3Dscale" alt={dataExtracted.photoURI} className='mr-3 w-full h-full object-contain hover:opacity-75 transition ease-in-out duration-150' />
                            <img src="https://twistedvoxel.com/wp-content/uploads/2019/01/spider-man-far-from-home-trailer-official.jpg" alt={dataExtracted.photoURI} className='w-full h-full object-contain hover:opacity-75 transition ease-in-out duration-150' />
                        </div>
                    </div>
                </div>
                <div className='flex items-end text-gray-50 text-2xl uppercase tracking-wider font-semibold mb-6'>
                    <div className='flex items-center' style={{ userSelect: 'none' }}>
                        <button className='bg-red-600 shadow-9xl rounded-full w-24 h-24 flex items-center justify-center mr-8 transform transition duration-300 hover:scale-110 active:scale-75'>
                            <svg
                                className='w-10 h-10 text-gray-100'
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                    fill="currentColor"
                                />
                                <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                            </svg>
                        </button>
                        Watch Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowMovie
