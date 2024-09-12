import Image from 'next/image';
import digital_marketing from '@/assets/services/digital_marketing.jpg'; 

export default function StrategicMarketingService() {
  return (
    <div className="bg-white pt-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Strategic Marketing Service
        </h2>
        <p className="text-lg sm:text-xl leading-6 text-gray-600">
          Stand Out with Targeted Marketing Strategies
        </p>
      </div>

      {/* Why Strategic Marketing is Essential */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={digital_marketing}
            alt="Marketing Strategies"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Why Strategic Marketing is Essential
          </h3>
          <p className="text-gray-700 mb-6">
            Effective marketing is key to reaching your business objectives. Here’s why investing in strategic marketing is essential:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Increased Visibility</li>
            <li>Lead Generation</li>
            <li>Higher ROI</li>
            <li>Brand Recognition</li>
            <li>Competitive Advantage</li>
          </ul>
        </div>
      </div>

      {/* Strategic Marketing Process */}
      <div className="mt-20 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Strategic Marketing Process
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Consultation
              </h4>
              <p className="text-gray-700">
                We begin with a thorough consultation to understand your business, target audience, and marketing objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Market Research
              </h4>
              <p className="text-gray-700">
                Our team conducts comprehensive market research to identify trends, opportunities, and competitive landscapes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Strategy Development
              </h4>
              <p className="text-gray-700">
                We develop a customized marketing strategy that aligns with your goals and budget.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Implementation
              </h4>
              <p className="text-gray-700">
                We execute the strategy using a mix of digital marketing tactics, including SEO, PPC, and content marketing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Monitoring & Optimization
              </h4>
              <p className="text-gray-700">
                We continuously monitor the performance of your campaigns and optimize results using data-driven insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Reporting
              </h4>
              <p className="text-gray-700">
                Regular reports keep you informed about the progress and success of your marketing efforts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Marketing Services */}
      <div className="mt-20 bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Marketing Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Search Engine Optimization (SEO)
              </h4>
              <p className="text-gray-700">
                Improve your website’s visibility on search engines, driving organic traffic and increasing your online presence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Pay-Per-Click (PPC) Advertising
              </h4>
              <p className="text-gray-700">
                Targeted ad campaigns on platforms like Google Ads and social media to drive immediate traffic and leads.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Social Media Marketing
              </h4>
              <p className="text-gray-700">
                Engage with your audience on popular social media platforms, building brand awareness and fostering customer loyalty.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Content Marketing
              </h4>
              <p className="text-gray-700">
                Create and distribute valuable content to attract and engage your target audience, establishing your brand as an authority.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Email Marketing
              </h4>
              <p className="text-gray-700">
                Personalized email campaigns that nurture leads, build relationships, and drive conversions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Analytics & Reporting
              </h4>
              <p className="text-gray-700">
                In-depth analysis of your marketing performance, providing insights and recommendations for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
