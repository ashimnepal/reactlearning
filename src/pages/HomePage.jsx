import React from "react";
import HomeHero from "../components/HeroSection";
import HomeBanner from "../components/HomeBanner";



function HomePage(){
    return(
        <React.Fragment>            
           
            <HomeBanner/>            
            <HomeHero/>
        </React.Fragment>
    )
}
export default HomePage;