import Image from 'next/image';
import design_printing from '@/assets/services/design-printing.jpg'; // Replace with your actual image

export default function CommercialDesignPrinting() {
  return (
    <div className="bg-gray-50 py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Commercial Design and Printing Services
        </h2>
        <p className="text-lg sm:text-xl leading-6 text-gray-600">
          Elevate Your Brand with Professional Design and Printing
        </p>
      </div>

      {/* Why Professional Design and Printing Matter */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={design_printing}
            alt="Professional Printing"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Why Professional Design and Printing Matter
          </h3>
          <p className="text-gray-700 mb-6">
            Professional design and printing are essential for creating a cohesive and compelling brand image. Here’s why investing in our services is beneficial:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Brand Consistency</li>
            <li>Professional Appearance</li>
            <li>Effective Communication</li>
            <li>Competitive Advantage</li>
            <li>Versatile Solutions</li>
          </ul>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-20 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Design and Printing Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Pamphlets
              </h4>
              <p className="text-gray-700">
                Informative & engaging pamphlets tailored to communicate your message effectively.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Visiting Cards
              </h4>
              <p className="text-gray-700">
                High-quality visiting cards that leave a lasting impression.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Banners
              </h4>
              <p className="text-gray-700">
                Vibrant banners that promote your brand with impact.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Booklets
              </h4>
              <p className="text-gray-700">
                Professionally designed booklets with detailed information about your products or services.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Envelopes
              </h4>
              <p className="text-gray-700">
                Custom-designed envelopes that add professionalism to your correspondence.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Menu Cards
              </h4>
              <p className="text-gray-700">
                Attractive menu cards that showcase your offerings with style.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="mt-20 bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Design and Printing Process
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Consultation
              </h4>
              <p className="text-gray-700">
                We begin with a consultation to understand your brand identity and project objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Concept Development
              </h4>
              <p className="text-gray-700">
                Our team develops initial design concepts that align with your brand and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Design & Review
              </h4>
              <p className="text-gray-700">
                We refine the designs based on your feedback, ensuring they meet your expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Printing
              </h4>
              <p className="text-gray-700">
                Using state-of-the-art technology, we produce high-quality prints that bring your designs to life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Quality Check
              </h4>
              <p className="text-gray-700">
                Every print is thoroughly checked for quality and accuracy before delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Delivery
              </h4>
              <p className="text-gray-700">
                We ensure timely delivery of your printed materials, ready for use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
