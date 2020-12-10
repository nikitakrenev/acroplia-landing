import React from "react";
import { GetWords } from "../../data/lang/LangStore";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from "react-redux";
import { FormInput } from "../formInput/FormInput";

const ContactSalesSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    confirm: Yup.bool().required('Required')
});

class ContactSalesForm extends React.Component {

    onSubmit(values) {
        console.log(values)
    }

    render() {
        const words = GetWords(this.props.language);
        const salesForm = words.salesForm;
        return (
            <React.Fragment>
                <section className="sales-section contact-sales pt-70 pb-70">
                    <div className="container" style={{
                        backgroundImage: "url('img/sales.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left top",
                    }}>
                        <div className="ml-lg-5 text-black pt-70">
                            <h3 className="col-lg-12 mb-0">{salesForm.title}</h3>
                            <h4 className="pt-4 mb-3 col-lg-9 col-md-12 sales-subtitle">{salesForm.subTitle}</h4>

                            <Formik
                                initialValues={{
                                    email: "",
                                    firstName: "",
                                    country: "",
                                    phone: "",
                                    describe: "",
                                    confirm: ""
                                }}
                                validationSchema={ContactSalesSchema}
                                onSubmit={values => this.onSubmit(values)}
                                render={({ errors, touched }) => (
                                    <Form >
                                        <FormInput
                                            name="email"
                                            inputComponent={EmailInputComponent}
                                            required
                                            title={salesForm.email}
                                            error={errors.email}
                                            touched={touched.email}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="firstName"
                                            inputComponent={TextInputComponent}
                                            required
                                            title={salesForm.firstName}
                                            error={errors.firstName}
                                            touched={touched.firstName}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="country"
                                            inputComponent={TextInputComponent}
                                            required
                                            title={salesForm.country}
                                            error={errors.country}
                                            touched={touched.country}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="phone"
                                            inputComponent={TextInputComponent}
                                            title={salesForm.phone}
                                            error={errors.phone}
                                            touched={touched.phone}
                                            className="mb-3 col-lg-5 col-md-12"
                                        />

                                        <FormInput
                                            name="describe"
                                            inputComponent={TextAreaInputComponent}
                                            title={salesForm.describe}
                                            error={errors.describe}
                                            touched={touched.describe}
                                            className="mb-3 col-lg-9"
                                        />


                                        <div className="col-lg-10 d-flex">
                                            <Field type="checkbox" name="confirm" id="confirm" className="confirm-checkbox mt-2"/>
                                            <div className="d-inline-block">
                                                <label htmlFor="confirm" className="grey-text col-lg-10">
                                                    {salesForm.confirm} {" "}
                                                    <a className="" href="privacy">{salesForm.privacy}</a>
                                                    {", "}
                                                    <a className="" href="terms">{salesForm.terms}</a>
                                                    {" "} {salesForm.and} {" "}
                                                    <a className="" href="guidelines">{salesForm.guides}</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                        {errors.confirm && touched.confirm && <small className="text-danger">{errors.confirm}</small>}
                                        </div>

                                        <br/>
                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-primary mt-3 ">{salesForm.submit}</button>
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
export default connect(mapStateToProps)(ContactSalesForm);

const EmailInputComponent = (props) => (
    <input type="email" className="form-control col-12 " {...props}/>
);

const SelectInputComponent = (props) => (
    <select  className="form-control col-12 custom-select" {...props}/>
);
const TextInputComponent = (props) => (
    <input className="form-control" {...props}/>
);

const TextAreaInputComponent = (props) => (
    <textarea className="form-control" rows={8} {...props} style={{
        resize: "none"
    }}/>
);

