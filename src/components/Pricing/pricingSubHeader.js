import React from "react";
import { GetWords } from "../../data/lang/LangStore";
import { connect } from "react-redux";
import { OrgBenefits } from "./orgBenefits";
import { IndividualBenefits } from "./individualBenefits";

class PricingSubHeader extends React.Component {

    render() {
        const words = GetWords(this.props.language);
        const priceSection = words.pricing;

        return (
            <div className="text-center light-blue-bg pt-2 pb-2">{priceSection.freePriceTitle}</div>
        );
    }
}
const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(PricingSubHeader);
