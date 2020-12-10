import React from "react";
import {connect} from "react-redux";

import {GetWords} from "../../data/lang/LangStore";

class EnterpriseSection extends React.Component {

    render() {
        const words = GetWords(this.props.language);
        const enterpriseSection = words.enterprise;
        return (
            <React.Fragment>
                <section className="enterprise-section ptb-100 bg-color-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">

                                <h2 className="col-12 d-flex justify-content-center justify-content-sm-start">
                                    <span className="enterprise-title-image">{" "}</span>
                                    <span>{enterpriseSection.title}</span></h2>
                                    <span className="enterprise-title-rectangle">{" "}</span>
                            </div>
                            <div className="col-md-7 mb-3 col-sm-12">
                                <h4>{enterpriseSection.subTitle}</h4>
                                <p >{enterpriseSection.description}</p>

                                <div className="text-left pt-4 enterprise-buttons">
                                    <a
                                        href="/sales"
                                        className="btn mb-3 outline-btn mr-4"
                                    >
                                        {enterpriseSection.contactButtonTitle}
                                    </a>

                                    <a
                                        href="/pricing"
                                        className="btn mb-3 outline-btn ml-4"
                                        onClick={ev => ev.preventDefault()}
                                    >
                                        <span className="pr-4 pl-4">{enterpriseSection.chatBotButtonTitle}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*<div className="text-center">*/}
                        {/*    <a*/}
                        {/*        href="/sales"*/}
                        {/*        className="btn mb-3 outline-btn mr-4"*/}
                        {/*    >*/}
                        {/*        {enterpriseSection.contactButtonTitle}*/}
                        {/*    </a>*/}

                        {/*    <a*/}
                        {/*        href="/pricing"*/}
                        {/*        className="btn mb-3 outline-btn ml-4"*/}
                        {/*        onClick={ev => ev.preventDefault()}*/}
                        {/*    >*/}
                        {/*        <span className="pr-4 pl-4">{enterpriseSection.chatBotButtonTitle}</span>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(EnterpriseSection);
