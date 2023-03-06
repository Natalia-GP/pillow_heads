const Members = (props) => {
  return (
    <article className={props.class}>
      <img className="img" src={props.photo} alt={props.name} />

      <div className="div--text">
        <h3 className="name">{props.name}</h3>
        <p className="text">{props.description}</p>
        <ul className="social">
          <li className="dots">
            <a href={props.twitter} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter icon"></i>
            </a>
          </li>
          <li className="dots">
            <a href={props.linkedin} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in icon"></i>
            </a>
          </li>
          <li className="dots">
            <a href={props.github} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github-alt icon"></i>
            </a>
          </li>
          <li>
            <a href={`mailto:${props.email}`}>
              <i className="fa-solid fa-envelope icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};
export default Members;
