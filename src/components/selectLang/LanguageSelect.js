import React from 'react'
import {connect} from "react-redux";
import {CHANGE_LANGUAGE} from "../../constants/types";
import {LanguageList} from "../../data/LanguageList";

class LanguageSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: []
        };
    }

    componentDidMount() {
        this.setState({
            languages: LanguageList,
        });
    }
    render() {
        const {language = "en", changeLang, className = "", smallSize = false} = this.props
        const smallIconClass = smallSize ? "small-icon" : "";
        return (
            <div className={"btn-group select-lang-group " + className}>
                <button
                    type="button"
                    className={"btn pt-0 pb-0 btn-default dropdown-toggle lang-btn " + language + "-lang " + smallIconClass}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                />
                <ul className={"dropdown-menu select-lang-menu " + (smallSize ? "small-menu" : "")}>
                    {this.state.languages.map((lang) => (
                        (lang !== language) ? <li
                            key={lang}
                            className={"pt-2 pb-2 text-center"}
                            onClick={() => changeLang(lang)}
                        >
                            <a className="ml-0 mr-0">
                                <span className={lang + "-lang list-icon " + smallIconClass}/>
                            </a>
                        </li> : null
                    ))}
                </ul>
            </div>
        )
    }


}
const mapDispatchToProps = dispatch => {
    return {
        changeLang: (lang) => dispatch({type: CHANGE_LANGUAGE, payload: lang}),
    }
}
const mapStateToProps = state => ({ language: state.language });

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);
