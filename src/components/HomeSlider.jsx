import React from "react";
import 'flowbite';
import { Carousel } from "flowbite-react";

function HomeSlider({data}) { 
    let images=data
    console.log(data)
    return (
        images ? 
        <>

            <Carousel className="rounded-none h-[650px] w-full">
                {
                    data.map((row,index)=> (
                        <img key={row} className="rounded-none" src={data[index]} alt="carousel-1" />
                    ))
                }
                
                
            </Carousel>
        </>
        :
        <></>

    );
}

export default HomeSlider;
