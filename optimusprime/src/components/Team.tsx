import benve from "../images/benvegnu.png";
import monni from "../images/monni.png";
import dainese from "../images/dainese.png";
import dallamuta from "../images/dallamuta.png";

export const Team = () => {
  return (
    <>
      <div className="Team">
        <h1>Ci Presentiamo</h1>
        <div className="row">
          <div className="column">
            <img src={benve} alt="" />
            <p>Andrea Benvegnù</p>
            <p className="SubTeam">ReactDev</p>
          </div>
          <div className="column">
            <img src={monni} alt="" />
            <p>Monni Alessandro</p>
            <p className="SubTeam">ReactDev</p>
          </div>
          <div className="column">
            <img src={dallamuta} alt="" />
            <p>Dalla Muta Thomas</p>
            <p className="SubTeam">Math Expert</p>
          </div>
          <div className="column">
            <img src={dainese} alt="" />
            <p>Dainese Riccardo</p>
            <p className="SubTeam">Keynote Manager</p>
          </div>
        </div>
      </div>
    </>
  );
};
