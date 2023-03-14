const MembersCard = ({ eachPillow, index }) => {
    return (
        <article className={`${eachPillow.class} members__article`}  key={index}>
            <img className="members__article__img" src={eachPillow.photo} alt={eachPillow.name} />
            <div className="members__article__div">
                <h3 className="members__article__div__name">{eachPillow.name}</h3>
                <p className="members__article__div__text">{eachPillow.description}</p>
                <ul className="members__socials">
                    <li className="members__socials__items">
                        <a href={eachPillow.twitter} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-twitter members__socials__items__icon"></i>
                        </a>
                    </li>
                    <li className="members__socials__items">
                        <a href={eachPillow.linkedin} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in members__socials__items__icon"></i>
                        </a>
                    </li>
                    <li className="members__socials__items">
                        <a href={eachPillow.github} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github-alt members__socials__items__icon"></i>
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${eachPillow.email}`}>
                            <i className="fa-solid fa-envelope members__socials__items__icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </article >
    )
};
export default MembersCard;