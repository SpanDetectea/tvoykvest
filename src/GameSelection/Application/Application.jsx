import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import './Application.css';

const Application = () => {
    const [messageSend, setmessageSend] = useState(false);
    useEffect(() => {
        //   first;

        return () => {
            // second;
        };
    }, [messageSend]);

    const sendForm = (e) => {
        const fetchResp = fetch('http://tvoykvest.ua', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        })
            .then(response => response.text())
            .then(response => {
                setmessageSend(true);
            })
    }
    return (
        <div className="wrapper__application">
            <h1>Оставтье свои данные, что-бы мы могли связаться с вами</h1>
            <Formik
                initialValues={{ text: '', tel: '', textarea: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.text) {
                        errors.text = 'Необходимо заполнить';
                    }
                    if (!values.tel) {
                        errors.tel = 'Необходимо заполнить';
                    } else if (/[A-zА-я]/.test(values.tel)) {
                        errors.tel = 'Поле содержит недопустимые данные для ввода';
                    }
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    sendForm(values);
                    actions.resetForm({
                        values: {
                            text: '',
                            tel: '',
                            textarea: ''
                        }
                    });
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            {!touched.text && !errors.text && <div className="error__form">{errors.text}</div>}
                            <label htmlFor="">Ваше имя:</label>
                            <input
                                type="text"
                                name="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.text}
                                placeholder="Ваше имя"
                                maxLength={30}
                                required
                            />
                            {touched.text && errors.text && <div className="error__form">{errors.text}</div>}
                        </div>
                        <div>
                            <label htmlFor="">Телефонный номер:</label>
                            <input
                                type="tel"
                                name="tel"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tel}
                                placeholder="Телефон"
                                minLength={11}
                                required
                            />
                            {touched.tel && errors.tel && <div className="error__form">{errors.tel}</div>}
                        </div>
                        <div>
                            <label htmlFor="">Комментарии:</label>
                            <input
                                type="textarea"
                                name="textarea"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.textarea}
                                placeholder="Комментарии"
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Отправить
                        </button>
                    </form>
                )}
            </Formik>
            {messageSend && <div>
                <p>Мы получили ваше сообщения и свяжемся с вами в ближайщее время</p>
                <button>ok</button>
            </div>}
            
        </div>
    );
}

export default Application;