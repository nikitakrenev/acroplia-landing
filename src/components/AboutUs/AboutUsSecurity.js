import React from "react";
import {GetWords} from "../../data/lang/LangStore";
import {connect} from "react-redux";

class About extends React.Component {
    render() {
        const words = GetWords(this.props.language);
        const aboutSecuritySection = words.aboutSecurity;
        return (
            <React.Fragment>
                <section id="about" className="about-us ptb-100 gray-light-bg about-us-security">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="about-content-right">
                                    <img
                                        src="img/delivery-app.svg"
                                        width="500"
                                        alt="about us"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h2 className="mt-4">{aboutSecuritySection.title}</h2>
                                <p className="mb-4 lh-190">
                                    {aboutSecuritySection.description}
                                    <a className="" href="privacy">{aboutSecuritySection.privacy}</a>
                                </p>

                                <div className="container mb-5 about-us-list text-dark text-nowrap" style={{
                                    paddingLeft: 0,
                                }}>
                                    <div className="row align-items-start">
                                        <div className="col-lg-6">
                                            <ul className="list-unstyled">
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="badge badge-circle badge-primary mr-3">
                                                                <span className="ti-check"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">{aboutSecuritySection.email}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="badge badge-circle badge-primary mr-3">
                                                                <span className="ti-check"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">
                                                                {aboutSecuritySection.username}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="badge badge-circle badge-primary mr-3">
                                                                <span className="ti-check"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">
                                                                {aboutSecuritySection.password}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="badge badge-circle badge-primary mr-3">
                                                                <span className="ti-check"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">
                                                                {aboutSecuritySection.birth}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="badge badge-circle badge-primary mr-3">
                                                                <span className="ti-check"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">
                                                                {aboutSecuritySection.images}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="badge badge-circle badge-primary mr-3">
                                                                <span className="ti-check"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">
                                                                {aboutSecuritySection.links}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="badge badge-circle badge-primary mr-3">
                                                                <span className="ti-check"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">
                                                                {aboutSecuritySection.location}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="badge badge-circle badge-primary mr-3">
                                                                <span className="ti-check"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">
                                                                {aboutSecuritySection.cookie}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
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
export default connect(mapStateToProps)(About);
