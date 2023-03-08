import MembersCard from "./MembersCard";
import { HashScroll } from 'react-hash-scroll';

const Members = (pillows) => {
  const renderPillow = ({ pillows }) => {
    return pillows.map((eachPillow, index) => {
      return <MembersCard eachPillow={eachPillow} key={index} />
    })
  }
  return (
    <HashScroll hash="#members" position='start'>
      <section className="who" id="members">
        <div className="who-title-father">
          <h2 className="who-title">Quiénes somos</h2>
        </div>
        {renderPillow(pillows)}
      </section>
    </HashScroll>

  );
};
export default Members;



