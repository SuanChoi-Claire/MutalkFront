import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchFilter() {
  return (
    <div className="w-full bg-white shadow-md rounded-xl border border-green-800 overflow-hidden">
      {/* 상단 제목 박스 */}
      <div className="bg-green-800 text-white text-xl font-bold px-4 py-2">
        MUTALK
      </div>

      {/* 폼 입력 영역 */}
      <form className="p-4 grid gap-3">
        {/* 공연 이름 */}
        <select className="w-full border border-green-800 rounded-full px-4 py-2 bg-green-100 text-green-900 text-sm focus:outline-none">
          <option>공연이름</option>
          <option>레미제라블</option>
          <option>위키드</option>
        </select>

        {/* 날짜 + 시간 */}
        <div className="flex flex-wrap gap-2 items-center text-green-900 text-sm">
          <input type="text" placeholder="2025" className="w-16 border rounded-full text-center px-2 py-1 border-green-800 bg-green-100" />
          <span>년</span>
          <input type="text" placeholder="03" className="w-12 border rounded-full text-center px-2 py-1 border-green-800 bg-green-100" />
          <span>월</span>
          <input type="text" placeholder="28" className="w-12 border rounded-full text-center px-2 py-1 border-green-800 bg-green-100" />
          <span>일</span>
          <select className="ml-2 border rounded-full px-3 py-1 border-green-800 bg-green-100">
            <option>2:00/7:30</option>
            <option>2:00</option>
            <option>7:30</option>
          </select>
        </div>

        {/* 공연장 */}
        <select className="w-full border border-green-800 rounded-full px-4 py-2 bg-green-100 text-green-900 text-sm focus:outline-none">
          <option>공연장</option>
          <option>샤롯데씨어터</option>
          <option>블루스퀘어</option>
        </select>

        {/* 좌석 정보 */}
        <div className="flex flex-wrap gap-2 items-center text-green-900 text-sm">
          <select className="border rounded-full px-3 py-1 border-green-800 bg-green-100">
            <option>VIP</option>
            <option>R</option>
            <option>S</option>
          </select>
          <span>석</span>
          <input type="text" placeholder="1" className="w-10 border rounded-full text-center px-2 py-1 border-green-800 bg-green-100" />
          <span>층</span>
          <input type="text" placeholder="B" className="w-10 border rounded-full text-center px-2 py-1 border-green-800 bg-green-100" />
          <span>열</span>
          <input type="text" placeholder="20" className="w-12 border rounded-full text-center px-2 py-1 border-green-800 bg-green-100" />
          <span>번</span>
        </div>

        {/* 검색 버튼 */}
        <div className="flex justify-end mt-2">
          <button className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-xl shadow-md">
            검색 <FaSearch className="text-sm" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchFilter;
