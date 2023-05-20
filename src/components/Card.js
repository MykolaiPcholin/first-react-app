import './Card.css';

import React from 'react';

const Card = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <span>{props.name}</span>
            <img src={props.src} alt=''/>
        </div>
    );
};

export default Card;