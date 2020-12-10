import React from "react";
import { GetWords } from "../../data/lang/LangStore";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from "react-redux";
import { FormInput } from "../formInput/FormInput";

const CopyrightComplaintSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    confirm1: Yup.bool().required('Required'),
    confirm2: Yup.bool().required('Required'),
    confirm3: Yup.bool().required('Required')
});

class CopyrightComplaintForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        const words = GetWords(this.props.language);
        const copyrightComplaint = words.copyrightComplaint;
        return (
            <React.Fragment>
                <section className="sales-section contact-sales pt-70 pb-70">
                    <div className="container" style={{
                        // backgroundImage: "url('img/sales.svg')",
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "left top",
                    }}>
                        <div className="ml-lg-5  text-black">
                            <h3 className="col-lg-12 mb-5 pt-70">{copyrightComplaint.title}</h3>
                            <p className="col-lg-12 font-20">{copyrightComplaint.firstMessage}{" "}<span className="font-weight-bold">{copyrightComplaint.firstMessageStrongPart}</span></p>
                            <p className="col-lg-12 font-20">{copyrightComplaint.secondMessage}</p>

                            <Formik
                                initialValues={{
                                    email: "",
                                    name: "",
                                    organization: "",
                                    titleField: "",
                                    owns: "",
                                    originalWork: "",
                                    acropliaWork: "",
                                    confirm1: "",
                                    confirm2: "",
                                    confirm3: "",
                                }}
                                validationSchema={CopyrightComplaintSchema}
                                onSubmit={values => this.onSubmit(values)}
                                render={({ errors, touched }) => (
                                    <Form >
                                        <FormInput
                                            name="email"
                                            inputComponent={EmailInputComponent}
                                            required
                                            title={copyrightComplaint.email}
                                            error={errors.email}
                                            touched={touched.email}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="name"
                                            inputComponent={TextInputComponent}
                                            title={copyrightComplaint.name}
                                            error={errors.name}
                                            touched={touched.name}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="organization"
                                            inputComponent={TextInputComponent}
                                            title={copyrightComplaint.organization}
                                            error={errors.organization}
                                            touched={touched.organization}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="titleField"
                                            inputComponent={TextInputComponent}
                                            title={copyrightComplaint.titleField}
                                            error={errors.titleField}
                                            touched={touched.titleField}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="owns"
                                            inputComponent={TextInputComponent}
                                            title={copyrightComplaint.owns}
                                            error={errors.owns}
                                            touched={touched.owns}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="originalWork"
                                            inputComponent={TextAreaInputComponent}
                                            title={copyrightComplaint.originalWork}
                                            error={errors.originalWork}
                                            touched={touched.originalWork}
                                            className="mb-3 col-lg-12"
                                        />

                                        <FormInput
                                            name="acropliaWork"
                                            inputComponent={TextInputComponent}
                                            title={copyrightComplaint.AcropliaWork}
                                            error={errors.acropliaWork}
                                            touched={touched.acropliaWork}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <div className="col-lg-12 d-flex">
                                            <Field type="checkbox" name="confirm1" id="confirm1"  className="confirm-checkbox mt-2"/>
                                            <label htmlFor="confirm1" className="grey-text col-lg-12">
                                                {copyrightComplaint.confirm1} {" "}
                                                <a className="" href="privacy">{copyrightComplaint.privacy}</a>
                                                {", "}
                                                <a className="" href="terms">{copyrightComplaint.terms}</a>
                                                {" "} {copyrightComplaint.and} {" "}
                                                <a className="" href="guidelines">{copyrightComplaint.guides}</a>
                                            </label>
                                        </div>
                                        {errors.confirm1 && touched.confirm1 && <p className="text-danger col-lg-12 mb-0">{errors.confirm1}</p>}

                                        <div className="col-lg-12 d-flex mt-3">
                                            <Field type="checkbox" name="confirm2" id="confirm2" className="confirm-checkbox mt-2"/>
                                            <label htmlFor="confirm2" className="grey-text col-lg-12">
                                                {copyrightComplaint.confirm2} {" "}
                                            </label>
                                        </div>
                                        {errors.confirm2 && touched.confirm2 && <p className="text-danger col-lg-12 mb-0">{errors.confirm2}</p>}

                                        <div className="col-lg-12 d-flex mt-3">
                                            <Field type="checkbox" name="confirm3" id="confirm3" className="confirm-checkbox mt-2"/>
                                            <label htmlFor="confirm3" className="grey-text col-lg-12">
                                                {copyrightComplaint.confirm3} {" "}
                                            </label>
                                        </div>
                                        {errors.confirm3 && touched.confirm3 && <p className="text-danger col-lg-12 mb-0" >{errors.confirm3}</p>}

                                        <div className="col-lg-12 mt-3">
                                            <button type="submit" className="btn btn-primary ">{copyrightComplaint.submit}</button>
                                        </div>

                                    </Form>
                                )}
                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({ language: state.language });
export default connect(mapStateToProps)(CopyrightComplaintForm);

const EmailInputComponent = (props) => (
    <input type="email" className="form-control" {...props}/>
);
const TextInputComponent = (props) => (
    <input className="form-control" {...props}/>
);

const TextAreaInputComponent = (props) => (
    <textarea className="form-control" rows={5} {...props} style={{
        resize: "none"
    }}/>
);

const FileInputComponent = (props) => (
    <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFileInput"/>
        <label className="custom-file-label" htmlFor="customFileInput">Seleccionar Archivo</label>
    </div>
);

