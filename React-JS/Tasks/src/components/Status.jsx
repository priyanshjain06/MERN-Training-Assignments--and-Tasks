import React from 'react';

const Status = ({ status }) => {
    let message;

    if (status === 'success') {
        message = 'Operation was successful';
    } else if (status === 'error') {
        message = 'There was an error';
    } else {
        message = 'Unknown status';
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default Status;
