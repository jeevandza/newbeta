import Image from "next/image";
import logoDesignImage from "@/assets/services/logo_design.jpg";
import logo_design from "@/assets/services/logo_design.jpg";

export default function LogoDesignService() {
  return (
    <div className="bg-white pt-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Logo Design Service
        </h2>
        <p className="text-lg leading-6 text-gray-600">
          Elevate Your Brand with a Memorable Logo
        </p>
      </div>

      {/* Two-column section with Image */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why a Great Logo Matters
          </h3>
          <p className="text-gray-700 mb-6">
            A logo is often the first impression your audience will have of your
            brand. It's a visual representation that communicates your brand's
            values, mission, and personality. A well-designed logo can:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Build Brand Recognition</li>
            <li>Establish Trust</li>
            <li>Create Emotional Connection</li>
            <li>Enhance Marketing Efforts</li>
          </ul>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={logo_design}
            alt="Logo Design"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Design Process Section with Alternating Background */}
      <div className="mt-20 bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Our Design Process
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Discovery
              </h4>
              <p className="text-gray-700">
                We start by understanding your business, target audience, and
                brand values through in-depth discussions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Research & Conceptualization
              </h4>
              <p className="text-gray-700">
                We analyze industry trends, competitors, and design styles to
                create a logo that stands out.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Design & Refinement
              </h4>
              <p className="text-gray-700">
                We refine the best concepts and present the final logo with
                real-world mockups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
