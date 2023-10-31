import Navbar from "./Navbar";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Development from "./Development";
import Expert from "./Expert";
import Footer from "./Footer";
import Platform from "./Platform";
import Reason from "./Reason";
import Service from "./Service";
import Vision from "./Vision";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <Vision />
      <Expert />
      <Reason />
      <Platform />
      <Development />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default Home;
