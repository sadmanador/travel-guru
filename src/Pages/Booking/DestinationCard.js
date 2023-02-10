import React from 'react';

const DestinationCard = ({destinations}) => {
    console.log(destinations)
    const {id, location, img_url, body} = destinations
    return (
        <div>
           <img src={img_url}  alt="imgs"/>
        </div>
    );
};

export default DestinationCard;