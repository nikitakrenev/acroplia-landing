import React from "react";
import {connect} from "react-redux";
import _data from "../../data";
import {PromoItem} from "./PromoItem";
import {GetWords} from "../../data/lang/LangStore";

class PromoSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            promo: {}
        };
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */

        this.setState({
            promo: _data.promo
        });
    }

    render() {
        const words = GetWords(this.props.language);
        const promoSection = words.promo;
        return (
            <React.Fragment>
                <section className="promo-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>{promoSection.title}</h2>
                                    <p className="lead">{promoSection.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row equal">
                            {(promoSection.items || []).map(item => {
                                return (
                                    <PromoItem
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
const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(PromoSection);
