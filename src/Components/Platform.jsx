import "./Platform.css";
import co1 from "../images/five-1.png";
import co2 from "../images/five-2.png";
import co3 from "../images/five-3.png";
import co4 from "../images/five-4.png";
import co5 from "../images/five-21.png";
function Platform() {
  return (
    <div>
      <h1 className="platform_head">Platform</h1>
      <div className="text">
        <p className="platform_text">
          Our overall process includes concept, design, software development,
          incorporation, and implementation. We have a squad of experts, who are
          working on modern technologies.
        </p>
      </div>
      <div className="compos">
        <div className="compo1">
          <img className="compo1_img" src={co1} />
          <p className="compo1_text">IOS Development</p>
        </div>
        <div className="compo1">
          <div className="compo1_img1">
            <img className="com_img" src={co2} />
          </div>

          <p className="compo1_text">Android Development</p>
        </div>
        <div className="compo1">
          <div className="compo1_img2">
            <img className="com_img1" src={co3} />
          </div>

          <p className="compo1_text">Flutter Development</p>
        </div>
        <div className="compo1">
          <img className="compo1_img" src={co4} />
          <p className="compo1_text">React Development</p>
        </div>
        <div className="compo1">
          <img className="compo1_imgs" src={co5} />
          <p className="compo1_text">UI/UX Design</p>
        </div>
      </div>
    </div>
  );
}

export default Platform;
