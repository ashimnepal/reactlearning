import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/errors/PageNotFound";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import SellerDashboard from "../pages/seller/SellerDash";
import CustomerPage from "../pages/customer/CustomerPage";
import ProductCategories from "../pages/reqpages/ProductCategories";
import ProductDetail from "../pages/reqpages/ProductDetail"
import Cart from "../pages/customer/Cart"
import ResetPassword from "../pages/auth/ResetPassword"
import ForgotPassword from "../pages/auth/ForgotPassword"

function RouterConfigComponent(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route>
                <Route path="/admindash" element={<AdminDashboard/>}></Route>
                <Route path="/sellerdash" element={<SellerDashboard/>}></Route>
                <Route path="/customer" element={<CustomerPage/>}></Route>
                <Route path="/categories" element={<ProductCategories/>}></Route>
                <Route path="/product_detail/id26" element={<ProductDetail/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/reset" element={<ResetPassword/>}></Route>
                <Route path="/forgot" element={<ForgotPassword/>}></Route>












                <Route path="*" element={<ErrorPage/>}></Route>

            </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouterConfigComponent