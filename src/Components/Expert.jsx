import "./Expert.css";
import line from "../images/line.png";
import img1 from "../images/thi-1.png";
import img2 from "../images/thi-2.png";
import img3 from "../images/thi-3.png";
import img4 from "../images/thi-4.png";
import img5 from "../images/thi-5.png";
import img6 from "../images/thi-6.png";
function Expert() {
  return (
    <div>
      <h1 className="expert_head">Our Expertice</h1>
      <div className="expert_con">
        <div className="expert1">
          <img className="expert_img1" src={img1} />
          <h2>App Development</h2>
          <img src={line} />
          <p>
            Widget Infotech is strongly based on building a result and costumer
            -oriented mobile application.
          </p>
        </div>
        <div className="expert1">
          <img className="expert_img" src={img2} />
          <h2>Web Development</h2>
          <img src={line} />
          <p>
            We have the expertise and experience to develop an extra fast
            loading web pages with excellent navigation.
          </p>
        </div>
        <div className="expert1">
          <img className="expert_img" src={img3} />
          <h2>Software Development</h2>
          <img src={line} />
          <p>
            Our Software Application Migration services helps to retain the
            knowledge and potentials in your legacy.
          </p>
        </div>
        <div className="expert1">
          <img className="expert_img" src={img4} />
          <h2>UI/UX Design</h2>
          <img src={line} />
          <p>
            We provide an exquisite web design services, logos designing,
            graphics, and website design, App design.
          </p>
        </div>
        <div className="expert1">
          <img className="expert_img" src={img5} />
          <h2>Online Marketing</h2>
          <img src={line} />
          <p>
            The growth of hacking to drive user acquisition skill, we excel in
            providing noncompetitive Services.
          </p>
        </div>
        <div className="expert1">
          <img className="expert_img" src={img6} />
          <h2>Dedicated Developers</h2>
          <img src={line} />
          <p>
            Professional designing and development services evolved into being a
            perfect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expert;
