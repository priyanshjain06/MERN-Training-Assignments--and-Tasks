import React, { useState } from 'react';
const LikeButton = ({ likeCount }) => {
    const [count, setCount] = useState(likeCount);
    const handleLike = () => {
        setCount(count + 1);
    };
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <button onClick={handleLike}>❤ Likes</button>
            <p> {count}Likes</p>
        </div>
    );
};

export default LikeButton;
