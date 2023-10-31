import "./Service.css";
import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";
import icon3 from "../images/icon-3.png";
import icon4 from "../images/icon-4.png";
import icon5 from "../images/icon-5.png";
import icon6 from "../images/icon-6.png";
function Service() {
  return (
    <div className="service">
      <h2 className="service_h1">Services we can </h2>
      <h2 className="service_h1">help you with</h2>
      <p className="service_text">
        In vel varius turpis, non dictum sem. Aenean in efficitur ipsum,
        inegestas ipsum. Mauris in mi ac tellus.
      </p>
      <div className="boxs">
        <div className="box12">
          <div className="box_con">
            <img className="box_img" src={icon1} />
            <div>
              <h2>App Development</h2>
              <p>
                We design professional looking yet simple Logo. Our designs are
                search engine and user friendly.
              </p>
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="box_con">
            <img className="box_img" src={icon2} />
            <div>
              <h2>Web Apps</h2>
              <p>
                We design professional looking yet simple Logo. Our designs are
                search engine and user friendly.
              </p>
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="box_con">
            <img className="box_img" src={icon3} />
            <div>
              <h2>UI/UX Design</h2>
              <p>
                We design professional looking yet simple Logo. Our designs are
                search engine and user friendly.
              </p>
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="box_con">
            <img className="box_img" src={icon4} />
            <div>
              <h2>Ecommerce Development</h2>
              <p>
                We design professional looking yet simple Logo. Our designs are
                search engine and user friendly.
              </p>
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="box_con">
            <img className="box_img" src={icon5} />
            <div>
              <h2>Cloud Service</h2>
              <p>
                We design professional looking yet simple Logo. Our designs are
                search engine and user friendly.
              </p>
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="box_con">
            <img className="box_img" src={icon6} />
            <div>
              <h2>DevOps Solutions</h2>
              <p>
                We design professional looking yet simple Logo. Our designs are
                search engine and user friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
