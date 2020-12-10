import React from "react";
import {GetWords} from "../../data/lang/LangStore";
import {connect} from "react-redux";

class About extends React.Component {

  render() {
    const words = GetWords(this.props.language);
    const aboutUsSection = words.aboutUs;
    return (
      <React.Fragment>
        <section id="about" className="about-us ptb-100 about-us-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <h2 className="col-md-10 mb-5">
                {aboutUsSection.title}
              </h2>
              <div className="col-md-6">
                <div className="about-content-left section-heading">

                  <div className="single-feature mb-5">
                    <div className="d-flex align-items-center mb-2">
                      <div className="rounded mr-3 icon icon-color-1">
                        <img
                            src="img/icons/Video-conf2.svg"
                            alt="icon"
                            className="img-fluid"
                        />
                      </div>
                      <h5 className="mb-0">{aboutUsSection.video}</h5>
                    </div>
                    <p className="about-us-description">
                      {aboutUsSection.videoDescription}
                    </p>
                  </div>

                  <div className="single-feature  mb-5">
                    <div className="d-flex align-items-center mb-2">
                      <div className="rounded mr-3 icon icon-color-3">
                        <img
                            src="img/icons/quest2.svg"
                            alt="icon"
                            className="img-fluid"
                        />
                      </div>
                      <h5 className="mb-0">{aboutUsSection.groupChat}</h5>
                    </div>
                    <p className="about-us-description">
                      {aboutUsSection.groupChatDescription}
                    </p>
                  </div>

                  <div className="single-feature  mb-5">
                    <div className="d-flex align-items-center mb-2">
                      <div className="rounded mr-3 icon icon-color-2">
                        <img
                            src="img/icons/notes2.svg"
                            alt="icon"
                            className="img-fluid"
                        />
                      </div>
                      <h5 className="mb-0">{aboutUsSection.notes}</h5>
                    </div>
                    <p className="about-us-description">
                      {aboutUsSection.notesDescription}
                    </p>
                  </div>

                  <div className="single-feature">
                    <div className="d-flex align-items-center  mb-2">
                      <div className="rounded mr-3 icon icon-color-4">
                        <img
                            src="img/icons/tasks-list2.svg"
                            alt="icon"
                            className="img-fluid"
                        />
                      </div>
                      <h5 className="mb-0">{aboutUsSection.tasks}</h5>
                    </div>
                    <p className="about-us-description">
                      {aboutUsSection.tasksDescription}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content-right">
                  <img
                    src="img/about-img.png"
                    alt="about us"
                    className="img-fluid"
                  />
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
export default connect(mapStateToProps)(About);
