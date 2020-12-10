import React from "react";

export const OrgBenefits = ({priceSection}) => {
    return (
        <>
            <div className='row text-center table-text font-weight-bold bg-white'>
                <span className="col-6"></span>
                <span className="col-2">{priceSection.benefits.family}</span>
                <span className="col-2">{priceSection.benefits.education}</span>
                <span className="col-2">{priceSection.benefits.workGroup}</span>
            </div>

            <table className="table table-striped text-center">
                <thead className="container">
                <tr className='row'>
                    <th className="col-12 font-weight-bold">{priceSection.benefits.myDesk}</th>
                </tr>
                </thead>
                <tbody className="container">
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.takeNotes}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                </tr>
                <tr className='row'>
                    <th className="col-12 font-weight-bold">{priceSection.benefits.calls}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.participants}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">150</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">150</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">150</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.maximumCall}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.startCalls}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.AnyMember}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.PaidLeader}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.AnyMember}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.hqCalls}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                </tr>
                <tr className='row'>
                    <th className="col-12 font-weight-bold">{priceSection.benefits.chat}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.messageLimits}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.none}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.none}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.none}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.imageCompression}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle"/></th>
                </tr>

                <tr className='row'>
                    <th className="col-12 font-weight-bold">{priceSection.benefits.collaboration}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.notesIdeaboards}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.realtimeCollaboration}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.Guests}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                </tr>

                <tr className='row'>
                    <th className="col-12 font-weight-bold">{priceSection.benefits.Storage}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.AcropliaDocs}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.Drive}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.TBMember}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.MaximumData}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits._20GB}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.Unlimited}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits._1TB}</th>
                </tr>

                <tr className='row'>
                    <th className="col-12 font-weight-bold">{priceSection.benefits.SecuritySupport}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.Security}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.SSL_AES}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.SSL_AES}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center">{priceSection.benefits.SSL_AES}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.encryption}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                </tr>

                <tr className='row'>
                    <th className="col-12 font-weight-bold">{priceSection.benefits.MarketingAffiliates}</th>
                </tr>
                <tr className='row'>
                    <th className="col-6 text-left">{priceSection.benefits.FreeGuides}</th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle"/></th>
                    <th className="col-2 d-flex align-items-center justify-content-center"><div className="table-circle colored-circle"/></th>
                </tr>
                </tbody>
            </table>
        </>
    )
}
