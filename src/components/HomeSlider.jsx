import React from "react";
import 'flowbite';
import { Carousel } from "flowbite-react";

function HomeSlider({data}) { // Destructure 'data' from props here
    
    return (
        <>
            <Carousel className="rounded-none h-[650px] w-full">
                <img className="rounded-none" src={data[0]} alt="carousel-1" />
                <img className="rounded-none" src={data[1]} alt="carousel-2" />
                <img className="rounded-none" src={data[2]} alt="carousel-3" />
                <img className="rounded-none" src={data[3]} alt="carousel-4" />
                <img className="rounded-none" src={data[4]} alt="carousel-5" />
            </Carousel>
        </>
    );
}

export default HomeSlider;
