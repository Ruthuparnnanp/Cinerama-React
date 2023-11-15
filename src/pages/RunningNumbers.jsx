import React, { useEffect, useState, useRef } from "react";

import "./RunningNumbers.css";

function RunningNumbers() {
  const [count, setCount] = useState(0);
  const [county, setCounty] = useState(0);
  const [bunty, setBunty] = useState(0);
  const farget = 767;
  const sarget = 972;
  const target = 576; // Change this value to set your target number
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count < target) {
          const increment = target / 576;
          const timer = setInterval(() => {
            setCount((prevCount) => {
              const newCount = Math.ceil(prevCount + increment);
              if (newCount >= target) {
                clearInterval(timer); // Stop the interval when the target is reached
                return target; // Set the count to the target number
              }
              return newCount;
            });
          }, 150);
        }

        if (entry.isIntersecting && county < farget) {
          const incrementt = farget / 767;
          const timery = setInterval(() => {
            setCounty((prevCount) => {
              const newCounty = Math.ceil(prevCount + incrementt);
              if (newCounty >= farget) {
                clearInterval(timery); // Stop the interval when the target is reached
                return farget; // Set the count to the target number
              }
              return newCounty;
            });
          }, 150);
        }

        if (entry.isIntersecting && bunty < sarget) {
          const incrementtt = sarget / 972;
          const timeryy = setInterval(() => {
            setBunty((prevCountt) => {
              const newCountyy = Math.ceil(prevCountt + incrementtt);
              if (newCountyy >= sarget) {
                clearInterval(timeryy); // Stop the interval when the target is reached
                return sarget; // Set the count to the target number
              }
              return newCountyy;
            });
          }, 150);
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [count, target, county, bunty]);

  return (
    <>
      <div  className="wrapper">
        <div className="counter-container">
          <i className="fa-solid fa-film fa-3x"></i>
          <div className="counter" ref={counterRef} data-target="12000">
            {count}
          </div>
          <span>Specials</span>
        </div>

        <div className="counter-container">
        <i class="fa-solid fa-clapperboard fa-3x"></i>
          <div className="counter" data-target="5000">
            {county}
          </div>
          <span>Tv Shows</span>
        </div>

        <div className="counter-container">
          <i className="fa-solid fa-video fa-3x"></i>
          <div className="counter" data-target="7500">
            {bunty}
          </div>
          <span>Serial Sensations</span>
        </div>
      </div>
    </>
  );
}

export default RunningNumbers;
