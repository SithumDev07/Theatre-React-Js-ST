import React from 'react'
import MovieItem from './MovieItem'

const data = [
    {
        id: 1,
        title: "Spider Man Far From Home",
        description: "Spider-Man's identity is revealed to everyone, and he can no longer separate his normal life from his superhero life. When he asks Doctor Strange for help, it forces him to discover what it means to be him.",
        photoURI: "https://i.redd.it/x98yj7ti6h831.jpg",
        duration: "2hr 10min",
        released: "Aug 12, 2019",
        genre: ["Action", "Adventure", "Sci-Fi"],
        rating: 4.8,
    },
    {
        id: 2,
        title: "Spider Man Far From Home",
        description: "Spider-Man's identity is revealed to everyone, and he can no longer separate his normal life from his superhero life. When he asks Doctor Strange for help, it forces him to discover what it means to be him.",
        photoURI: "https://i.redd.it/x98yj7ti6h831.jpg",
        duration: "2hr 10min",
        released: "Aug 12, 2019",
        genre: ["Action", "Adventure", "Sci-Fi"],
        rating: 4.8,
    },
    {
        id: 3,
        title: "Spider Man Far From Home",
        description: "Spider-Man's identity is revealed to everyone, and he can no longer separate his normal life from his superhero life. When he asks Doctor Strange for help, it forces him to discover what it means to be him.",
        photoURI: "https://i.redd.it/x98yj7ti6h831.jpg",
        duration: "2hr 10min",
        released: "Aug 12, 2019",
        genre: ["Action", "Adventure", "Sci-Fi"],
        rating: 4.8,
    },
    {
        id: 4,
        title: "Spider Man Far From Home",
        description: "Spider-Man's identity is revealed to everyone, and he can no longer separate his normal life from his superhero life. When he asks Doctor Strange for help, it forces him to discover what it means to be him.",
        photoURI: "https://i.redd.it/x98yj7ti6h831.jpg",
        duration: "2hr 10min",
        released: "Aug 12, 2019",
        genre: ["Action", "Adventure", "Sci-Fi"],
        rating: 4.8,
    },
    {
        id: 5,
        title: "Spider Man Far From Home",
        description: "Spider-Man's identity is revealed to everyone, and he can no longer separate his normal life from his superhero life. When he asks Doctor Strange for help, it forces him to discover what it means to be him.",
        photoURI: "https://i.redd.it/x98yj7ti6h831.jpg",
        duration: "2hr 10min",
        released: "Aug 12, 2019",
        genre: ["Action", "Adventure", "Sci-Fi"],
        rating: 4.8,
    },
    {
        id: 6,
        title: "Spider Man Far From Home",
        description: "Spider-Man's identity is revealed to everyone, and he can no longer separate his normal life from his superhero life. When he asks Doctor Strange for help, it forces him to discover what it means to be him.",
        photoURI: "https://i.redd.it/x98yj7ti6h831.jpg",
        duration: "2hr 10min",
        released: "Aug 12, 2019",
        genre: ["Action", "Adventure", "Sci-Fi"],
        rating: 4.8,
    },
]


function MovieList() {
    return (
        <>
            {
                data.length > 0 ? (
                    <div className='container mx-auto grid grid-cols-5 gap-8'>
                        {data.filter((_, index) => index < 20).map((item, _) => (
                            <MovieItem key={item.id} title={item.title} imageURI={item.photoURI} duration={item.duration} releasedDate={item.released} rating={item.rating} genre={item.genre} />
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
