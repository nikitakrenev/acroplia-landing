import React from "react";
import {GetWords} from "../../data/lang/LangStore";
import {connect} from "react-redux";

class Feature extends React.Component {
  render() {
    const words = GetWords(this.props.language);
    const securityFeaturesSection = words.securityFeatures;
    return (
      <React.Fragment>
        <section
            id="features"
            className="imageblock-section switchable switchable-content"
        >
          <div className="imageblock-section-img col-lg-5 col-md-4">
            <div
                className="background-image-holder"
                style={{
                  backgroundImage: "url('img/security-mobile.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  opacity: 1
                }}
            >
              {" "}
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <h2 className="security-feature-title mb-lg-5 mt-lg-5 mb-sm-4 mt-sm-4">
                  {securityFeaturesSection.title}
                </h2>
                <p className="feature-description mb-0">
                  {securityFeaturesSection.subTitle}
                </p>
                <div className="row align-items-center ptb-100 ">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-start mb-5">
                      <div className="pr-4">
                        <div className="icon icon-shape rounded-circle icon-color-1">
                          <img
                              alt="placeholder"
                              src="img/icons/Security-encription.svg"
                              className="img-center img-fluid feature-icon"
                          />
                        </div>
                      </div>
                      <div className="icon-text">
                        <h5 className="feature-icon-title mb-1">{securityFeaturesSection.encryption}</h5>
                        <p className=" feature-icon-description mb-0">
                          {securityFeaturesSection.encryptionDescription}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-5">
                      <div className="pr-4">
                        <div className="icon icon-shape rounded-circle icon-color-2">
                          <img
                              alt="placeholder"
                              src="img/icons/key.svg"
                              className="img-center img-fluid feature-icon"
                          />
                        </div>
                      </div>
                      <div className="icon-text">
                        <h5 className="feature-icon-title  mb-1">{securityFeaturesSection.key}</h5>
                        <p className="mb-0 feature-icon-description mb-0">
                          {securityFeaturesSection.keyDescription}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start">
                      <div className="pr-4">
                        <div className="icon icon-shape rounded-circle icon-color-3">
                          <img
                              alt="placeholder"
                              src="img/icons/security-camera.svg"
                              className="img-center img-fluid feature-icon"
                              style={{"paddingTop": "12px"}}
                          />
                        </div>
                      </div>
                      <div className="icon-text">
                        <h5 className="feature-icon-title  mb-1">{securityFeaturesSection.videochats}</h5>
                        <p className="mb-0 feature-icon-description mb-0">
                          {securityFeaturesSection.videochatsDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(Feature);
