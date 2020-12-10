import React from "react";
import {connect} from "react-redux";
import {PhotoAuthor} from "../photoAuthor/PhotoAuthor";
import _data from "../../data";
import {GetWords} from "../../data/lang/LangStore";

class HeroSection extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div style={{
                    backgroundColor: '#0A4CB0',
                    height: "150px",
                }}/>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    state
}))(HeroSection);
