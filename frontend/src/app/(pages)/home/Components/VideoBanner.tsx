import React from 'react'

const VideoBanner = () => {
    return (
        <div className="relative h-[60vh] md:h-[110vh] w-full overflow-hidden">
            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/videoBanner.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            {/* <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="jakarta text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    Walk Where the<br className="md:hidden" /> Mountains Begin
                </h1>
                <p className="jakarta text-sm md:text-lg text-white/80 max-w-xl mb-8">
                    Trek through Nepal's most breathtaking trails, guided by those who know every step of the way.
                </p>
                <button className="bg-[#D5E880] hover:bg-lime-300 transition text-gray-800 font-semibold px-6 py-3 rounded-lg text-sm md:text-base">
                    Explore Treks
                </button>
            </div> */}
        </div>
    )
}

export default VideoBanner