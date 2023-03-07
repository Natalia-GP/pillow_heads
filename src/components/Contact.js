const Contact = () => {
  return (
    <main>
      <section className="hero-contact"></section>
      <article className="main-article">
        <h1 className="main-title">Contacto</h1>
        <p className="main-par">
          Puedes ponerte en contacto con nosotras rellenando este formulario con
          tus datos y consultas. Te responderemos lo antes posible.
        </p>
        <p className="main-par-small">
          Todos los campos marcados con{' '}
          <span className="main-par-asterisk">*</span> son obligatorios
        </p>
      </article>
      <section className="section__form">
        <form
          className="form__label"
          action="https://adalab-server-form.herokuapp.com/"
          method="post"
        >
          <div className="form__label--name">
            <label className="form__label--text asterisk" htmlFor="fullName">
              Nombre completo
            </label>
            <input
              className="field"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Nombre..."
              required
            ></input>
          </div>
          <div className="form__label--elements">
            <div className="form__label--mail">
              <label className="form__label--text asterisk" htmlFor="email">
                Email
              </label>
              <input
                className="field form__elements--mail"
                type="email"
                id="email"
                name="email"
                placeholder="nombre.apellidos@mail.com"
                required
              ></input>
            </div>
            <div className="form__label--tel">
              <label className="form__label--text" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="field form__elements--tel"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 123456789"
              ></input>
            </div>
          </div>
          <div className="form__label--msg">
            <label className="form__label--text asterisk" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="field textarea"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="¿Qué necesitas?"
              required
            ></textarea>
            <div className="form__label--send">
              <input
                className="send__button"
                type="submit"
                id="submit"
                value="Enviar"
              ></input>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
