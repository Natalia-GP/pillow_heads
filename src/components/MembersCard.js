import MemberLink from './MemberLink';
const MembersCard = ({ eachPillow, index }) => {
  return (
    <article className={`members__article`} key={index}>
      <img
        className="members__article__img"
        src={eachPillow.photo}
        alt={eachPillow.name}
      />
      <h3 className="members__article__div__name">{eachPillow.name}</h3>
      <p className="members__article__div__text">{eachPillow.description}</p>
      <ul className="members__socials">
        {eachPillow.twitter !== '' ? (
          <MemberLink
            link={eachPillow.twitter}
            iClass={'fa-brands fa-twitter'}
            dot={'withDot'}
          />
        ) : (
          ''
        )}
        <MemberLink
          link={eachPillow.linkedin}
          iClass={'fa-brands fa-linkedin-in'}
          dot={'withDot'}
        />
        <MemberLink
          link={eachPillow.github}
          iClass={'fa-brands fa-github-alt'}
          dot={'withDot'}
        />
        <MemberLink link={eachPillow.email} iClass={'fa-solid fa-envelope'} />
      </ul>

    </article>
  );
};
export default MembersCard;
