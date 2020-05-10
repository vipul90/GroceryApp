import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItems from '../../../Helpers/carouselItems';
import CarouselItem from './CarouselItem';

export default function CustomCarouselControl()
{
     return (
        <Carousel className="carouselParent">
            {
                CarouselItems.map(item => {
                   return <CarouselItem key={item.id} item={item} />
                })
            }
        </Carousel>
    )
}
 
