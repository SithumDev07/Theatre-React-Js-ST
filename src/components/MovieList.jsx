import React, { useEffect } from 'react'
import MovieItem from './MovieItem'
import { Link } from 'react-router-dom'
import axios from '../axios/axios';
import { useState } from 'react';

function MovieList() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            await axios.get("/movies").then(response => {
                setMovies(response.data);
                setLoading(false);
                return response;
            });
        }
        fetchMovies();
    }, [])

    return (
        <>
            {
                !loading ? (
                    <div className='container mx-auto grid xl:grid-cols-4 2xl:grid-cols-5 xl:gap-6 2xl:gap-8 h-full'>
                        {movies.filter((_, index) => index < 20).map((item, _) => (
                            <Link to={`/movie/${item.id}`} key={item.id}>
                                <MovieItem title={item.title} imageURI={item.photoURI} duration={item.duration} releasedDate={item.released} rating={item.rating} genre={item.genres} />
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
