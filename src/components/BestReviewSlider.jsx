// src/components/BestReviewSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";
import reviewList from "../data/reviewList";
import { useNavigate } from "react-router-dom";

function BestReviewSlider() {
  const navigate = useNavigate();

  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={5}        // 기본: PC에서 5개
    spaceBetween={20}
    loop={true}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      0: { slidesPerView: 2 },     // 모바일 (0px 이상일 때 1개)
      768: { slidesPerView: 3 },   // 태블릿 정도 사이즈
      1024: { slidesPerView: 4 }   // PC 사이즈
    }}
    className="w-full"
  >
      {reviewList.map((review) => (
        <SwiperSlide key={review.id}>
          <div
            onClick={() => navigate(`/review/${review.id}`)}
            className="cursor-pointer"
          >
            <ReviewCard review={review} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BestReviewSlider;
