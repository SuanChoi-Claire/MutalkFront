import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";

// enum/mock 데이터 import
import musicalList from "../data/MusicalList";
import genreList from "../data/GenreData";
import timeSlotList from "../data/TimeSlotData";
import theaterList from "../data/TheaterData";
import seatGradeList from "../data/SeatGradeData";

function SearchFilter() {
  const [inputValue, setInputValue] = useState("");
  const [showList, setShowList] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // select 상태
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedSeatGrade, setSelectedSeatGrade] = useState("");

  const filteredList = musicalList.filter((item) =>
    item.includes(inputValue)
  );

  return (
    <div className="w-full px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-sm border border-green-800 overflow-hidden">
        {/* 헤더 */}
        <div className="bg-green-800 text-white text-xl font-bold px-4 py-2">
          MUTALK
        </div>

        <form className="p-4 grid gap-4">
          {/* 공연 이름 (자동완성) */}
          <div className="relative">
            <input
              type="text"
              placeholder="공연이름"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowList(true);
              }}
              className="w-full border border-green-800 rounded-lg px-4 py-2 bg-green-100 text-green-900 text-sm"
            />
            {showList && inputValue && (
              <ul className="absolute z-10 bg-white border border-green-300 w-full max-h-40 overflow-y-auto shadow-md mt-1 rounded-md text-sm">
                {filteredList.length > 0 ? (
                  filteredList.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => {
                        setInputValue(item);
                        setShowList(false);
                      }}
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-400">
                    일치하는 공연이 없습니다
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* 날짜 + 시간 + 장르 */}
          <div className="flex flex-wrap gap-3 items-center text-green-900 text-sm">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="border border-green-800 rounded-lg px-4 py-2 bg-green-100 text-sm w-40"
              dateFormat="yyyy-MM-dd"
              placeholderText="날짜 선택"
            />

            <select
              value={selectedTimeSlot}
              onChange={(e) => setSelectedTimeSlot(e.target.value)}
              className="border border-green-800 rounded-lg px-3 py-2 bg-green-100 text-sm"
            >
              <option value="" disabled hidden>낮공/밤공</option>
              {timeSlotList.map((slot, idx) => (
                <option key={idx} value={slot.value}>{slot.label}</option>
              ))}
            </select>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="border border-green-800 rounded-lg px-3 py-2 bg-green-100 text-sm"
            >
              <option value="" disabled hidden>장르</option>
              {genreList.map((g, idx) => (
                <option key={idx} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>

          {/* 공연장 */}
          <select
            value={selectedTheater}
            onChange={(e) => setSelectedTheater(e.target.value)}
            className="w-full border border-green-800 rounded-lg px-4 py-2 bg-green-100 text-green-900 text-sm focus:outline-none"
          >
            <option value="" disabled hidden>공연장</option>
            {theaterList.map((t, idx) => (
              <option key={idx} value={t.value}>{t.label}</option>
            ))}
          </select>

          {/* 좌석 정보 */}
          <div className="flex flex-wrap gap-2 items-center text-green-900 text-sm mb-0">
            <select
              value={selectedSeatGrade}
              onChange={(e) => setSelectedSeatGrade(e.target.value)}
              className="border rounded-lg px-3 py-1 border-green-800 bg-green-100"
            >
              <option value="" disabled hidden>좌석 등급</option>
              {seatGradeList.map((s, idx) => (
                <option key={idx} value={s.value}>{s.label}</option>
              ))}
            </select>
            <span>석</span>
            <input type="text" placeholder="1" className="w-10 border rounded-lg text-center px-2 py-1 border-green-800 bg-green-100" />
            <span>층</span>
            <input type="text" placeholder="B" className="w-10 border rounded-lg text-center px-2 py-1 border-green-800 bg-green-100" />
            <span>열</span>
            <input type="text" placeholder="20" className="w-12 border rounded-lg text-center px-2 py-1 border-green-800 bg-green-100" />
            <span>번</span>
          </div>

          {/* 검색 버튼 */}
          <div className="flex justify-end mt-0">
            <button className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white font-semibold px-5 py-2 rounded-xl shadow-md">
              검색 <FaSearch className="text-sm" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchFilter;
