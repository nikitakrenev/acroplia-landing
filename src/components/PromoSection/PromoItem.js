import React from "react";

export const PromoItem = ({icon, title, isSecurity, description, className = "col-md-6 col-lg-6 col-xl-3"}) => {
    return (
        <div className= {className + " promo-item"}>
            <div
                style={isSecurity && {textAlign: 'center'}}
                className="card single-promo single-promo-hover single-promo-card white-bg p-4 h-100"
            >
                <span style={{display: 'block'}} className={icon + (isSecurity ? "" : " pb-2")}/>
                <div className={"d-flex" + (isSecurity ? "" : " pt-2")} style={{alignItems: 'center'}}>
                    <h5 className="header-title">{title}</h5>
                </div>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}
