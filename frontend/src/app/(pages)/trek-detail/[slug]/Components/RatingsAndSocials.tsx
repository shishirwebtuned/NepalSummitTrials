import {
  FaStar,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const socials = [
  { icon: BsWhatsapp, label: "WhatsApp" },
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaYoutube, label: "YouTube" },
  { icon: FaTiktok, label: "TikTok" },
  { icon: FaTelegramPlane, label: "Telegram" },
];

const RatingAndSocials = ({ rating = 4.2, reviews = 5 }) => {
  const fullStars = Math.floor(rating);
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      className={
        i < fullStars
          ? "text-yellow-400 lg:size-4 md:size-[14px] size-3"
          : "text-gray-300 lg:size-4 md:size-[14px] size-3"
      }
    />
  ));

  return (
    <div className="bg-white jakarta flex flex-col md:flex-row lg:gap-0 gap-6 md:justify-between items-center justify-center lg:px-24 md:px-14 px-6 py-8">
      <div className="flex items-center">
        <div className="flex mr-2">{stars}</div>
        <span className="lg:text-base md:text-[15px] text-sm">
          {rating} <span className="text-gray-400 ">({reviews} Reviews)</span>
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-2">
        {socials.map(({ icon: Icon, label }, idx) => (
          <div
            key={idx}
            title={label}
            className="p-2 bg-[#ACC0CC38] rounded hover:bg-gray-200 cursor-pointer text-[#7C8D97]"
          >
            <Icon className="lg:text-base md:text-sm text-xs" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingAndSocials;
