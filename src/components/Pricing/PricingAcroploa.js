import React from "react";
import { GetWords } from "../../data/lang/LangStore";
import { connect } from "react-redux";
import { OrgBenefits } from "./orgBenefits";
import { IndividualBenefits } from "./individualBenefits";
import PricingSubHeader from "./pricingSubHeader";
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

class PricingAcroplia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forOrg: false,
      annually: false
    }

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
    const isPricing = window.location.pathname.includes('/pricing');

    const handleCheck = () => {
      this.setState({
        forOrg: !this.state.forOrg
      })
    }

    const handleCheckAnnually = () => {
      this.setState({
        annually: !this.state.annually
      })
    }

    const Switcher = withStyles({
      switchBase: {
        color: '#0A4CB0',
        '$track': {
          backgroundColor: '#ADADAD',
        },
        '&$checked': {
          color: '#287EFF',
        },
        '&$checked + $track': {
          backgroundColor: '#D4E8FF',
        },
      },
      checked: {},
      track: {},
    })(Switch);


    const pricePackages = this.state.forOrg ? priceSection.packages.filter(item => !!item.isOrg) : priceSection.packages.filter(item => !item.isOrg) || [];
    return (
      <React.Fragment>
        <div className="overflow-hidden">
          <section
            id="pricing"
            className={"package-section " + this.props.className + (this.props.bgColor && this.props.bgColor === 'gray' ? ' gray-light-bg' : ' background-shape-right')} >
            <div className="text-center pb-4 price-sub-title">{priceSection.freePriceTitle}</div>
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
                  <label className={!this.state.forOrg ? "label-checked-dark" : "label-unchecked"} htmlFor="customSwitch1">{priceSection.individualButtonTitle}</label>
                  <Switcher checked={this.state.forOrg} onChange={handleCheck} name="checkedA" />
                  <label className={this.state.forOrg ? "label-checked-light" : "label-unchecked"} htmlFor="customSwitch1">{"Communities"}</label>
                </div>


                <div className="custom-control custom-switch d-flex align-items-center justify-content-center pricing-switch pt-4 pb-4">
                  <label className={!this.state.annually ? "label-checked-dark" : "label-unchecked"} htmlFor="customSwitch2">{priceSection.monthlyBillButtonTitle}</label>
                  <Switcher checked={this.state.annually} onChange={handleCheckAnnually} name="checkedA" />
                  <label className={this.state.annually ? "label-checked-light" : "label-unchecked"} htmlFor="customSwitch2">{priceSection.anuallyBillButtonTitle}</label>
                </div>
              </div>
            <div className="container">
              <div className="row justify-content-center">
                {pricePackages.map((_package, index) => {
                  const link = index === 0 ? "https://acroplia.com/login" : "/pricing";
                  return (
                    <div className="col-lg-4 col-xl-4 col-md-12 mb-5 pricing-item" key={index}>
                      <div
                        className={
                          "card text-center single-pricing-pack " +
                          (_package.isFeatured ? "popular-price" : "")
                        }
                      >
                        {_package.profit &&
                          <img
                              src="img/Group946.png"
                              alt="pricing img"
                              className="price-profit"
                          />
                        }
                        {_package.profitYear && this.state.annually &&
                        <img
                            src="img/Group946.png"
                            alt="pricing img"
                            className="price-profit"
                        />
                        }
                        <div className="pt-3">
                          <h5 className="card-title">{_package.license}</h5>
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
                          <div className="d-flex flex-md-column justify-content-center">
                            <div className="h1 text-center mb-0">
                              {_package.coloredPrice
                                  ? <span className="price color-primary h3">{this.state.annually ? _package.yearPrice : _package.price}</span>
                                  : <span className="price" style={{color: '#262626'}}>
                                      {this.state.annually ? _package.yearPrice : _package.price}
                                    </span>
                              }
                              {index !== 0 && <span className="price-month-tag">{"month"}</span>}
                            </div>
                            <span className="sub-price">{this.state.annually ? _package.yearPriceMember : _package.priceMember}</span>
                          </div>
                        </div>

                        <div className="card-body d-flex flex-column justify-content-between align-items-center pl-3 pr-3">
                          <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
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
                                    href={link}
                                    className={
                                      "btn mb-3 " +
                                      (_package.isFeatured
                                          ? "solid-btn"
                                          : "outline-btn")
                                    }
                                    style={{width: '143px'}}
                                    onClick={(event => this.showBenefits(event))}
                                >
                                  {index === 0 ? priceSection.signIn: priceSection.toTry}
                                </a>
                                :
                                <>
                                  <a
                                      href={link}
                                      className={
                                        "btn mb-3 hide-on-sm " +
                                        (_package.isFeatured
                                            ? "solid-btn"
                                            : "outline-btn")
                                      }
                                      style={{width: '143px'}}
                                      onClick={(event => this.showBenefits(event))}
                                  >
                                    {index === 0 ? priceSection.signIn: priceSection.toTry}
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
                                    {priceSection.signIn}
                                  </a>
                                </>
                          }
                          {(_package.addFeatures)
                              ? <span className="mb-2 color-primary">{_package.addFeatures}</span>
                              : <div style={{height: '33.5px'}}></div>
                          }
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {!isPricing && (
                  <div className="more-details">
                    <a href="/pricing" className="price-more-details">
                      {"See more details"}
                    </a>
                  </div>
              )}
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
