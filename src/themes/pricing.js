import React, {Component} from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionPrice";
import PricingAcroplia from '../components/Pricing/PricingAcroploa';
import FooterSection from "../components/Footer";
import EnterpriseSection from "../components/Enterprize/EnterpriseSection";
import PricingSubHeader from "../components/Pricing/pricingSubHeader";

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <Header homePage>
                    <PricingSubHeader/>
                </Header>
                <div className="main">
                    <HeroSection />
                    <PricingAcroplia isPricingPage className="bg-white"/>
                    <EnterpriseSection/>
                </div>
                <FooterSection noSubscription={true}/>
            </React.Fragment>
        );
    }
}

export default Pricing;
