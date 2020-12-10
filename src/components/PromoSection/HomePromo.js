import React from "react";
import { connect } from "react-redux";
import { GetWords } from "../../data/lang/LangStore";

class HomePromo extends React.Component {

  render() {
    const words = GetWords(this.props.language);
    const promoSection = words.promo;
    return (
        <React.Fragment>
          <section className={"promo-section ptb-100 " + (this.props.removeTopMargin ? '' : 'mt-5')}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8">
                  <div className="section-heading text-center mb-5">
                    <h2>{promoSection.title}</h2>
                    <p className="lead">{promoSection.description}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {(promoSection.items || []).map(item => (
                  <div className="col-lg-3 col-sm-6 mb-md-4" key={item.title}>
                    <div className="card single-promo-card single-promo-hover">
                      <div className="card-body promo-item">
                        <div className="pb-2">
                          <span className={item.icon + " icon-md color-primary"}></span>
                        </div>
                        <div className="pt-2 pb-3">
                          <h5>{item.title}</h5>
                          <p className="text-muted mb-0">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HomePromo);
