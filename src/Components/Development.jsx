import "./Development.css";
import trophy from "../images/trophy.png";
function Development() {
  return (
    <div>
      <h1 className="develop_head">How Development</h1>
      <div className="dev_con">
        <div className="cons">
          <div className="develop_con">
            <h3 className="develop_h2">
              <span className="head_span">#1</span> Assemble the right team
            </h3>
            <p className="develop_p">
              We handle all aspects of vetting and choosing the right team that
              you don't have the time, expertise, or desire to do.
            </p>
          </div>
          <div className="develop_con">
            <h3 className="develop_h2">
              <span className="head_span">#3</span> Tech architecture
            </h3>
            <p className="develop_p">
              We handle all aspects of vetting and choosing the right team that
              you don't have the time, expertise, or desire to do.
            </p>
          </div>
          <div className="develop_con">
            <h3 className="develop_h2">
              <span className="head_span">#5</span> Code reviews
            </h3>
            <p className="develop_p">
              We handle all aspects of vetting and choosing the right team that
              you don't have the time, expertise, or desire to do.
            </p>
          </div>
        </div>
      </div>
      <div className="li"></div>
      <img className="tro" src={trophy} />
      <div className="dev_con1">
        <div className="cons">
          <div className="develop_con">
            <h3 className="develop_h2">
              <span className="head_span">#2</span> Sprint planning
            </h3>
            <p className="develop_p">
              We handle all aspects of vetting and choosing the right team that
              you don't have the time, expertise, or desire to do.
            </p>
          </div>
          <div className="develop_con">
            <h3 className="develop_h2">
              <span className="head_span">#4</span> Standups & weekly demos
            </h3>
            <p className="develop_p">
              We handle all aspects of vetting and choosing the right team that
              you don't have the time, expertise, or desire to do.
            </p>
          </div>
          <div className="develop_con">
            <h3 className="develop_h2">
              <span className="head_span">#6</span> Iterative delivery
            </h3>
            <p className="develop_p">
              We handle all aspects of vetting and choosing the right team that
              you don't have the time, expertise, or desire to do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
