import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';

function ErrorPage({ location }) {


    const [message, setMessage] = useState("Other");
    const [statusCode, setStatusCode] = useState();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (location.state === undefined) {
            setRedirect(true);
        } else {
            setStatusCode(location.state.error)
            switch (statusCode) {
                case 404:
                    setMessage("Item not found");
                    break;
                default:
                    break;
            }
        }
    }, [location])

    if (redirect) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center text-7xl tracking-widest font-light uppercase text-gray-400'>
            {
                message
            }
        </div>
    )
}

export default ErrorPage
