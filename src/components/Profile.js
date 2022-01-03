import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const {username} = useParams();
    return (
        <div>
            <h1>This is the profile page for {username}</h1>
        </div>
    )
}

export default Profile
