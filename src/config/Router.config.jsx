import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";

function RouterConfigComponent(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                {/* <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route> */}
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouterConfigComponent