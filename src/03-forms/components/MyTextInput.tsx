import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string
    name: string
    type?: 'text' | 'email' | 'password' | 'number'
    placeholder?: string
    [x: string]: any // for any other props
}

export const MyTextInput = ({ label, ...props }: Props) => {
    const [field, /* meta */] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            <ErrorMessage
                name={props.name}
                component="span"
                className='custom-span-error-class'
            />

            {/* Otra forma */}
            {/*{
                meta.touched && meta.error && (
                    <span className='error'>{meta.error}</span>
                )
            }*/}
        </>
    )
}
