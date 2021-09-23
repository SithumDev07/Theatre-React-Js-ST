import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import MovieItem from '../components/MovieItem'
import axios from '../axios/axios';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'
import { TrashIcon, ExclamationIcon, XIcon } from '@heroicons/react/outline'
import { Redirect } from 'react-router';

function DeleteMovie({ match }) {

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true);
    const [isPopupShown, setIsPopupShown] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [customError, setCustomError] = useState();

    const deleteHandler = () => {
        setIsPopupShown(true);
    }

    const closePopup = () => {
        setIsPopupShown(false);
    }

    async function deleteMovie() {
        await axios.delete(`/movies/${match.params.id}`)
            .then(response => {
                console.log(response);
                setRedirect(true);
                return response;
            })
            .catch(function (error) {
                if (error.response) {
                    setCustomError('Item Not Found');
                } else if (error.request) {
                    setCustomError('Internal Server Error');
                } else {
                    setCustomError("Can't delete item");
                }
            })
    }

    useEffect(() => {
        async function fetchMovie(id) {
            await axios.get(`/movies/${id}`)
                .then(response => {
                    setMovie(response.data);
                    setLoading(false);
                    return response;
                })
                .catch(function (error) {
                    if (error.response) {
                        // * Request made and server responded
                        setCustomError('Item Not Found');
                    } else if (error.request) {
                        // * request made but server not responded
                        setCustomError('Internal Server Error');
                    } else {
                        setCustomError('Just an Error');
                    }
                });
        }
        fetchMovie(match.params.id)
    }, [match.params.id])

    if (redirect) {
        return (
            <Redirect to="/" />
        )
    }

    if (customError !== undefined) {
        return (
            <div className='w-screen h-screen flex items-center justify-center text-7xl tracking-widest font-light uppercase text-gray-400'>
                {customError}
            </div>
        )
    }

    if (loading) {
        return (
            <div className='w-screen h-screen flex items-center justify-center text-7xl tracking-widest font-extrabold uppercase text-gray-400'>
                Loading...
            </div>
        )
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='container mx-auto flex items-center justify-center h-full relative'>
                {
                    isPopupShown ? (
                        <div className='alert absolute w-1/3 bg-gray-50 flex rounded-lg z-30 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-gray-900 px-8 py-5'>
                            <div>
                                <ExclamationIcon className='w-14 h-14 text-gray-100 rounded-full p-3 bg-red-500 bg-opacity-80' />
                            </div>
                            <div className='flex-1 ml-5'>
                                <div className='flex justify-between items-start'>
                                    <h2 className='text-xl font-semibold text-gray-800'>Attention Required</h2>
                                    <button onClick={closePopup}>
                                        <XIcon className='w-6 h-6 text-gray-500' />
                                    </button>
                                </div>
                                <p className='text-sm text-gray-400 mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum quod quas, sunt quo necessitatibus eligendi.</p>
                                <div className='flex justify-end items-center'>
                                    <button className='px-6 py-2 text-gray-600 border border-gray-300 bg-transparent rounded-md' onClick={closePopup}>
                                        Cancel
                                    </button>
                                    <button className='px-6 py-2 text-gray-100 border bg-red-600 bg-opacity-80 rounded-md ml-3 hover:bg-opacity-100 transform transition duration-200' onClick={deleteMovie}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null
                }

                <div className='border p-5'>
                    <h3 className='tracking-wider text-gray-50 uppercase text-2xl mb-3 font-semibold'>Preview</h3>
                    <MovieItem title={movie.title} imageURI={movie.photoURI} duration={movie.duration} releasedDate={movie.released} rating={movie.rating} genre={movie.genres} />
                </div>
                <div className='text-gray-100 ml-10 text-xl'>
                    <p>This movie will be permenantly deleted.</p>
                    <div className='flex items-center justify-between text-base mt-8'>
                        <button className='flex items-center'>
                            <ArrowNarrowLeftIcon className='w-6 h-6 text-gray-50 mr-3' />
                            Go back
                        </button>
                        <button className='flex items-center px-5 py-3 bg-red-500' onClick={deleteHandler}>
                            Delete
                            <TrashIcon className='w-6 h-6 text-gray-50 ml-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteMovie
