// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import "./CardSwiper.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        className="mySwiper roll-in-blurred-left"
        pagination={true}
        autoplay={true}
      >
        <SwiperSlide>
          {" "}
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/d998jmbM0AQ9Ad138Mz0N9CdnOU.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/mm2t5dd1QFxtX6X56Z9U5ucsIb1.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/jcUXVtJ6s0NG0EaxllQCAUtqdr0.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/gC3tW9a45RGOzzSh6wv91pFnmFr.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/ogyw5LTmL53dVxsppcy8Dlm30Fu.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/xmC2A7qPEfiOkQC58fZh8srWQ5v.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            width="100%"
            height="100%"
            alt=""
            src="https://image.tmdb.org/t/p/w500/tZ55C7gPExwzvBLCsZMqFZMbB2I.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
