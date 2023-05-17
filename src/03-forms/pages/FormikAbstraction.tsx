import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput, MySelect, MyCheckbox } from '../components'
import '../styles/styles.css'

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction Page</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    terms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string().required('Required')
                        .notOneOf(['other'], 'Other is not a valid job type')
                        .oneOf(['designer', 'development', 'product'], 'Invalid Job Type')
                })}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {
                    (formik) => (
                        <Form >
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder="FirstName"
                            />

                            <MyTextInput
                                label="lastName"
                                name="lastName"
                                type="text"
                                placeholder="LastName"
                            />

                            <MyTextInput
                                label="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </MySelect>

                            <MyCheckbox label="Term & Conditions" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
