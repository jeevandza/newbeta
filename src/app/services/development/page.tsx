import Image from "next/image";
import website_development from "@/assets/services/website.jpg";
import development_process from "@/assets/services/development_process.jpg";
import paper_image from "@/assets/services/paper_image.jpg";

export default function Development() {
  return (
    <div className="bg-gray-50 py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Web and Mobile Applications Development
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Custom Web and Mobile Applications from Concept to Deployment
          </p>
        </div>

        {/* Why Custom Applications Matter */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Why Custom Applications Matter
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Tailored Solutions: Custom applications address your unique
                  business requirements.
                </li>
                <li>
                  Enhanced User Experience: Seamless and intuitive user
                  interfaces.
                </li>
                <li>
                  Operational Efficiency: Streamline processes and automate
                  tasks.
                </li>
                <li>Scalability: Built to grow with your business.</li>
                <li>
                  Competitive Edge: Offering features not available in
                  off-the-shelf solutions.
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src={website_development}
                alt="Custom Apps"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Our Development Process
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Image
                src={development_process}
                alt="Development Process"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <ol className="list-decimal list-inside text-gray-700">
                <li>
                  Consultation: Understand business objectives, target audience,
                  and needs.
                </li>
                <li>
                  Planning & Strategy: Detailed project plan with timelines and
                  milestones.
                </li>
                <li>
                  Design: User-centric, aesthetic, and functional designs.
                </li>
                <li>
                  Development: Build robust, scalable applications using the
                  latest technologies.
                </li>
                <li>
                  Testing: Thorough testing for flawless performance across
                  devices.
                </li>
                <li>
                  Deployment: Smooth transition from development to production.
                </li>
                <li>
                  Maintenance & Support: Post-deployment maintenance and
                  support.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Technologies We Use */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Technologies We Use
          </h3>
          <div className="grid gap-8 lg:grid-cols-3 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900">
                Web Technologies
              </h4>
              <p className="mt-2 text-gray-600">
                HTML, CSS, JavaScript, React, Next.js
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900">
                Backend Technologies
              </h4>
              <p className="mt-2 text-gray-600">
                Node.js, Express, MongoDB, SQL
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900">
                Mobile Technologies
              </h4>
              <p className="mt-2 text-gray-600">
                React Native, Flutter, Swift, Kotlin
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] lg:w-4/5 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={paper_image}
                alt="Client Success"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
