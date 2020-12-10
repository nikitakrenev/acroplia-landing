import React, { Component } from "react";

import Header from "../components/Header/header";
import FooterSection from "../components/Footer";

import CopyrightComplaintForm from "../components/copyrightComplaint/CopyrightComplaintForm";

class Copyright extends Component {
    render() {
        return (
            <React.Fragment>
                <Header className="acroplia-gradient"/>
                <div className="main">
                    <CopyrightComplaintForm/>
                </div>
                <FooterSection noSubscription={true}/>
            </React.Fragment>
        );
    }
}

export default Copyright;
