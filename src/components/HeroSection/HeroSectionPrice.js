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
        const priceSection = words.priceTitle;
        const { links = {} } = priceSection;
        return (
            <React.Fragment>
                <div className="acroplia-gradient" style={{
                    height: "69px",
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 11
                }}/>
                <section className="hero-section pt-100">
                  <div className="container">
                      <div className="row align-items-center justify-content-center">
                          <div className="col-md-10 col-lg-11">
                              <div className="hero-content-left price-hero-content text-white text-center">
                                  <h1 className="text-primary">{priceSection.title}</h1>
                              </div>
                          </div>
                      </div>
                  </div>
                </section>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    state
}))(HeroSection);
