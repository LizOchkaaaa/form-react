import React from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import classes from './MyTestForm.module.css';

export default function MyTestForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(formDataSchema),
        mode: 'onChange',
    });

    const formDataSchema = yup.object().shape({
        email: yup.string()
            .typeError('Не стока')
            .required('Обязательно для заполнения')
            .email('Не похоже на имаил'),
        password: yup
            .string()
            .required('Обязательно для заполнения')
            .min(6, 'Длина пароля 6 символдов'),
        age: yup.string()
            .typeError('Не число')
            .positive('Положительно число')
            .integer('Целое')
    });

    const customSendData = (data) => {
        console.log(data);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(customSendData)}>
            <h1 className={classes.header}>Моя первая форма на хуках</h1>

            <label htmlFor="email">
                <input type="text" id={"email"} name={"email"} ref={register} />
                {errors.email?.message}
            </label>

            <label htmlFor="password">
                <input type="password" id={"password"} name={"password"} ref={register} />
                {errors.password?.message}
            </label>

            <label htmlFor="age">
                <input type="age" id={"email"} name={"age"} ref={register} />
                {errors.age?.message}
            </label>

            <button type={'submit'}>Отправить</button>
        </form>
    )
}