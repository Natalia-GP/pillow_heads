import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Input from './Input';
const Form = (props) => {
  const form = useRef();
  const regTel = new RegExp(/^[0-9]+$/);
  function validateTel(input) {
    return regTel.test(input);
  }
  const handleInputTel = (value) => {
    props.setTelInput(value);
  };
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    if (props.telInput) {
      if (!validateTel(props.telInput)) {
        props.setTelInputMessage('Teléfono no válido');
      } else {
        emailjs
          .sendForm(
            'service_e1vnqtu',
            'template_g7fxu39',
            form.current,
            '_yHrBbIBxEQvjsaAu'
          )
          .then(
            (result) => {
              props.setStatusMessage('¡Email enviado correctamente!');
            },
            (error) => {
              props.setStatusMessage('Por favor vuelve a intentarlo.');
            }
          );
      }
    }
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="contact__form"
      // action="https://adalab-server-form.herokuapp.com/"
      method="post"
    >
      <div className="contact__form__name">
        <label
          className="contact__form__name__label asterisk"
          htmlFor="fullName"
        >
          Nombre completo
        </label>
        <Input
          className="contact__form__name__input"
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Nombre..."
          required={true}
        />
      </div>
      <div className="contact__form__mailTel">
        <div className="contact__form__mailTel__mail">
          <label
            className="contact__form__mailTel__mail__label asterisk"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            className="contact__form__mailTel__mail__input"
            type="email"
            id="email"
            name="email"
            placeholder="nombre.apellidos@mail.com"
            required={true}
          />
        </div>
        <div className="contact__form__mailTel__tel">
          <label className="contact__form__mailTel__tel__label" htmlFor="phone">
            Teléfono
          </label>
          <Input
            className="contact__form__mailTel__tel__input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ej: 123456789"
            value={props.telInput}
            handleInputTel={handleInputTel}
          />
          <p className="contact__form__mailTel__status">
            {props.telInputMessage}
          </p>
        </div>
      </div>
      <div className="contact__form__msg">
        <label className="contact__form__msg__label asterisk" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="contact__form__msg__textarea"
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="¿Qué necesitas?"
          required
        ></textarea>
        <div className="contact__form__msg__send">
          <Input
            className="contact__form__msg__send__input"
            type="submit"
            id="submit"
            value="Enviar"
          />
        </div>
      </div>
      <p className="contact__form__msg__send__status">{props.statusMessage}</p>
    </form>
  );
};

export default Form;
