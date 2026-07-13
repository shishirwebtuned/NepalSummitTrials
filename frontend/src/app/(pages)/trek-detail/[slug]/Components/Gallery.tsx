import React from 'react'

const spanPatterns = [
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
]

const GalleryBentoGrid = ({ images }: { images: string[] }) => {
  if (!images || images.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <p className="text-sm text-gray-400">No gallery images for this trek.</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl ${spanPatterns[index % spanPatterns.length]
              }`}
          >
            <img
              src={src}
              alt={`gallery-${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryBentoGrid