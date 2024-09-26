import React from 'react';
import './Profile.css'; 

const Profile = ({ name, age, location }) => {
    return (
        <div className="profile-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
};

export default Profile;
