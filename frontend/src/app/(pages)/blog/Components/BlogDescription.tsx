import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const BlogDescription = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center lg:gap-12 md:gap-10 gap-4 items-start md:px-16 px-8 lg:px-24 md:pt-24 pt-16 sm:pt-20 lg:pt-10 pb-10 text-gray-800">
      {/* Date and Category */}
      <div className="flex justify-center">
        <div className="text-sm font-semibold lora flex flex-row items-center gap-4 text-gray-500 mb-4">
          <span>24.06.2023</span>
          <div className="w-10 h-[1.8px] bg-gray-300"></div>
          <span>Culture</span>
        </div>
      </div>

      <div className="jakarta lg:text-base md:text-[15px] text-sm leading-relaxed">
        {/* Paragraphs */}
        <p className="mb-6">
          Seamlessly syndicate cutting-edge architectures rather than
          collaborative collaboration and idea-sharing. Proactively unleash
          fully researched e-commerce via timely models. Continually
          reintermediate integrated processes through technically sound
          intellectual capital. Credibly conceptualize stand-alone benefits for
          functionalized metrics. Holisticly incentivize impactful platforms
          through client-focused manufactured products. Collaboratively matrix
          multifunctional deliverables without market positioning.
        </p>
        <p className="mb-6">
          Progressively formulate seamless deliverables through B2B
          opportunities. Continually optimize backward-compatible systems
          without client-focused e-tailers.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <img
            src="/images/homepage/219.jpg"
            alt="Mountain Scene"
            className="rounded-md object-cover w-full h-72"
          />
          <img
            src="/images/homepage/165.jpg"
            alt="Stupa"
            className="rounded-md object-cover w-full h-72"
          />
        </div>
        <p className="text-sm text-gray-500 mb-8 mt-8">
          Efficiently empower wireless media rather than strategic e-markets.
          Distinctively brand backward-compatible functional e-tailers.
        </p>

        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl lora text-[#D4A373] font-semibold mb-8">
          “Monotonectally seize superior mindshare rather than efficient
          technology.”
        </blockquote>

        {/* Final Paragraph */}
        <p className="mb-10">
          Continually strategize market-driven processes through pandemic
          intellectual capital. Credibly cultivate 24/365 plug-and-play "outside
          the box" thinking via fully researched convergence. Conveniently
          develop holistic niches through interoperable supply chains.
        </p>

        <div className="w-full flex flex-row justify-start gap-4 pt-6 mb-12">
          {["Adventure", "Photo", "Design"].map((category, index) => (
            <div
              key={index}
              className="px-3 py-[6px] bg-white border border-gray-300 text-[#6C757D] rounded-md font-semibold uppercase lg:text-xs md:text-[11px] text-[10px]"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Author Section */}
        <div className="flex items-center justify-between border-t pt-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/blog/authorImg.png"
              alt="Author"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold lora text-[#343A40]">
                By Anusha Lama Rai
              </p>
              <p className="text-sm lora mt-1 text-[#6C757D]">
                Culture Blogger
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-gray-500 text-lg">
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
