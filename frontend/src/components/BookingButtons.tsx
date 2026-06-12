// import React from "react";
// import { IoMdArrowForward } from "react-icons/io";

// const BookingButtons = ({
//   onBackClick,
//   onNextClick,
//   backText = "Back",
//   nextText = "Next",
//   backClassName = "bg-[#c2cacd] rounded-lg jakarta cursor-pointer py-2 px-6 sm:px-8 md:px-10 text-white text-sm sm:text-base",
//   nextClassName = "bg-[#D5E880] rounded-lg cursor-pointer flex jakarta items-center gap-2 py-2 px-4 sm:px-5 md:px-6 hover:bg-[#c0d370] transition-colors text-sm sm:text-base",
//   containerClassName = "flex items-center justify-center gap-4 sm:gap-6 my-4",
// }) => {
//   return (
//     <div className={containerClassName}>
//       <button className={backClassName} onClick={onBackClick}>
//         {backText}
//       </button>
//       <button type="submit" className={nextClassName} onClick={onNextClick}>
//         {nextText}
//         <IoMdArrowForward className="size-4 sm:size-5" />
//       </button>
//     </div>
//   );
// };

// export default BookingButtons;

import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const BookingButtons = ({
  onBackClick,
  onNextClick,
  backText = "Back",
  nextText = "Next",
  backClassName = "bg-[#c2cacd] rounded-lg jakarta cursor-pointer py-2 px-6 sm:px-8 md:px-10 text-white text-sm sm:text-base",
  nextClassName = "bg-[#D5E880] rounded-lg cursor-pointer flex jakarta items-center gap-2 py-2 px-4 sm:px-5 md:px-6 hover:bg-[#c0d370] transition-colors text-sm sm:text-base",
  containerClassName = "flex items-center justify-center gap-4 sm:gap-6 my-4",
  disableBack = false,
}: {
  onBackClick: () => void;
  onNextClick: () => void;
  backText?: string;
  nextText?: string;
  backClassName?: string;
  nextClassName?: string;
  containerClassName?: string;
  disableBack?: boolean;
}) => {
  return (
    <div className={containerClassName}>
      <button
        className={`${backClassName} ${disableBack ? "opacity-50 cursor-not-allowed" : ""
          }`}
        onClick={onBackClick}
        disabled={disableBack}
      >
        {backText}
      </button>
      <button type="submit" className={nextClassName} onClick={onNextClick}>
        {nextText}
        <IoMdArrowForward className="size-4 sm:size-5" />
      </button>
    </div>
  );
};

export default BookingButtons;
