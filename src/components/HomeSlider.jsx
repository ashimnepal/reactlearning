import React from "react";
import 'flowbite';
import { Carousel } from "flowbite-react";

function HomeSlider({data}) { 
    let image=data
    
    return (
        image ? 
        <>

            <Carousel className="rounded-none h-[650px] w-full">
                {
                    image.map((row,index)=> (
                        <img key={row} className="rounded-none" src={image[index]} alt="carousel-1" />
                    ))
                }
                
                
            </Carousel>
        </>
        :
        <></>

    );
}

export default HomeSlider;
