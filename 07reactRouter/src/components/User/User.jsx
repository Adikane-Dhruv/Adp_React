import React from 'react'
import {useParams} from 'react-router-dom'

function User() {

    const {userid}=useParams()
    return (
        <>
        
        <center>
        <div className="bg-gray-600 text-white text-3xl p-4">User:{userid}</div>
        </center>
        </>
    )
}

export default User
