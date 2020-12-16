import React from "react";
import { connect } from "react-redux";
import {JoinButton} from "../JoinButton/JoinButton";
import LangSelect from "../selectLang/LanguageSelect";
import {GetWords} from "../../data/lang/LangStore";

class Header extends React.Component {
  render() {
    const words = GetWords(this.props.language);
    const headerSection = words.header;
    const isHomeHeader = this.props.homePage;
    return (
      <React.Fragment>
        <header className={"header"}>
          <nav className={"navbar navbar-expand-lg fixed-top " + (this.props.bgColor && this.props.bgColor === 'white' ? 'custom-nav white-bg ' : 'bg-transparent ') + this.props.className}>
            <div className="container">
              <a className="navbar-brand" href="/" rel="noopener noreferrer">
                <img
                  src={this.props.bgColor && this.props.bgColor === 'white' ? "img/logo-color-1x.png" : "img/icons/Acroplia.svg"}
                  width="100"
                  alt="logo"
                  className="img-fluid"
                />
              </a>
              <div className="navbar-toggler">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="ti-menu"/>
                </button>
                {/*<LangSelect className="ml-2" smallSize/>*/}
              </div>
              <div
                className="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item d-flex align-items-center">
                        <a className="nav-link" href="home">
                          {headerSection.home}
                        </a>
                    </li>
                  <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" href="security">
                      {headerSection.security}
                    </a>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <a className="nav-link page-scroll" href={isHomeHeader ? "#pricing" : "pricing" }>
                      {headerSection.pricing}
                    </a>
                  </li>
                  {/*<li className="nav-item d-flex align-items-center">*/}
                  {/*  <a className="nav-link" href="faq">*/}
                  {/*    {headerSection.faq}*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  <li className="nav-item d-flex align-items-center">
                    <a className="nav-link page-scroll" href={isHomeHeader ? "#about" : "home#about" }>
                      {headerSection.about}
                    </a>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" href="https://acroplia.com/login" target="_blank" rel="noopener noreferrer">
                      {headerSection.signIn}
                    </a>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <JoinButton
                      target="https://acroplia.com/join"
                      title={headerSection.joinButton}
                      className="ml-sm-n1 ml-lg-3"
                      ttleClass="nav-link"
                    />
                  </li>
                  {/*<LangSelect className="ml-4 list-select-lang"/>*/}
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="sub-header">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ language: state.language });

export default connect(mapStateToProps)(Header);
