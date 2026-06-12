import { useState, useEffect } from "react";

export const RangeInputFilter = ({
  minLimit = 1,
  maxLimit = 30,
  minValue = 2,
  maxValue = 24,
  unit = "Days",
  onChange,
}: {
  minLimit?: number;
  maxLimit?: number;
  minValue?: number;
  maxValue?: number;
  unit?: string;
  onChange?: (values: { min: number; max: number }) => void;
}) => {
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);
  const [activeSlider, setActiveSlider] = useState<"min" | "max" | null>(null);

  useEffect(() => {
    if (onChange) {
      onChange({ min, max });
    }
  }, [min, max, onChange]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max - 1);
    setMin(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min + 1);
    setMax(value);
  };

  return (
    <div className="mb-6">
      <div className="relative h-10 flex items-center justify-center">
        <div className="absolute w-full h-2 bg-gray-200 rounded-full" />
        <div
          className="absolute h-2 bg-[#659CBC] rounded-full"
          style={{
            left: `${((min - minLimit) / (maxLimit - minLimit)) * 100}%`,
            width: `${((max - min) / (maxLimit - minLimit)) * 100}%`,
          }}
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={min}
          onChange={handleMinChange}
          onMouseDown={() => setActiveSlider("min")}
          onTouchStart={() => setActiveSlider("min")}
          className={`absolute w-full appearance-none bg-transparent cursor-pointer range-thumb-blue ${activeSlider === "min" ? "z-30" : "z-10"
            }`}
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={max}
          onChange={handleMaxChange}
          onMouseDown={() => setActiveSlider("max")}
          onTouchStart={() => setActiveSlider("max")}
          className={`absolute w-full appearance-none bg-transparent cursor-pointer range-thumb-blue ${activeSlider === "max" ? "z-30" : "z-10"
            }`}
        />
      </div>

      <div className="flex justify-between text-[#659CBC] lg:text-sm md:text-[13px] text-xs font-medium mt-1 mb-2">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="lg:text-[13px] md:text-xs text-[11px] text-[#3D3D3D]">
            Min
          </label>
          <div className="flex items-center mt-1 border border-[#ACC0CC]/34 rounded-md bg-[#ACC0CC]/12 px-3 py-2">
            <input
              type="number"
              min={minLimit}
              max={max - 1}
              value={min}
              onChange={handleMinChange}
              className="w-full bg-transparent outline-none jakarta lg:text-sm md:text-[13px] text-xs"
            />
            <span className="ml-1 lg:text-sm md:text-[13px] text-xs text-[#BEBEBE]">
              {unit}
            </span>
          </div>
        </div>

        <div>
          <label className="lg:text-[13px] md:text-xs text-[11px] text-[#3D3D3D]">
            Max
          </label>
          <div className="flex items-center mt-1 border border-[#ACC0CC]/34 rounded-md bg-[#ACC0CC]/12 px-3 py-2">
            <input
              type="number"
              min={min + 1}
              max={maxLimit}
              value={max}
              onChange={handleMaxChange}
              className="w-full bg-transparent outline-none jakarta lg:text-sm md:text-[13px] text-xs"
            />
            <span className="ml-1 lg:text-sm md:text-[13px] text-xs text-[#BEBEBE]">
              {unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
