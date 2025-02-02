import React from "react";
import HomeNav from "../components/HomeNav";
import HomeSlider from "../components/HomeSlider";
import HomeHero from "../components/HeroSection";

function HomePage(){
    return(
        <React.Fragment>            
            <HomeNav/>
            <HomeSlider/>
            <HomeHero/>
        </React.Fragment>
    )
}
export default HomePage;