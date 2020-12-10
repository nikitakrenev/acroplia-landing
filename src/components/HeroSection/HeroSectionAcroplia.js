import React from "react";
import {connect} from "react-redux";
import {JoinButton} from "../JoinButton/JoinButton";
import {PhotoAuthor} from "../photoAuthor/PhotoAuthor";
import {GetWords} from "../../data/lang/LangStore";

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
      }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    render() {
        const words = GetWords(this.props.language);
        const heroSection = words.homeTitle;
        const videoSection = words.video;

        return (
            <React.Fragment>
                <section className="hero-section background-img" style={{
                    // paddingBottom: 95
                }}>
                    <div className="video-section-wrap">
                        <div className="background-video-overly background-video-acroplia ptb-100">
                            <div
                                className="player"
                                data-property="{videoURL:'https://www.youtube.com/watch?v=gOqlwlQjVis',containment:'.video-section-wrap', quality:'highres', autoPlay:true, showControls: false, startAt:0, mute:true, opacity: 1}"
                            />
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-9 col-lg-10">
                                        <div className="hero-content-left text-white text-center mt-5 pt-100">
                                            <h1 className="text-white">{heroSection.title}</h1>
                                            <h3 className="text-white">
                                                {heroSection.subTitle}
                                            </h3>

                                            <JoinButton title={heroSection.joinButton} target="https://dev.acroplia.com/join"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row text-center text-white hero-content-left pt-100 pb-70 align-items-center justify-content-center">
                                    <a
                                        href="https://www.youtube.com/watch?v=Ib9BNOURB9Y"
                                        className="popup-youtube"
                                    >
                                        <div className="d-flex align-items-center justify-content-center video-button-block">
                                            <span className="video-icon mr-4"></span>
                                            <span className="text-white ml-2 video-button">{videoSection.buttonTitle}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <PhotoAuthor>
                    <span className="text-white">
                        Photo by {" "}
                        <a href="https://unsplash.com/@brookecagle?utm_source=unsplash&amp">
                            Brooke Cagle
                        </a>
                        {" "} on {" "}
                        <a href="https://unsplash.com/s/photos/education?utm_source=unsplash">
                                     {" "} Unsplash {" "}
                        </a>
                    </span>
                </PhotoAuthor> */}
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(HeroSection);
