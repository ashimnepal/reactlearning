import { Outlet } from "react-router-dom";
import AdminNav from "../../components/admincomponents/AdminNav";
import React from "react";


function AdminDashboardLayout(){
    return(
        <React.Fragment>
            
            <AdminNav/>

        <Outlet/>
        </React.Fragment>
    )
}

export default AdminDashboardLayout;