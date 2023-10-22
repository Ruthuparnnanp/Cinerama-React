import { Col, Row } from "react-bootstrap";
import CardSwiper from "./CardSwiper";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import NextButton from "../components/NextButton";

const LandingPage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <Row style={{ height: "90vh" }} className="mb-5 p-3 align-items-center">
          <Col md={6}>
            <h1 className="fw-bold heading bounce-in-top">CINERAMA</h1>
            <hr className="hr" />
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              aliquam quod illo exercitationem, dolorum architecto, minus
              dolores sint corrupti, aut officiis eaque! Totam odio quia laborum
              officia corporis ullam tenetur?
            </p>

            <NextButton />
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
