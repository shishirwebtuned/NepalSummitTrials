type RecommendedCardProps = {
  image: string;
  date: string;
  title: string;
  description: string;
  tag: string;
};

export const RecommendedCard = ({ image, date, title, description, tag }: RecommendedCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md w-full h-full min-h-[17rem] md:min-h-[19rem]">
      <img src={image} alt="blog" className="md:w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2839]/10 to-[#0B2839]/90 px-4 md:px-6 py-4 lg:px-8 md:py-6 flex flex-col justify-end text-white">
        <div className="lg:text-sm lora md:text-[13px] text-xs text-[#E5E5E5]">
          {date}
        </div>
        <h2 className="lg:text-xl md:text-[19px] text-lg lora font-bold md:leading-snug leading-tight tracking-wide mt-1">
          {title}
        </h2>
        <p className="lg:text-[13px] md:text-xs jakarta text-[11px] text-[#E5E5E5] mt-2">
          {description}
        </p>
      </div>

      {/* Tag badge */}
      <div className="absolute text-white top-4 right-4 bg-[#FFFFFF]/15 px-2 md:px-3 py-1 lg:text-xs md:text-[11px] text-[10px] rounded-lg uppercase font-semibold tracking-wide">
        {tag}
      </div>
    </div>
  );
};
