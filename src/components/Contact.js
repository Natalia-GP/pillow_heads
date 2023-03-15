import Form from './Form';

const Contact = (props) => {
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
        <Form
          statusMessage={props.statusMessage}
          setStatusMessage={props.setStatusMessage}
          telInput={props.telInput}
          setTelInput={props.setTelInput}
          telInputMessage={props.telInputMessage}
          setTelInputMessage={props.setTelInputMessage}
        ></Form>
      </section>
    </>
  );
};

export default Contact;
