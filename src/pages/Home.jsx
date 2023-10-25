import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import LandingPage from "./LandingPage";
import RunningNumbers from "./RunningNumbers";
import MarqueeImages from "./MarqueeImages";
import Features from "./Features";
import Loader from "./Loader";
function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <LandingPage />
          <MarqueeImages />
          <RunningNumbers />
          <Features />
        </>
      )}
    </>
  );
}

export default Home;
