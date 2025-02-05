import React from "react";
import HomeNav from "../components/HomeNav";
import HomeHero from "../components/HeroSection";
import HomeBanner from "../components/HomeBanner";



function HomePage(){
    return(
        <React.Fragment>            
            <HomeNav/>
            <HomeBanner/>            
            <HomeHero/>
        </React.Fragment>
    )
}
export default HomePage;