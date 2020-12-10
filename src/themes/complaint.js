import React, {Component} from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionTeam";
import FooterSection from "../components/Footer";

class Guidelines extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          {/*<FaqSection />*/}
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Guidelines;
