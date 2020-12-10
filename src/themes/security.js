import React, {Component} from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionSecurity";
import PromoSection from "../components/PromoSection/PromoSecurity";
import AboutSection from "../components/AboutUs/AboutUsSecurity";
import FeatureSection from "../components/Features/FeatureSecurity";
import FooterSection from "../components/Footer";

class Security extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="main">
                    <HeroSection />
                    <PromoSection />
                    <AboutSection />
                    <FeatureSection />
                </div>
                <FooterSection noSubscription={true}/>
            </React.Fragment>
        );
    }
}

export default Security;
