import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput } from '../components'

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    respeatPassword: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required').min(3, 'Must be at least 3 characters'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup.string().required('Required').min(6, 'Must be at least 6 characters'),
                    respeatPassword: Yup.string().required('Required').equals([Yup.ref('password')], 'Passwords must match'),
                })}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {
                    ({ handleReset }) => (
                        <Form noValidate>
                            <MyTextInput
                                label="First Name"
                                name="name"
                                type="text"
                                placeholder="FirstName"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />

                            <MyTextInput
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />

                            <MyTextInput
                                label="Repeat Password"
                                name="respeatPassword"
                                type="password"
                                placeholder="Repeat Password"
                            />

                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
