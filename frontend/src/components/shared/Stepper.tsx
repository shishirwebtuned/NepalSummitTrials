import React from "react";
import { FiCheck } from "react-icons/fi";

const Stepper = ({ steps, activeStep }: { steps: string[]; activeStep: number }) => {
  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 py-4">
      <div className="flex flex-wrap flex-row md:justify-between justify-start md:gap-x-0 md:gap-y-0 gap-x-4 gap-y-3 items-center w-full max-w-2xl">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center min-w-0">
            <div
              className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 ${activeStep === index
                  ? "bg-[#E6F0FA] text-[#4A90E2] border-[#D3E2F5] relative"
                  : index === activeStep - 1
                    ? "bg-[#2A78A6] text-white border-[#2A78A6] relative"
                    : "bg-white text-[#a2a2a2] border-[#a2a2a2]"
                }`}
            >
              <span className="relative z-10 flex items-center justify-center text-[8px] sm:text-sm">
                {index === activeStep - 1 ? (
                  <FiCheck className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                ) : (
                  String(index + 1).padStart(2, "0")
                )}
              </span>
              {(activeStep === index || index === activeStep - 1) && (
                <div
                  className={`absolute inset-1 rounded-full ${activeStep === index
                      ? "bg-[#d9ebf7] border-[#91bad7]"
                      : "bg-[#2A78A6] border-[#a1cfe9]"
                    } border`}
                ></div>
              )}
            </div>
            <span
              className={`ml-1 text-[10px] sm:text-xs md:text-sm truncate ${activeStep === index ? "text-[#2A78A6]" : "text-[#a2a2a2]"
                }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <div className="w-18 md:flex hidden h-1 bg-gray-200 mx-1"></div>
            )}
          </div>
        ))}
      </div>
      <div className="border-b-2 border-[#d1d9dc] w-[calc(100%+2rem)] max-w-[54rem] mt-6"></div>
    </div>
  );
};

export default Stepper;
