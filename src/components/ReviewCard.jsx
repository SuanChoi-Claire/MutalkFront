// src/components/ReviewCard.jsx
import React from "react";

function ReviewCard({ review }) {
  return (
    <div
      className="w-56 h-[360px] bg-white rounded-md shadow-md relative px-3 py-4 text-sm text-green-900"
      style={{
        backgroundImage: "url('/TicketShape.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h3 className="font-bold text-center">{review.title}</h3>
      <p className="text-center my-1">★★★★★</p>

      <div className="text-xs text-center mb-2">
        <p>{review.date}</p>
        <p>{review.theater}</p>
        <p>{review.seat}</p>
      </div>

      <div className="w-24 h-32 mx-auto mb-2">
        <img
          src={review.image}
          alt={review.musical}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <p className="text-xs leading-tight line-clamp-3 px-1">{review.content}</p>

      <div className="text-center mt-2 text-xs text-gray-500">
        {review.user}
      </div>
    </div>
  );
}

export default ReviewCard;
