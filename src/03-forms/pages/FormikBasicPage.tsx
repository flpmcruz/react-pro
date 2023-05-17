import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'

interface FormValues {
    firstName: string
    lastName: string
    email: string
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if (!firstName.trim())
            errors.firstName = 'First Name is required'
        else if (firstName.length > 15)
            errors.firstName = 'First Name must be less than 15 characters'

        if (!lastName.trim())
            errors.lastName = 'Last Name is required'
        else if (lastName.length > 15)
            errors.lastName = 'Last Name must be less than 15 characters'

        if (!email)
            errors.email = 'Email Required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
            errors.email = 'Invalid email address';

        return errors
    }

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        validate
    })

    return (
        <div>
            <h1>Formik Basic Page</h1>

            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lasttName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
