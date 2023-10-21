import React from "react";
import { Col, Row } from "react-bootstrap";
import LandingPage from "./LandingPage";
import RunningNumbers from "./RunningNumbers";
import MarqueeImages from "./MarqueeImages";
import Features from "./Features";

function Home() {
  return (
    <>
      <LandingPage />
      <MarqueeImages />
      <RunningNumbers />
      <Features />
    </>
  );
}

export default Home;
