import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

    const { onChange, resetForm, isValidEmail, formData, name, email, password, repeatPassword } = useForm({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form
                noValidate
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>El email no es válido</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={onChange}
                />
                {password.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password.trim().length > 0 && password.trim().length < 6 && <span>La contraseña debe tener al menos 6 caracteres</span>}

                <input
                    type="password"
                    placeholder="Repeat password"
                    name='repeatPassword'
                    value={repeatPassword}
                    onChange={onChange}
                />
                {password !== repeatPassword && <span>Las contraseñas no coinciden</span>}

                <button type="submit">
                    Register
                </button>

                <button type="button" onClick={resetForm}>
                    Reset
                </button>
            </form>
        </div>
    )
}
