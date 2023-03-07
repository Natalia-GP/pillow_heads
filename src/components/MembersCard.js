const MembersCard = ({ eachPillow, index }) => {
    return (
        <article className={eachPillow.class} key={index}>
            <img className="img" src={eachPillow.photo} alt={eachPillow.name} />
            <div className="div--text">
                <h3 className="name">{eachPillow.name}</h3>
                <p className="text">{eachPillow.description}</p>
                <ul className="social">
                    <li className="dots">
                        <a href={eachPillow.twitter} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-twitter icon"></i>
                        </a>
                    </li>
                    <li className="dots">
                        <a href={eachPillow.linkedin} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in icon"></i>
                        </a>
                    </li>
                    <li className="dots">
                        <a href={eachPillow.github} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-alt icon"></i>
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${eachPillow.email}`}>
                            <i className="fa-solid fa-envelope icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </article >
    )
};
export default MembersCard