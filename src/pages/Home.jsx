import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import BestReviewSlider from "../components/BestReviewSlider";
import ChatPreviewsSlider from "../components/ChatPreviewsSlider";
import InstaReviewSlider from "../components/InstaReviewSlider";
import TrendingMusicals from "../components/TrendingMusicals";


function Home(){

    return(
        <div className="flex flex-col items-center w-full">
        {/* 헤더 */}
        <Header />
  
        {/* 검색 필터 */}
        <section className="w-full max-w-6xl px-4 mt-6">
          <SearchFilter />
        </section>
  
        {/* BEST REVIEW 슬라이드 */}
        <section className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">BEST REVIEW</h2>
          <BestReviewSlider />
        </section>
  
        {/* TALK 블럭 */}
        <section className="w-full max-w-6xl px-4 mt-10">
          <h2 className="text-2xl font-bold mb-4">TALK</h2>
          <ChatPreviewsSlider />
        </section>
  
        {/* NEW REVIEW */}
        <section className="w-full max-w-6xl px-4 mt-10">
          <h2 className="text-2xl font-bold mb-4">NEW REVIEW</h2>
          <InstaReviewSlider />
        </section>
  
        {/* 요즘 뭐봐 */}
        <section className="w-full max-w-6xl px-4 mt-10 mb-16">
          <h2 className="text-2xl font-bold mb-4">요즘 뭐봐?</h2>
          <TrendingMusicals />
        </section>
      </div>


    );


}

export default Home;
