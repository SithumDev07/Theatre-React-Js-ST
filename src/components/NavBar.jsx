import React from 'react'
import { SearchIcon, GiftIcon, BellIcon, UserIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='w-full fixed top-0 right-0 left-0 bg-black py-4 z-50 bg-opacity-70'>
            <div className='container mx-auto h-full flex items-center justify-between'>
                <ul className='flex items-center text-gray-200'>
                    <li className='active font-bold'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='ml-5'>
                        <Link to="/tvshows">TV Shows</Link>
                    </li>
                    <li className='ml-5'>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li className='ml-5'>
                        <Link to="/latest">Latest</Link>
                    </li>
                    <li className='ml-5'>
                        <Link to="/mylist">My List</Link>
                    </li>
                </ul>
                <div className='flex items-center'>
                    <button>
                        <SearchIcon className='w-6 h-6 text-gray-200 mr-4' />
                    </button>
                    <button>
                        <GiftIcon className='w-6 h-6 text-gray-200 mr-4' />
                    </button>
                    <button>
                        <BellIcon className='w-6 h-6 text-gray-200 mr-4' />
                    </button>
                    <button>
                        <UserIcon className='w-6 h-6 text-gray-200 mr-4' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
