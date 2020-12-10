import React from "react";
import { GetWords } from "../../data/lang/LangStore";
import { connect } from "react-redux";
import { OrgBenefits } from "./orgBenefits";
import { IndividualBenefits } from "./individualBenefits";

class PricingAcroplia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forOrg: false,
      anually: false
    }

  }

  handleCheck() {
    this.setState({
      forOrg: !this.state.forOrg
    })
  }

  handleCheckAnually() {
    this.setState({
      anually: !this.state.anually
    })
  }

  showBenefits(event) {
    if (this.props.isPricingPage) {
      event.preventDefault();
      event.stopPropagation();
      const collapsedContent = document.getElementById("collapseBenefits");
      if (collapsedContent && !collapsedContent.classList.contains("show")) {
        const btn = document.getElementById("collapse-btn");
        const position = btn.offsetTop + 100;
        btn.click();
        setTimeout(() => {
          position && window.scrollTo && window.scrollTo({
            top: position,
            behavior: "smooth"
          });
        }, 200)
      }
    }
  }

  render() {
    const {isPricingPage} = this.props;
    const words = GetWords(this.props.language);
    const priceSection = words.pricing;

    const pricePackages = this.state.forOrg ? priceSection.packages.filter(item => !!item.isOrg) : priceSection.packages.filter(item => !item.isOrg) || [];
    return (
      <React.Fragment>
        <div className="overflow-hidden">
          <section
            id="pricing"
            className={"package-section " + this.props.className + (this.props.bgColor && this.props.bgColor === 'gray' ? ' gray-light-bg' : ' background-shape-right')} >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="section-heading text-center mb-5">
                    {this.props.showTitle && this.props.showTitle === true && (
                      <span className="badge badge-primary badge-pill">

                      </span>
                    )}
                    {!isPricingPage
                        ? <h2 className={"pt-4"}>
                          {priceSection.title}
                        </h2>
                        : <h4>{priceSection.subTitle}</h4>
                    }
                  </div>
                </div>
              </div>
            </div>

              <div className={"row justify-content-center mb-5 price-switch ml-4 mr-4 " + (isPricingPage ? "light-blue-bg" : "")}>
                <div className="custom-control custom-switch d-flex align-items-center justify-content-center pricing-switch pt-4 pb-4">
                  <label className={!this.state.forOrg ? " blue-dark" : ""} htmlFor="customSwitch1">{priceSection.individualButtonTitle}</label>
                  <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={() => this.handleCheck()} checked={this.state.forOrg}/>
                  <label className={"custom-control-label ml-5 " + (this.state.forOrg ? " blue-dark" : "")} htmlFor="customSwitch1">{priceSection.organizationButtonTitle}</label>
                </div>


                <div className="custom-control custom-switch d-flex align-items-center justify-content-center pricing-switch pt-4 pb-4">
                  <label className={!this.state.anually ? " blue-dark" : ""} htmlFor="customSwitch2">{priceSection.monthlyBillButtonTitle}</label>
                  <input type="checkbox" className="custom-control-input" id="customSwitch2" onChange={() => this.handleCheckAnually()} checked={this.state.anually}/>
                  <label className={"custom-control-label ml-5 " + (this.state.anually ? " blue-dark" : "")} htmlFor="customSwitch2">{priceSection.anuallyBillButtonTitle}</label>
                </div>
              </div>
            <div className="container">
              <div className="row justify-content-center">
                {pricePackages.map((_package, index) => {
                  return (
                    <div className="col-lg-4 col-xl-4 col-md-12 mb-5 pricing-item" key={index}>
                      <div
                        className={
                          "card text-center single-pricing-pack " +
                          (_package.isFeatured ? "popular-price" : "")
                        }
                      >
                        <div className="pt-4">
                          <h5>{_package.license}</h5>
                        </div>
                        <div className="pricing-img mt-4">
                          {(_package.isOrg) ? <img
                              src="img/price-man.svg"
                              alt="pricing img"
                              className="img-fluid"
                          /> :
                              <img
                                  src="img/single-price-man.svg"
                                  alt="pricing img"
                                  className="img-fluid"
                              />
                          }
                        </div>
                        <div className="card-header py-4 border-0 pricing-header">
                          <div className="d-flex justify-content-center">
                            <div className="h1 text-center mb-0">
                              {_package.coloredPrice
                                  ? <span className="price color-primary h3">{this.state.anually ? _package.yearPrice : _package.price}</span>

                                  : <span className="price">
                                    {this.state.anually ? _package.yearPrice : _package.price}
                                  </span>}

                            </div>
                          </div>
                        </div>

                        <div className="card-body d-flex flex-column justify-content-between pl-3 pr-3">
                          {/*<p className="mb-5 mb-md-0"/>*/}
                          {/*{(_package.addFeatures) ? <div className="mb-2 color-primary">*/}
                          {/*  <span>{_package.addFeatures}</span>*/}
                          {/*</div> : <p className="mb-5 mb-md-0"/>}*/}

                          <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                            {(_package.addFeatures) && <li className="mb-2 color-primary">{_package.addFeatures}</li>}

                            {_package.subPrice && _package.subPrice.map((_subPrice, index, array) => {
                              const className = index === array.length-1 ? "mb-2 mt-n2" : "";
                              return <li className={className} key={_subPrice}>{_subPrice}</li>
                            })}

                            {(_package.features || []).map(feature => {
                              return <li className="mb-2" key={feature}>{feature}</li>;
                            })}
                          </ul>

                          {
                            !isPricingPage ?
                                <a
                                    href="/pricing"
                                    className={
                                      "btn mb-3 " +
                                      (_package.isFeatured
                                          ? "solid-btn"
                                          : "outline-btn")
                                    }
                                    onClick={(event => this.showBenefits(event))}
                                >
                                  {priceSection.learnMore}
                                </a>
                                :
                                <>
                                  <a
                                      href="/pricing"
                                      className={
                                        "btn mb-3 hide-on-sm " +
                                        (_package.isFeatured
                                            ? "solid-btn"
                                            : "outline-btn")
                                      }
                                      onClick={(event => this.showBenefits(event))}
                                  >
                                    {priceSection.learnMore}
                                  </a>

                                  <a
                                      href={this.state.forOrg ? "/img/org_list.pdf" : "/img/individual_list.pdf"}
                                      target="_blank"
                                      className={
                                        "btn mb-3 d-md-none " +
                                        (_package.isFeatured
                                            ? "solid-btn"
                                            : "outline-btn")
                                      }
                                  >
                                    {priceSection.learnMore}
                                  </a>
                                </>
                          }

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {isPricingPage && <div className="mt-5">

                <div
                  className="font-weight-bold text-center collapsed d-flex mb-4 justify-content-center hide-on-sm"
                  id={"collapse-btn"}
                  data-toggle="collapse"
                  data-target="#collapseBenefits"
                  aria-expanded="false"
                  aria-controls="collapseBenefits"
                >
                  <span className="benefits-button mr-4">{priceSection.benefitsComparisonList}</span>
                  <img
                    className="collapse-icon"
                    src="img/up.svg"
                  />
                </div>

                <div
                    className="font-weight-bold text-center collapsed d-flex mb-4 justify-content-center d-md-none"
                >
                  <span className="">
                    <a
                        className="benefits-button"
                        href={this.state.forOrg ? "/img/org_list.pdf" : "/img/individual_list.pdf"}
                        target="_blank"
                    >

                    {priceSection.benefitsComparisonList}
                    </a>
                  </span>
                </div>

                <div className="collapse hide-on-sm" id="collapseBenefits" style={{paddingTop: "1px"}}>
                  {this.state.forOrg
                    ? <OrgBenefits priceSection={priceSection}/>
                    : <IndividualBenefits priceSection={priceSection}/>}
                </div>
              </div>}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(PricingAcroplia);
