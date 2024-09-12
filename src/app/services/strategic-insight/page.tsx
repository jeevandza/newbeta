import Image from 'next/image';
import strategic_insight from "@/assets/services/strategic-insight.jpg"

export default function StrategicInsight() {
  return (
    <div className="relative bg-gray-900 text-white py-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={strategic_insight}
          alt="Strategic Insight Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-40"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Strategic Insight
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Analysis of your business and specific challenges to develop informed strategies.
          </p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold">Data-Driven Approach</h3>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Our approach is grounded in data and research, ensuring our recommendations are backed by solid insights. We focus on identifying key challenges and turning them into opportunities for growth.
          </p>

          <div className="mt-8">
            <h4 className="text-xl font-semibold">Key Features of Our Strategic Insight</h4>
            <ul className="mt-4 space-y-4 list-disc list-inside text-gray-700">
              <li>In-depth market and competitive analysis to identify emerging trends.</li>
              <li>Custom-tailored business strategies to suit your specific challenges.</li>
              <li>Continuous monitoring and reporting to optimize performance.</li>
              <li>Hands-on guidance from experienced strategists.</li>
              <li>Data-driven recommendations ensuring measurable results.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold">Benefits of Strategic Insight</h4>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Investing in our strategic insight services helps businesses:
            </p>
            <ul className="mt-4 space-y-4 list-disc list-inside text-gray-700">
              <li>Gain a competitive edge by anticipating market changes.</li>
              <li>Improve decision-making with data-driven insights.</li>
              <li>Maximize ROI by targeting the right opportunities.</li>
              <li>Streamline operations and increase efficiency.</li>
              <li>Enhance long-term growth and sustainability.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-extrabold text-white mb-4">
            What Our Clients Say
          </h3>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">
                "The strategic insight provided by Stratava has completely transformed our approach to market challenges. We’ve seen significant growth and a clearer direction."
              </p>
              <p className="mt-4 text-right text-gray-400">- Founder of Bharatvista Holidays</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">
                "The data-driven strategies recommended by the team helped us gain a competitive advantage and improve our decision-making process immensely."
              </p>
              <p className="mt-4 text-right text-gray-400">- David Lee, Founder of NexusTech</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Gain Strategic Insight?
          </h3>
          <p className="text-lg leading-6 text-gray-300 mb-6">
            Contact us today to learn how our strategic insight services can help you grow and adapt in a rapidly changing market.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div> */}
      </div>
    </div>
  );
}
