import React from "react";
import AdminHeader from "../components/layouts/admin.header";
import AdminSidebar from "../components/layouts/admin.sidebar";

const Home = () => {
    return (
        <div>
            <AdminHeader />
            <AdminSidebar />
            <div className="content-wrapper" >
                <h1>Hello Dek Dek</h1>
            </div>
        </div>
    )
};

export default Home;