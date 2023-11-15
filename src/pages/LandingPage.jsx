import { Col, Row } from "react-bootstrap";
import CardSwiper from "./CardSwiper";
import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";

const LandingPage = () => {
  const navigate = useNavigate();
  const navigateToMovies = () => {
    navigate("/movies");
  };

  return (
    <>
      <div className="container">
        <Row style={{ height: "90vh" }} className="mb-5 p-3 align-items-center">
          <Col md={6}>
            <h1 className="fw-bold heading bounce-in-top">CINERAMA</h1>
            <hr className="hr" />
            <p style={{ textAlign: "justify" }}>
            Indulge your senses in a kaleidoscope of cinematic brilliance on our movie platform. With a carefully curated selection that spans genres and eras, our website is your gateway to an immersive world of storytelling.
            </p>

            {/* <Link to={"/movies"}>
              <button className="btn btn-danger">chunni</button>
            </Link> */}

            <button
              className="wrapperForBtnComponent"
              onClick={navigateToMovies}
            >
              <NextButton />
            </button>
          </Col>
          <Col></Col>
          <Col md={5}>
            <CardSwiper />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LandingPage;
