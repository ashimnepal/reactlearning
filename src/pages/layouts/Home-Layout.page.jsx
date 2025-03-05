import { Outlet } from "react-router-dom";
import HomeNav from "../../components/HomeNav";
import React from "react";

function HomePageLayout(){
    return(
        <React.Fragment>
            <HomeNav/>


            <Outlet/>

            
        </React.Fragment>
    )
}

export default HomePageLayout;