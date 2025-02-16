import React from "react";
import HomeNav from "../../components/HomeNav";

function ErrorPage(){
    return(
        <React.Fragment>
            <HomeNav></HomeNav>
            <h1>Error 404 Not Found</h1>
        </React.Fragment>
    )
}
export default ErrorPage;