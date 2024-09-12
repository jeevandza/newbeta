import Image from 'next/image';
import complianceImage from '@/assets/services/compliance.jpg';

export default function Compliance() {
  return (
    <div className="bg-gray-100 py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Regulatory Compliance Service
        </h2>
        <p className="text-lg sm:text-xl leading-6 text-gray-600">
          Seamlessly Navigate Regulatory Requirements
        </p>
      </div>

      {/* Why Regulatory Compliance is Crucial Section */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Why Regulatory Compliance is Crucial
          </h3>
          <p className="text-gray-700 mb-6">
            Regulatory compliance is critical for protecting your business from legal issues, fines, and reputational damage. Here’s why it’s important:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Legal Protection</li>
            <li>Market Access</li>
            <li>Consumer Trust</li>
            <li>Operational Efficiency</li>
            <li>Reputation Management</li>
          </ul>
        </div>
        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={complianceImage}
            alt="Compliance"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Our Regulatory Compliance Services */}
      <div className="mt-20 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Regulatory Compliance Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                FSSAI Certification
              </h4>
              <p className="text-gray-700">
                Required for businesses involved in the food industry. We assist with application preparation, documentation, and inspections.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                IEC Certification
              </h4>
              <p className="text-gray-700">
                Import Export Code (IEC) is mandatory for businesses involved in importing/exporting. We help with registration and renewals.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Documentation & Inspection
              </h4>
              <p className="text-gray-700">
                We ensure all documentation is correct and assist with follow-up inspections for seamless compliance certification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Process */}
      <div className="mt-20 bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Compliance Process
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Consultation & Assessment
              </h4>
              <p className="text-gray-700">
                We start with an in-depth consultation and assessment of your current compliance status to identify gaps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Strategy & Implementation
              </h4>
              <p className="text-gray-700">
                Our team develops a tailored compliance strategy and assists with documentation, submission, and implementation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Monitoring & Support
              </h4>
              <p className="text-gray-700">
                We provide ongoing support to help you maintain compliance and navigate changes in regulations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ensure Compliance Today
        </h3>
        <p className="text-lg leading-6 text-gray-600 mb-6">
          Contact us today to learn more about our regulatory compliance services and take the first step towards seamless certification.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
          Contact Us
        </button>
      </div> */}
    </div>
  );
}
