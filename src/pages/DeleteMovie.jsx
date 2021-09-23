import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import MovieItem from '../components/MovieItem'
import axios from '../axios/axios';

function DeleteMovie({ match }) {

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovie(id) {
            await axios.get(`/movies/${id}`)
                .then(response => {
                    setMovie(response.data);
                    setLoading(false);
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        fetchMovie(match.params.id)
    }, [match.params.id])

    if (loading) {
        return (
            <div className='w-screen h-screen flex items-center justify-center text-7xl tracking-widest font-extrabold uppercase text-gray-400'>
                Loading...
            </div>
        )
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='container mx-auto'>
                <MovieItem title={movie.title} imageURI={movie.photoURI} duration={movie.duration} releasedDate={movie.released} rating={movie.rating} genre={movie.genres} />
            </div>
        </div>
    )
}

export default DeleteMovie
