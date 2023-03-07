import MembersCard from "./MembersCard";

const Members = (pillows) => {
  const renderPillow = ({ pillows }) => {
    return pillows.map((eachPillow, index) => {
      return <MembersCard eachPillow={eachPillow} key={index} />
    })
  }
  return (
    <section className="who" id="members">
      <div className="who-title-father">
        <h2 className="who-title">Quiénes somos</h2>
      </div>
      {renderPillow(pillows)}
    </section>
  );
};
export default Members;



