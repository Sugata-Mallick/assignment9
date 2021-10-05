import React from 'react';
import MenuBar from '../MenuBar/MenuBar';

const NotFound = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <h1 className="text-danger mt-5">Cant found error 404 !!!</h1>
        </div>
    );
};

export default NotFound;