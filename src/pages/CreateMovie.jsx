import React, { useEffect, useState } from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import MovieItem from '../components/MovieItem';
import axios from '../axios/axios';
import { Redirect } from 'react-router';

function CreateMovie({ match }) {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [background, setBackground] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [released, setReleased] = useState("");
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [customError, setCustomError] = useState();
    const [movie, setMovie] = useState({
        genres: []
    })

    async function PostHandler() {
        await axios.post("/movies", {
            title: title,
            description: description,
            photoURI: image,
            duration: duration,
            released: released,
            rating: parseFloat(rating),
            genres: genre,
            backgroundImageURI: background
        }).then(response => {
            setRedirect(true);
        }).catch(function (error) {
            if (error.response) {
                setCustomError("Can't create movie");
            } else if (error.request) {
                setCustomError('Internal Server Error');
            } else {
                setCustomError("Can't create movie");
            }
        })
    }

    async function UpdateHandler() {
        await axios.patch(`/movies/${match.params.id}`, {
            title: title.length === 0 ? movie.title : title,
            description: description.length === 0 ? movie.description : description,
            photoURI: image.length === 0 ? movie.photoURI : image,
            duration: duration.length === 0 ? movie.duration : duration,
            released: released.length === 0 ? movie.released : released,
            rating: parseFloat(rating) === 0 ? movie.rating : parseFloat(rating),
            genres: genre.length === 0 ? movie.genres : genre,
            backgroundImageURI: background.length === 0 ? movie.backgroundImageURI : background
        })
            .then(response => {
                setRedirect(true);
            })
            .catch(function (error) {
                if (error.response) {
                    setCustomError("Can't create movie");
                } else if (error.request) {
                    setCustomError('Internal Server Error');
                } else {
                    setCustomError("Can't create movie");
                }
            })
    }

    useEffect(() => {
        if (match.params.id !== undefined) {
            async function fetchMovieData(id) {
                await axios.get(`/movies/${id}`)
                    .then(response => {
                        setMovie(response.data);
                    })
                    .catch(function (error) {
                        if (error.response) {
                            setCustomError("Can't create movie");
                            setRedirect(true);
                        } else if (error.request) {
                            setCustomError('Internal Server Error');
                        } else {
                            setCustomError("Can't create movie");
                        }
                    })
            }
            fetchMovieData(match.params.id);
        }
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

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='container mx-auto grid grid-cols-3'>
                <div className='pr-6'>
                    <h3 className='uppercase text-2xl text-gray-100 font-semibold tracking-wider mb-3' style={{ userSelect: 'none' }}>Preview</h3>
                    <MovieItem title={title.length == 0 ? (movie.title != undefined ? movie.title : 'Title') : title} imageURI={image.length == 0 ? (movie.photoURI != undefined ? movie.photoURI : "https://www.tibs.org.tw/images/default.jpg") : image} duration={duration.length == 0 ? (movie.duration != undefined ? movie.duration : '0hr 0min') : duration} releasedDate={released.length == 0 ? (movie.released != undefined ? movie.released : 'Jan 01, 2000') : released} rating={(rating < 0 || rating > 5) ? 0.0 : (rating == 0 ? (movie.rating != undefined ? movie.rating : 0.0) : rating)} genre={genre.length == 0 ? (movie.genres ? movie.genres : ['Genre']) : genre} />
                    <p className='text-gray-100 mt-4 text-sm'>{description.length == 0 ? (movie.description != undefined ? movie.description : 'Description') : description}</p>
                </div>
                <div className='col-span-2 flex flex-col text-xl text-gray-50'>
                    <input type="text" placeholder="Title" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setTitle(e.target.value)} defaultValue={movie.title || ""} />
                    <textarea type="text" placeholder="Description" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setDescription(e.target.value)} defaultValue={movie.description || ""}></textarea>
                    <input type="text" placeholder="Poster Image URl" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setImage(e.target.value)} defaultValue={movie.photoURI || ""} />
                    <input type="text" placeholder="Duration" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setDuration(e.target.value)} defaultValue={movie.duration || ""} />
                    <input type="text" placeholder="Released" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setReleased(e.target.value)} defaultValue={movie.released || ""} />
                    <input type="text" placeholder="Genre" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setGenre(e.target.value.split(','))} defaultValue={movie.genres.map((item) => item) || ""} />
                    <input type="text" placeholder="Rating" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setRating(e.target.value)} defaultValue={movie.rating || ""} />
                    <input type="text" placeholder="Background Image" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setBackground(e.target.value)} defaultValue={movie.backgroundImageURI || ""} />
                    {
                        movie.id != undefined ? (

                            <button className='flex items-center self-end mt-6 text-2xl' onClick={UpdateHandler}>
                                Update
                                <ArrowNarrowRightIcon className='w-6 h-6 text-gray-100 ml-3' />
                            </button>) : (
                            <button className='flex items-center self-end mt-6 text-2xl' onClick={PostHandler}>
                                Create
                                <ArrowNarrowRightIcon className='w-6 h-6 text-gray-100 ml-3' />
                            </button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CreateMovie;
