import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

const requiredValues: { [key: string]: any } = {};
const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string()
    for (const rule of input.validations) {
        if (rule.type === 'required')
            schema = schema.required(rule.message);

        if (rule.type === 'minLength')
            schema = schema.min((rule as any).value || 3, rule.message);

        if (rule.type === 'email')
            schema = schema.email(rule.message);

        // TODO: Add more rules
    }
    requiredValues[input.name] = schema;
};
const validationSchema = Yup.object({ ...requiredValues });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form noValidate>
                        {formJson.map(({ type, name, placeholder, label, options }) => {
                            if (type === 'text' || type === 'email' || type === 'password') {
                                return (
                                    <MyTextInput
                                        key={name}
                                        label={label}
                                        name={name}
                                        type={type as any}
                                        placeholder={placeholder}
                                    />)
                            } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        label={label}
                                        name={name}
                                    >
                                        <option value="">Select a option</option>
                                        {
                                            options?.map(({ id, label }) => (
                                                <option key={id} value={id}>{label}</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }

                            throw new Error('Unknown type: ' + type);
                        })}

                        <button type="submit">Submit</button>
                    </Form>
                )
                }
            </Formik>
        </div>
    );
}
