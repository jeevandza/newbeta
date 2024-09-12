type WhatWeDoCardI = {
  title: string;
  subtitle?: string;
  description: string;
};

export function WhatWeDoCard({ title, description }: WhatWeDoCardI) {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-transparent to-gray-900 text-white p-6 shadow-lg sm:w-[150px] sm:h-[200px] md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] xl:w-[300px] xl:h-[350px] sm:rounded-xl lg:rounded-[40px] cursor-pointer group overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 sm:rounded-xl lg:rounded-[40px] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:opacity-100"></div>

      {/* Title and description */}
      <div className="relative z-10 text-center transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        <h2 className="sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold mb-2 text-center">
          {title}
        </h2>
        <p className="sm:text-xs md:text-sm lg:text-base xl:text-lg mt-4">
          {description}
        </p>
      </div>

      {/* Know More button on hover */}
      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 sm:text-xs lg:text-base xl:text-lg">
          Know More
        </button>
      </div>
    </div>
  );
}
