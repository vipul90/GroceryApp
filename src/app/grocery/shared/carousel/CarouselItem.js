import React from 'react';
import PropTypes from 'prop-types';

export default function CarouselItem(props)
{
    return (
        <div>
            <img className="carouselImage" src={props.item.ItemImage} alt={props.item.Name} />
        </div>
    )
}

CarouselItem.propTypes ={
    item : PropTypes.object
}