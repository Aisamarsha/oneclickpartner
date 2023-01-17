import React from "react";
import { FaStar } from "react-icons/fa";

function ReviewBox({reviewData}) {
  
  return (
    <div className="overflow-auto h-80 p-3">
      <div className="grid grid-cols-4 gap-4">
        {reviewData.map((review, index) => (
          <div key={index} className="col-span-1 bg-violet-100 rounded-lg p-4">
            <div className="flex items-center">
              <div className="flex mr-2">
                {Array(review.rating)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="text-violet-500" />
                  ))}
              </div>
            </div>
            <div className="text-violet-700 text-sm mt-3">
              {review.reviewerName}
            </div>
            <div className="ml-auto text-violet-700 text-sm">{review.date}</div>
            <div className="mt-2">
              <h3 className="text-md text-violet-700 font-medium">
                {review.title}
              </h3>
              <p className="text-sm mt-2 bg-white text-violet-400 rounded p-2">
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewBox;
