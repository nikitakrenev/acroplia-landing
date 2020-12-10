import React from "react";
import {GetWords} from "../../data/lang/LangStore";
import {connect} from "react-redux";

class Feature extends React.Component {

  render() {
    const words = GetWords(this.props.language);
    const featuresSection = words.features;
    return (
      <React.Fragment>
        <div id="features" className={"feature-section ptb-100 light-blue-bg"}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="section-heading text-center mb-5">
                  <h2 className="feature-title">
                    {featuresSection.title}
                  </h2>
                  <p className="feature-description">
                    {featuresSection.subTitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="row row-grid align-items-center">
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-5 feature-item-home">
                  <div className="pr-4">
                    <div className="icon icon-shape rounded-circle icon-color-1">
                      <img
                          alt="placeholder"
                          src="img/icons/Smart-share2.svg"
                          className="img-center img-fluid feature-icon"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5 className="feature-icon-title">{featuresSection.smartshare}</h5>
                    <p className="mb-0 feature-icon-description">
                      {featuresSection.smartshareDescription}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5 feature-item-home">
                  <div className="pr-4">
                    <div className="icon icon-shape rounded-circle icon-color-2">
                      <img
                          alt="placeholder"
                          src="img/icons/Screen-share2.svg"
                          className="img-center img-fluid feature-icon"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5 className="feature-icon-title">{featuresSection.screenshare}</h5>
                    <p className="mb-0 feature-icon-description">
                      {featuresSection.screenshareDescription}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start feature-item-home">
                  <div className="pr-4">
                    <div className="icon icon-shape rounded-circle icon-color-3">
                      <img
                          alt="placeholder"
                          src="img/icons/Tree-Working2.svg"
                          className="img-center img-fluid feature-icon"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5 className="feature-icon-title">{featuresSection.threeWorking}</h5>
                    <p className="mb-0 feature-icon-description">
                      {featuresSection.threeWorking}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 feature-image">
                <div className="position-relative" style={{zIndex: 10}}>
                  <img
                    alt="placeholder"
                    src="img/image-10.png"
                    className="img-center img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-5 feature-item-home">
                  <div className="pr-4">
                    <div className="icon icon-shape icon-color-1 rounded-circle icon-color-4">
                      <img
                          alt="placeholder"
                          src="img/icons/Acroplia-drive.svg"
                          className="img-center img-fluid feature-icon"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5 className="feature-icon-title">{featuresSection.drive}</h5>
                    <p className="mb-0 feature-icon-description">
                      {featuresSection.driveDescription}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5 feature-item-home">
                  <div className="pr-4">
                    <div className="icon icon-shape rounded-circle icon-color-5">
                      <img
                          alt="placeholder"
                          src="img/icons/Advanced-security.svg"
                          className="img-center img-fluid feature-icon"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5 className="feature-icon-title">{featuresSection.permissions}</h5>
                    <p className="mb-0 feature-icon-description">
                      {featuresSection.permissionsDescription}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start feature-item-home">
                  <div className="pr-4">
                    <div className="icon icon-shape rounded-circle icon-color-6">
                      <img
                          alt="placeholder"
                          src="img/icons/Whiteboard.svg"
                          className="img-center img-fluid feature-icon"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5 className="feature-icon-title">{featuresSection.whiteboard}</h5>
                    <p className="mb-0 feature-icon-description">
                      {featuresSection.whiteboardDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(Feature);
