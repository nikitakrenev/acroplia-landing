import React, { Component } from "react";

import Header from "../components/Header/header";
import FooterSection from "../components/Footer";
import ContactSalesForm from "../components/contactSales/ContactSalesForm";

class ContactSales extends Component {
    render() {
        return (
            <React.Fragment>
                <Header className="acroplia-gradient"/>
                <div className="main">
                    <ContactSalesForm/>
                </div>
                <FooterSection noSubscription={true}/>
            </React.Fragment>
        );
    }
}

export default ContactSales;
