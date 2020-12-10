import React, {Component} from "react";

import Header from "../components/Header/header";
import FooterSection from "../components/Footer";
import HeroSectionOnlyTitle from "../components/HeroSection/HeroSectionOnlyTitle";
import TermsTextSection from "../components/TextSection/TermsTextSection";

class Guidelines extends Component {
  render() {
    return (
      <React.Fragment>
          <Header />
          <div className="main">
              <HeroSectionOnlyTitle title="Acroplia Terms of Use" />
              <TermsTextSection />
          </div>
          <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Guidelines;
