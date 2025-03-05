import React from "react";

import { useParams, useSearchParams } from "react-router-dom";

function ProductCategories(){
    const params = useParams();
    const [query,setQuery]=useSearchParams();
    return(
        <React.Fragment>
            
            <h1>Product Categories {params.slug} </h1>
            <h1>Query Value: {query.get("search")} </h1>
            
        </React.Fragment>
    )
}
export default ProductCategories;