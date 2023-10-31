import "./Vision.css";
import sec1 from "../images/sec-1.png";
import sec2 from "../images/sec-2.png";
function Vision() {
  return (
    <div className="vision">
      <div className="main_vision">
        <div className="vi_img">
          <img
            className="vision_img"
            src="https://img.freepik.com/free-vector/flat-people-business-training-illustration_23-2148921811.jpg"
          />
        </div>

        <div>
          <h2 className="vision_head">
            We Develop Product That People Love to Use.
          </h2>
          <p className="vision_desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, of a page when looking at its
            layout. The point of using Lorem Ipsum is that of a page when
            looking at its layout. The point of using Lorem Ipsum is thatLorem
            Ipsum is that it has a more-or-less normalLorem IpsumLorem Ipsum
            distribution of letters, as opposed
          </p>
          <div className="vision_boxs">
            <div className="vision_box">
              <img src={sec1} />
              <div>
                <h3 className="box_head">Our Vision</h3>
                <p className="box_text">It is a long esta -blished fact that</p>
              </div>
            </div>
            <div className="vision_box">
              <img src={sec2} />
              <div>
                <h3 className="box_head">Our Goal</h3>
                <p className="box_text">It is a long esta -blished fact that</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
