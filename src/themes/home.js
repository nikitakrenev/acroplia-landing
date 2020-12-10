import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionAcroplia";
import AboutSection from "../components/AboutUs/AboutUsAcroplia";
import FeatureSection from "../components/Features/Feature2";
import PricingSection from "../components/Pricing/PricingAcroploa.js";
import Screenshots from "../components/Screenshots";
import FooterSection from "../components/Footer";
import VideoSection from "../components/Video";
import HomePromo from "../components/PromoSection/HomePromo";

class Theme extends Component {
    render() {
        return (
            <React.Fragment>
                <Header homePage/>
                <div className="main">
                    <HeroSection />
                    <HomePromo />
                    <AboutSection />
                    <VideoSection />
                    <FeatureSection />
                    <Screenshots showDownloadBtn={true}/>
                    <PricingSection className="ptb-100"/>
                </div>
                <FooterSection noSubscription={true}/>
            </React.Fragment>
        );
    }
}

export default Theme;
