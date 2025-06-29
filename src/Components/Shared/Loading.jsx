import React from 'react';
import { FourSquare } from 'react-loading-indicators';

const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <FourSquare
             color="#31cca1"
             size="medium" 
             text="" 
             textColor="" 
             />
        </div>
    );
};

export default Loading;