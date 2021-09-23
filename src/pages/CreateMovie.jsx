import React, { useState } from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import MovieItem from '../components/MovieItem';
import axios from '../axios/axios';
import { Redirect } from 'react-router';

function CreateMovie() {

    const [title, setTitle] = useState("Title");
    const [image, setImage] = useState("https://www.tibs.org.tw/images/default.jpg");
    const [background, setBackground] = useState("https://www.tibs.org.tw/images/default.jpg");
    const [description, setDescription] = useState("Description");
    const [duration, setDuration] = useState("0hr 0min");
    const [released, setReleased] = useState("Jan 01, 2000");
    const [rating, setRating] = useState(0.0);
    const [genre, setGenre] = useState(["Genre"]);
    const [redirect, setRedirect] = useState(false);

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
            console.log(response);
            setRedirect(true);
        }).catch(function (error) {
            console.log(error);
        })
    }

    if (redirect) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='container mx-auto grid grid-cols-3'>
                <div>
                    <h3 className='uppercase text-2xl text-gray-100 font-semibold tracking-wider mb-3' style={{ userSelect: 'none' }}>Preview</h3>
                    <MovieItem title={title.length == 0 ? 'Title' : title} imageURI={image.length == 0 ? "https://www.tibs.org.tw/images/default.jpg" : image} duration={duration.length == 0 ? '0hr 0min' : duration} releasedDate={released.length == 0 ? 'Jan 01, 2000' : released} rating={(rating < 0 || rating > 5) ? 0.0 : rating} genre={genre.length == 0 ? ['Genre'] : genre} />
                    <p className='text-gray-100 mt-4 text-sm'>{description.length == 0 ? 'Description' : description}</p>
                </div>
                <div className='col-span-2 flex flex-col text-xl text-gray-50'>
                    <input type="text" placeholder="Title" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setTitle(e.target.value)} />
                    <textarea type="text" placeholder="Description" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setDescription(e.target.value)}></textarea>
                    <input type="text" placeholder="Poster Image URl" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setImage(e.target.value)} />
                    <input type="text" placeholder="Duration" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setDuration(e.target.value)} />
                    <input type="text" placeholder="Released" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setReleased(e.target.value)} />
                    <input type="text" placeholder="Genre" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setGenre(e.target.value.split(','))} />
                    <input type="text" placeholder="Rating" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setRating(e.target.value)} />
                    <input type="text" placeholder="Background Image" className='bg-transparent border-b border-gray-200 px-3 py-3 placeholder-gray-50 mb-3' onChange={(e) => setBackground(e.target.value)} />
                    <button className='flex items-center self-end mt-6 text-2xl' onClick={PostHandler}>
                        Create
                        <ArrowNarrowRightIcon className='w-6 h-6 text-gray-100 ml-3' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateMovie;
