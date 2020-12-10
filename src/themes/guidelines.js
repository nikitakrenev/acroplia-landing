import React, {Component} from "react";

import Header from "../components/Header/header";
import FooterSection from "../components/Footer";
import HeroSectionOnlyTitle from "../components/HeroSection/HeroSectionOnlyTitle";
import CommunityTextSection from "../components/TextSection/CommunityTextSection";

class Guidelines extends Component {
  render() {
    return (
      <React.Fragment>
          <Header />
          <div className="main">
              <HeroSectionOnlyTitle title="Acroplia Community Guidelines" />
              <CommunityTextSection />
          </div>
          <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Guidelines;
