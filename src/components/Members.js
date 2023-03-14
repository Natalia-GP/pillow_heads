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
      <section className="members" id="members">
        <h2 className="members__title">Quiénes somos</h2>
        {renderPillow(pillows)}
      </section>
    </HashScroll>

  );
};
export default Members;



