import React, { Component } from "react";

import Header from "../components/Header/header";
import FooterSection from "../components/Footer";
import PrivacyTextSection from "../components/TextSection/PrivacyTextSection";
import HeroSectionOnlyTitle from "../components/HeroSection/HeroSectionOnlyTitle";

class Privacy extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSectionOnlyTitle title="Acroplia Privacy Policy" />
          <PrivacyTextSection />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Privacy;
