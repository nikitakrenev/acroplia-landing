import React from "react";
import {connect} from "react-redux";
import _data from "../../data";
import {PromoItem} from "./PromoItem";
import {GetWords} from "../../data/lang/LangStore";

class PromoSection extends React.Component {
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
        const securityPromoSection = words.securityPromo;
        return (
            <React.Fragment>
                <section className="promo-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9 col-md-10">
                                <div className="section-heading text-center mb-5 security-title">
                                    <h2>{securityPromoSection.promoTitle}</h2>
                                    <p className="lead">{securityPromoSection.promoDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row equal">
                            {(securityPromoSection.items || []).map(item => {
                                return (
                                    <PromoItem
                                        isSecurity
                                        className="col-lg-4 col-md-4"
                                        key={item.title}
                                        title={item.title}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    state
}))(PromoSection);
