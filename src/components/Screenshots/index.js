import React from "react";
import _data from "../../data";
import {DownloadButton} from "../DownloadButton/DownloadButton";
import {GetWords} from "../../data/lang/LangStore";
import {connect} from "react-redux";

class Screenshots extends React.Component {

  render() {
    const words = GetWords(this.props.language);
    const screenshotsSection = words.screenshots;
    return (
      <React.Fragment>
        <section
          id="screenshots"
          className="screenshots-section ptb-100 gray-light-bg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
                  <h2>
                    {screenshotsSection.title} <br />
                    <span>{screenshotsSection.subtitle}</span>
                  </h2>
                  <p className="lead">
                    {screenshotsSection.secondSubtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="screen-slider-content mt-5">
              <div className="screenshot-frame"></div>
              <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                <img src="img/Frame402.png" className="img-fluid" alt="screenshots" />
                <img src="img/Frame403.png" className="img-fluid" alt="screenshots" />
                <img src="img/Frame400.png" className="img-fluid" alt="screenshots" />
                <img src="img/Frame398.png" className="img-fluid" alt="screenshots" />
                <img src="img/Frame401.png" className="img-fluid" alt="screenshots" />
                <img src="img/Frame399.png" className="img-fluid" alt="screenshots" />
              </div>
            </div>
          </div>
          {this.props.showDownloadBtn &&
          this.props.showDownloadBtn === true && (
            <div className="container pt-100">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-8 text-center">
                  <DownloadButton
                      className="mr-5"
                      imageSrc="/img/icons/Google-play.svg"
                      alt="Get it on Google Play"
                      url="https://play.google.com/store/apps/details?id=com.gxbventures.acroplia"
                  />
                  <DownloadButton
                      className="ml-5"
                      imageSrc="/img/icons/Appstore.svg"
                      alt="Download on the App Store"
                      url="https://apps.apple.com/us/app/acroplia/id1345316411"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(Screenshots);
