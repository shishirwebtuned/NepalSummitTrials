

const ProgressBar = ({
  percentage,
  title = "",
  height = "h-4",
  bgColor = "bg-gray-200",
  fillColor = "bg-[#2A78A6]",
}: {
  percentage: number;
  title?: string;
  height?: string;
  bgColor?: string;
  fillColor?: string;
}) => {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="w-full">
      <div className="flex justify-between my-1">
        <span className="jakarta  text-sm lg:text-base">{title}</span>
        <span className="jakarta text-sm lg:text-base">
          {normalizedPercentage}%
        </span>
      </div>
      <div
        className={`w-full ${bgColor} rounded-full overflow-hidden ${height}`}
      >
        <div
          className={`h-full ${fillColor} transition-all duration-300 ease-in-out`}
          style={{ width: `${normalizedPercentage}%` }}
        >
          <span className="sr-only">{normalizedPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
