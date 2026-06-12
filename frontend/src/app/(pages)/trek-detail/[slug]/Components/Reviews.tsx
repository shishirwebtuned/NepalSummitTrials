import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const ratingData = [
  { stars: 5, count: 40 },
  { stars: 4, count: 25 },
  { stars: 3, count: 15 },
  { stars: 2, count: 6 },
  { stars: 1, count: 1 },
];

const reviews = [
  {
    name: "Courtney Henry",
    avatar: "https://i.pravatar.cc/100?img=1",
    stars: 5,
    time: "2 mins ago",
    comment:
      "Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua",
  },
  {
    name: "Shishir Thapa",
    avatar: "https://i.pravatar.cc/100?img=1",
    stars: 4,
    time: "10 days ago",
    comment:
      "Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua",
  },
];

export default function Reviews() {
  const totalReviews = ratingData.reduce((sum, r) => sum + r.count, 0);
  const averageRating = 4.9;

  return (
    <div className="px-4 py-5">
      <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-[#0a2540] mb-6">
        Review
      </h2>

      {/* Header: Rating bars + Average */}
      <div className="flex flex-col sm:flex-row justify-between mb-8 gap-6">
        <div className="flex-1">
          <h3 className="font-medium text-gray-700 mb-3 md:text-base text-sm">
            Review and rating
          </h3>
          {ratingData.map((item, i) => (
            <div key={i} className="flex items-center mb-2">
              <span className="w-6 text-xs  md:text-sm text-gray-800 font-medium">
                {item.stars} <FaStar className="inline text-yellow-400" />
              </span>
              <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-400"
                  style={{ width: `${(item.count / totalReviews) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right sm:text-left sm:min-w-[120px]">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0a2540]">
            {averageRating}
          </div>
          <div className="flex items-center justify-center sm:justify-start mt-1 text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="mr-1" />
            ))}
            <FaStar className="text-gray-300" />
          </div>
          <div className="text-gray-500 text-[11px] md:text-xs lg:text-sm mt-1">
            {totalReviews} Reviews
          </div>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="flex gap-4 items-start relative">
            <img
              src={review.avatar}
              alt={review.name}
              className="md:w-9 md:h-9 w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="font-semibold text-[#0a2540] lg:text-base
                md:text-sm text-xs"
                >
                  {review.name}
                </span>
                <div className="flex items-center text-yellow-400 md:text-sm text-xs">
                  {[...Array(review.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="md:text-sm text-xs text-gray-400">
                  {review.time}
                </span>
              </div>
              <p className="md:text-sm text-xs text-gray-700 leading-relaxed">
                {review.comment}
              </p>
            </div>
            <BsThreeDotsVertical className="absolute top-0 right-0 text-gray-400 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}
