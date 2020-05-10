import React from 'react'

export default function CarouselItem(props)
{
    return (
        <div>
            <img className="carouselImage" src={props.item.ItemImage} alt={props.item.Name} />
        </div>
    )
}