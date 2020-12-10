import React from "react";
import { connect } from "react-redux";
import {PhotoAuthor} from "../photoAuthor/PhotoAuthor";
import {DownloadButton} from "../DownloadButton/DownloadButton";
import {GetWords} from "../../data/lang/LangStore";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
      const words = GetWords(this.props.language);
      const videoSection = words.video;
    return (
      <React.Fragment>
        <section
          id="download"
          className="video-promo ptb-100 background-img"
          style={{
            backgroundImage: "url('img/video-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="video-promo-content mt-4 text-center">
                  <a
                    href="https://www.youtube.com/watch?v=TuRH-C1l7eE"
                    className="popup-youtube video-play-icon d-inline-block"
                  >
                    <span className="ti-control-play"></span>{" "}
                  </a>
                  <h5 className="mt-4 text-white">{videoSection.title}</h5>
                  {this.props.showDownloadBtn &&
                    this.props.showDownloadBtn === true && (
                      <div className="download-btn mt-5">
                        <a href="/#" className="btn google-play-btn mr-3">
                          <span className="ti-android"></span> Google Play
                        </a>
                        <a href="/#" className="btn app-store-btn">
                          <span className="ti-apple"></span> App Store
                        </a>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>
          <PhotoAuthor>
            <span className="text-white">
                Photo by {" "}
                <a href="https://unsplash.com/@daria_shevtsova?utm_source=unsplash">
                    Daria Shevtsova
                </a>
                {" "} on {" "}
                <a href="https://unsplash.com/s/photos/people?utm_source=unsplash&">
                     {" "} Unsplash {" "}
                </a>
            </span>
          </PhotoAuthor>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(Video);
