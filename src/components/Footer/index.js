import React from "react";
import {GetWords} from "../../data/lang/LangStore";
import {connect} from "react-redux";

class Footer extends React.Component {

  render() {
    const words = GetWords(this.props.language);
    const footerSection = words.footer;
    return (
      <React.Fragment>
        <footer className="footer-section">
          <div
            className={"footer-top background-img-2 " + (this.props.noSubscription ? 'py-5' : 'pt-150 pb-5')}
          >
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-3 mb-3 mb-lg-0">
                  <div className="footer-nav-wrap text-blue-light">
                    <img
                      src="img/icons/Acroplia.svg"
                      alt="footer logo"
                      width="120"
                      className="img-fluid mb-3"
                    />
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white support-locaton">
                    <ul className="list-unstyled">
                      <li className="mb-4">
                        <h6>{footerSection.support}</h6>
                      </li>
                      <li className="mb-3">
                        <a href="http://www.gxbventures.com/">www.gxbventures.com</a>
                      </li>
                      <li className="mb-5">
                        <a href="mailto:hello@acroplia.com">hello@acroplia.com</a>
                      </li>
                      <li className="mb-4 pt-12">
                        <h6>{footerSection.location}</h6>
                      </li>
                      <li>
                        <p>{footerSection.place}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white footer-links">
                    <ul className="list-unstyled support-list">
                      {/*<li className="mb-3">*/}
                      {/*  <a href="faq">{footerSection.faq}</a>*/}
                      {/*</li>*/}
                      <li className="mb-3">
                        <a href="https://hh.ru/employer/2510411" target="_blank" rel="noopener, noreferrer">{footerSection.jobs}</a>
                      </li>
                      <li className="mb-3">
                        <a href="privacy">{footerSection.privacy}</a>
                      </li>
                      <li className="mb-3">
                        <a href="guidelines">{footerSection.guidlines}</a>
                      </li>
                      <li className="mb-3">
                        <a href="terms">{footerSection.terms}</a>
                      </li>
                      <li className="mb-3">
                        <a href="copyright">{footerSection.copyright}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-nav-wrap text-white text-right">
                    <img
                      src="img/icons/Gxb-logo.svg"
                      alt="location map"
                      className="img-fluid mb-3"
                    />
                    <p className="mb-3">© 2020</p>
                    <p className="mb-3">GXB Ventures.</p>
                    <p className="mb-5">{footerSection.allRights}</p>

                    <div className="social-list-wrap">
                      <ul className="social-list list-inline list-unstyled">
                        <li className="list-inline-item mr-3">
                          <a href="https://www.instagram.com/acroplia/" target="_blank" rel="noopener, noreferrer" title="Instagram">
                            <img src="img/icons/instagramm.svg"></img>
                          </a>
                        </li>
                        <li className="list-inline-item mr-3">
                          <a href="https://vk.com/gxbdev" target="_blank" rel="noopener, noreferrer" title="vkontakte">
                            <img src="img/icons/vk.svg"></img>
                          </a>
                        </li>
                        <li className="list-inline-item mr-3">
                          <a href="https://www.facebook.com/acroplia" target="_blank" rel="noopener, noreferrer" title="Facebook">
                            <img src="img/icons/fb.svg"></img>
                          </a>
                        </li>
                        <li className="list-inline-item mr-3">
                          <a href="https://twitter.com/Acroplia" target="_blank" rel="noopener, noreferrer" title="Twitter">
                            <img src="img/icons/twitter.svg"></img>
                          </a>
                        </li>
                        <li className="list-inline-item mr-3">
                          <a href="https://www.youtube.com/channel/UCZ6-9FXRWvU_iL200_Z97DA?view_as=subscriber" target="_blank" rel="noopener, noreferrer" title="Youtube">
                            <img src="img/icons/youtube.svg"></img>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(Footer);