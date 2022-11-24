import React from 'react';

const Handeler = () => {
    let buttonClicked = () => {
        console.log('button click');
    }
    return <button onClick={buttonClicked}>Click</button>
}

export default Handeler;