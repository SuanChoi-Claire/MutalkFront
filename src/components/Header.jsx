import React, { useState } from "react";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">

        {/* 💻 1단 전체 라인 (로고 + 네비 + 검색 + 로그인) */}
        <div className="hidden md:flex w-full items-center justify-between gap-5">
          {/* 로고 */}
          <img
            src="/MuLog.png"
            alt="뮤톡 로고"
            className="h-8 md:h-10"
          />

          {/* 네비게이션 */}
          <nav className="flex gap-6 text-gray-700 font-medium">
            <a href="#talk" className="hover:text-green-800">#톡방</a>
            <a href="#reviews" className="hover:text-green-800">#후기모음</a>
            <a href="#seats" className="hover:text-green-800">#극장별좌석</a>
          </nav>

          {/* 검색창 */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              className="flex-auto border border-gray-300 rounded-full px-3 py-2 text-sm"
            />
            <button className="bg-green-800 text-white px-3 py-1 rounded text-sm">검색</button>
          

          {/* 로그인/회원가입 */}
          
            <button className="text-gray-700 hover:text-green-800">회원가입</button>
            <button className="text-gray-700 hover:text-green-800">로그인</button>
          </div>
        </div>

        {/* 📱 모바일 전용 1단: 로고 + 검색 */}
        <div className="flex justify-between items-center gap-5 md:hidden mb-0 pb-0">
          {/* 로고 */}
           {/* 로고 */}
           <img
            src="/MuLog.png"
            alt="뮤톡 로고"
            className="h-8 md:h-10"
          />

          {/* 검색창 */}
          <div className="flex items-center gap-1 w-full mb-0 pb-0">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className=" flex-1 border border-gray-300 rounded-full  px-3 py-2 text-sm"
            />
            <button className="bg-green-800 text-white px-3 py-1 rounded-lg font-normal text-center">검색</button>
            {/* 햄버거 */}
            <button
            className="text-3xl text-gray-700 font-extrabold px-0 py-0 flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          </div>
        </div>

        {/* 📱 모바일 전용 2단: 네비 + 햄버거 */}
        <div className="flex justify-center items-center md:hidden mt-0 pt-0 w-full">
          {/* 네비 */}
          <nav className="flex gap-4 text-gray-700 font-medium text-sm">
            <a href="#talk" className="hover:text-green-800">#톡방</a>
            <a href="#reviews" className="hover:text-green-800">#후기</a>
            <a href="#seats" className="hover:text-green-800">#좌석</a>
          </nav>

        </div>

        {/* 📱 햄버거 누르면 보이는 로그인/회원가입 */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-2 border-t text-sm flex justify-end gap-4">
            <button className="text-gray-700 hover:text-green-800">회원가입</button>
            <button className="text-gray-700 hover:text-green-800">로그인</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
