import React from "react";
import {connect} from "react-redux";
import {PhotoAuthor} from "../photoAuthor/PhotoAuthor";
import _data from "../../data";
import {GetWords} from "../../data/lang/LangStore";

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            security: {}
        };
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */

        this.setState({
            security: _data.security
        });
    }

    render() {
        const words = GetWords(this.props.language);
        const securitySection = words.security;
        const { links = {} } = securitySection;
        return (
            <React.Fragment>
                <section className="hero-section ptb-100"
                         style={{
                             backgroundImage: "url('img/security-bg.jpg')",
                             backgroundRepeat: "no-repeat",
                             backgroundPosition: "center center",
                             backgroundSize: "cover",
                             position: 'relative'
                         }}>
                    <div style={{
                        position: 'absolute',
                        width:'100%',
                        bottom: 0,
                        top: 0,
                        background:'#000',
                        opacity:0.5}}
                    />
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-10 col-lg-11">
                                <div className="hero-content-left text-white text-center ptb-100">
                                    <h1 className="text-white">{securitySection.title}</h1>
                                    <h3 className="text-white">
                                        {securitySection.description} {" "}
                                        <a href="privacy">{links.privacy}</a>.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3 col-lg-3">
                                <div className="hero-content-left text-white text-center">
                                    <h6>
                                        <a  className="text-white security-link" href="privacy">{links.privacy}</a>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="hero-content-left text-white text-center">
                                    <h6>
                                        <a className="text-white security-link" href="guidelines">{links.guidlines}</a>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="hero-content-left text-white text-center">
                                    <h6>
                                        <a  className="text-white security-link" href="terms">{links.terms}</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <PhotoAuthor>
                    <span className="text-white">
                        Photo by {" "}
                        <a href="https://unsplash.com/@kaitlynbaker?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                            Kaitlyn Baker
                        </a>
                            {" "} on {" "}
                        <a href="https://unsplash.com/s/photos/security?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
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
}))(HeroSection);
