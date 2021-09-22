import React from 'react'
import MovieItem from './MovieItem'
import { Link } from 'react-router-dom'
import data from '../data'

function MovieList() {
    return (
        <>
            {
                data.length > 0 ? (
                    <div className='container mx-auto grid grid-cols-5 gap-8'>
                        {data.filter((_, index) => index < 20).map((item, _) => (
                            <Link to={`/movie/${item.id}`} key={item.id}>
                                <MovieItem title={item.title} imageURI={item.photoURI} duration={item.duration} releasedDate={item.released} rating={item.rating} genre={item.genre} />
                            </Link>
                        ))}
                    </div>

                ) : (<div className='w-full h-full flex items-center justify-center'>
                    <h1 className='text-5xl text-gray-50 uppercase tracking-wider font-semibold'>No Results Found</h1>
                </div>)
            }
        </>
    )
}

export default MovieList
