// HomeBanner.js
import React, { useEffect, useState } from "react";
import HomeSlider from "./HomeSlider";

function HomeBanner() {
    const imagesList = [
        "https://flowbite.com/docs/images/carousel/carousel-1.svg",
        "https://flowbite.com/docs/images/carousel/carousel-2.svg",
        "https://flowbite.com/docs/images/carousel/carousel-3.svg",
        "https://flowbite.com/docs/images/carousel/carousel-4.svg",
        "https://flowbite.com/docs/images/carousel/carousel-5.svg"
    ];

    const [images, setImages] = useState([]);

    useEffect(() => setImages(imagesList), [])

    return (
        <>
            {
                images ? <HomeSlider data={images} /> : <></>
            }
        </>
    );
}

export default HomeBanner;