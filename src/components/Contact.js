import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = (props) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

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
  };

  return (
    <>
      <section className="contact__image"></section>
      <article className="contact__article">
        <h1 className="contact__article__title">Contacto</h1>
        <p className="contact__article__text">
          Puedes ponerte en contacto con nosotras rellenando este formulario con
          tus datos y consultas. Te responderemos lo antes posible.
        </p>
        <p className="contact__article__comment">
          Todos los campos marcados con{' '}
          <span className="contact__article__comment__asterisk">*</span> son
          obligatorios
        </p>
      </article>
      <section className="contact">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact__form"
          action="https://adalab-server-form.herokuapp.com/"
          method="post"
        >
          <div className="contact__form__name">
            <label
              className="contact__form__name__label asterisk"
              htmlFor="fullName"
            >
              Nombre completo
            </label>
            <input
              className="contact__form__name__input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Nombre..."
              required
            ></input>
          </div>
          <div className="contact__form__mailTel">
            <div className="contact__form__mailTel__mail">
              <label
                className="contact__form__mailTel__mail__label asterisk"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="contact__form__mailTel__mail__input"
                type="email"
                id="email"
                name="email"
                placeholder="nombre.apellidos@mail.com"
                required
              ></input>
            </div>
            <div className="contact__form__mailTel__tel">
              <label
                className="contact__form__mailTel__tel__label"
                htmlFor="phone"
              >
                Teléfono
              </label>
              <input
                className="contact__form__mailTel__tel__input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 123456789"
              ></input>
            </div>
          </div>
          <div className="contact__form__msg">
            <label
              className="contact__form__msg__label asterisk"
              htmlFor="message"
            >
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
              <input
                className="contact__form__msg__send__input"
                type="submit"
                id="submit"
                value="Enviar"
              ></input>
            </div>
          </div>
          <p className="contact__form__msg__send__status">
            {props.statusMessage}
          </p>
        </form>
      </section>
    </>
  );
};

export default Contact;
