import "./Reason.css";
import avatar from "../images/for-1.png";
function Reasion() {
  return (
    <div className="main_reason">
      <div className="reason">
        <div>
          <p className="reason_p">Our Clients</p>
          <h2 className="reason_h2">Why Businesses Choose Us</h2>
        </div>
        <div className="reason_side">
          <h2 className="reason_side_head">"Excellent IT Solutions"</h2>
          <p className="reason_side_text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="reason_bot">
            <img src={avatar} />
            <p>"Efficient and Reliable"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasion;
