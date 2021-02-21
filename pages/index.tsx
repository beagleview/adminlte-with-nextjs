import React from "react";
import AdminHeader from "../components/layouts/admin.header";
import AdminSidebar from "../components/layouts/admin.sidebar";
import AdminFooter from "../components/layouts/admin.footer";

const Home = () => {
    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <div className="content-wrapper" >
                <h1>Hello Dek Dek</h1>
            </div>
            <AdminFooter />
        </div>
    )
};

export default Home;