import React, {Component} from "react";
import AdminHeader from "./admin.header";
import AdminSidebar from "./admin.sidebar";
import AdminFooter from "./admin.footer";
import AdminContent from "./admin.content";

interface ContentTitle {
    title: string;
}

export default class AdminHOC extends Component<ContentTitle> {

    render() {
        return (
            <div>
                <AdminHeader/>
                <AdminSidebar/>
                <AdminContent title={this.props.title}>
                    {this.props.children}
                </AdminContent>
                <AdminFooter/>
            </div>
        );
    }
}