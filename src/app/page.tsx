"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/stratava_logo.png";
import { ResearchReportCard } from "@/components";
import { servicesJson, whatWeDoJson } from "@/cofig";
import brainMap from "@/assets/brainmap.jpg";
import { WhatWeDoCard } from "@/components/cards/whatWeDoCard";
import { CardWithImage } from "@/components/cardWithImage";
import philosophy from "@/assets/philosophy.jpg";
import businessReport from "@/assets/business_report.jpg";
import perspective from "@/assets/perspective.jpg";
import { Footer } from "@/components/footer";
import alankrith from "@/assets/brands/alankrith.png";
import makara from "@/assets/brands/makara.jpg";
import bharathVista from "@/assets/brands/bharathVista.jpg";
import tridol from "@/assets/brands/tridol.jpg";
import mission from "@/assets/mission.jpg";
import vision from "@/assets/vision.jpg";
import { useRouter } from "next/navigation";
import { DotedIcon } from "@/assets/icons/dotedIcon";
import { Drawer } from "@/components/drawer";

export default function Home() {
  const [openRouteDrawer, setOpenRouteDrawer] = useState(false);

  const router = useRouter();

  const handleRouteWhatWeDo = (href: string) => {
    router.push(href);
  };

  const handleControlRouteDrawer = () => {
    setOpenRouteDrawer((prev) => !prev);
  };

  const handleNavigate = (href: string) => {
    router.push(href);
    setOpenRouteDrawer(false);
  };

  return (
    <>
      <div className="bg-[#0C0C0C] text-white w-full h-full overflow-x-hidden ">
        <div className="relative  text-white">
          <video autoPlay loop muted className="w-full h-[80%]">
            <source src="/videos/universe.mp4" type="video/mp4" />
          </video>
          <div className="absolute sm:top-0 sm:p-4 lg:p-20">
            <div className="flex justify-between items-center">
              <Image
                className="bg-inherit sm:-w-4"
                width={40}
                height={40}
                src={logo}
                alt="logo"
              />
              <h2 className="sm:text-sm lg:text-2xl ml-4 font-extrabold">
                STRATAVA
              </h2>
            </div>
          </div>
          <div className="sm:text-[10px] md:text-[22px] lg:text-[80px] font-extrabold absolute sm:top-[40%] lg:top-[30%] w-full flex justify-center pl-20">
            <div>
              <h1>STRATEGIC GUIDANCE, SEAMLESS NAVIGATION</h1>
              <Image
                className="bg-inherit sm:w-4 sm-h-4 lg:w-16 lg-h-16"
                alt="logo"
                src={logo}
              />
              <h1> YOUR PATH TO SUCCESS</h1>
            </div>
          </div>
          <div className=" w-full flex justify-center items-center absolute bottom-0">
            <h1 className="sm:text-[20px] md:text-[30px] lg:text-[80px] font-extrabold text-center">
              WHO WE ARE
            </h1>
          </div>
          <div
            onClick={handleControlRouteDrawer}
            className="sm:block lg:hidden hover:bg-gray-400 p-2 rounded-2xl cursor-pointer duration-500 absolute top-0 right-0 m-4"
          >
            <DotedIcon />
          </div>
        </div>
        <div className="sm:pt-4 lg:pt-0">
          <div className="relative pb-20">
            <Image
              className="sm:hidden lg:block "
              src={brainMap}
              alt="brain_map"
            />
            <div className="lg:absolute w-full flex flex-wrap justify-center items-center top-[10%]">
              <div className="sm:flex sm:flex-wrap sm:justify-center lg:grid   lg:grid-cols-3 sm:gap-8 lg:gap-16">
                {whatWeDoJson.map((wDo, index) => {
                  return (
                    <div
                      onClick={() => handleRouteWhatWeDo(wDo.dynamicRoute)}
                      key={index}
                    >
                      <WhatWeDoCard
                        title={wDo.title}
                        description={wDo.description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="sm:text-[20px] md:text-[38px] lg:text-[80px] font-extrabold sm:pt-8 lg:pt-0">
            OUR SERVICES
          </h1>
        </div>
        <div className="py-10 flex items-center justify-center flex-wrap gap-14 p-4 sm:px-6 lg:px-16 xl:px-32">
          {servicesJson.map((service, index) => {
            return (
              <ResearchReportCard
                key={index}
                bgImage={service.bgImage}
                headerText={service.headerText}
                subtitle={service.subtitle}
                detailedText={service.detailedText}
                dynamicRoute={service.dynamicRoute}
              />
            );
          })}
        </div>

        <div className="flex justify-center">
          <h1 className="sm:text-[38px] lg:text-[80px] font-extrabold">
            OUR PURPOSE
          </h1>
        </div>
        <div className="sm:px-8 lg:px-80 pt-20 pb-10  mx-auto">
          <div>
            <CardWithImage
              isImageOnRight
              contentSvg={philosophy}
              title="PHILOSOPHY AND APPROACH"
              description="Our philosophy and approach are rooted in our commitment to delivering
exceptional value and fostering long-term success for our clients. We believe that a clear
vision, innovative thinking, and a collaborative approach are the cornerstones of effective
business solutions. Here’s an insight into what we think and how we work to help you achieve
your business goals."
            />
          </div>
          <div className="pt-10">
            <CardWithImage
              isImageOnRight={false}
              contentSvg={businessReport}
              title="GAIN IN-DEPTH INSIGHTS WITH PROFESSIONAL RESEARCH REPORTS"
              description="In today’s data-driven world, comprehensive research reports are essential for informed
          decision-making and strategic planning. We offer expert research report services
          to provide you with detailed insights and analysis tailored to your specific needs. Our
          experienced team delivers high-quality reports that help you understand market trends,
          evaluate opportunities, and make data-driven decisions."
            />
          </div>
          <div className="pt-10">
            <CardWithImage
              isImageOnRight
              contentSvg={perspective}
              title="TRANSFORM YOUR VIEW WITH PROFESSIONAL PERSPECTIVE SERVICES"
              description="In today’s ever-evolving business landscape, gaining fresh perspectives can be the key to
          innovation and growth. We offer expert perspective services to help you see your
          business challenges and opportunities from new angles. Our experienced team delivers
          comprehensive insights that enable you to make strategic decisions and drive your business
          forward."
            />
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="sm:text-[38px] pb-4 lg:text-[80px] font-extrabold">
            ABOUT US
          </h1>
        </div>
        <div className="px-20 text-[20px] font-extrabold pb-20">
          <h1>
            Stratava is a multifaceted company specialising in website
            development, logo design, and strategic marketing. With skilled
            professionals, we craft visually stunning websites, impactful logos,
            and offer comprehensive marketing services for a successful online
            presence. Additionally, as a dynamic technology company, we
            specialise in web and mobile application development, cloud
            solutions, and wireframes. Committed to client-centric innovation,
            we empower businesses with cutting-edge, tailored solutions.
          </h1>
          <h1 className="pt-10">
            At the heart of our ethos lies a commitment to staying at the
            forefront of technological advancements. Our constant pursuit of
            knowledge and innovation ensures that we not only keep pace with
            industry trends but also anticipate and adapt to the emerging
            landscape. Collaborating closely with our clients, we go beyond
            being mere service providers; we become strategic partners, deeply
            invested in the success of their ventures. Transparency and
            communication are the pillars of our client relationships, fostering
            a collaborative environment where ideas flourish, and goals are not
            just met but exceeded. As a company, we foster a culture of
            continuous learning, where each team member is encouraged to push
            boundaries and explore novel solutions. We believe that in the
            rapidly evolving world of technology, adaptability is key, and we
            embrace change as an opportunity for growth. Together, we embark on
            a journey of innovation, where challenges are viewed as stepping
            stones to new possibilities, and every project is an opportunity to
            redefine excellence in technology solutions.
          </h1>
        </div>
        <div className="sm:px-8 lg:px-80 py-20  mx-auto">
          <div className="pt-10">
            <CardWithImage
              isImageOnRight={false}
              contentSvg={mission}
              title="MISSION"
              description="At Stratava, our mission is to empower businesses to
            thrive in the digital era by providing innovative
            solutions that elevate their online presence and drive
            sustainable growth. We are committed to delivering
            exceptional value to our clients through creativity,
            expertise, and personalized attention."
            />
          </div>
          <div className="pt-10">
            <CardWithImage
              isImageOnRight
              contentSvg={vision}
              title="VISION"
              description="Our vision is to be a trusted partner for businesses
            worldwide, recognized for our commitment to
            excellence, integrity, and customer satisfaction. We
            aspire to be at the forefront of digital innovation,
            
            continually pushing the boundaries to deliver cutting-
            edge solutions that shape the future of online commerce
            
            and brand engagement."
            />
          </div>
          <div className="flex justify-center pt-16">
            <h1 className="sm:text-[38px] lg:text-[80px] font-extrabold">
              SUCCESS STORIES
            </h1>
          </div>
          <div className="px-20  text-[20px] font-extrabold pb-20 pt-10 flex flex-wrap justify-center gap-10">
            <Image
              className="rounded-lg bg-white p-2"
              width={100}
              height={100}
              src={alankrith}
              alt="aln"
            />
            <Image
              className="rounded-lg bg-white p-2"
              width={100}
              height={100}
              src={makara}
              alt="makara"
            />

            <Image
              className="rounded-lg bg-white p-2"
              width={100}
              height={100}
              src={bharathVista}
              alt="bharathVista"
            />
            <Image
              className="rounded-lg bg-white p-2"
              width={100}
              height={100}
              src={tridol}
              alt="tridol"
            />
          </div>
        </div>
        <Footer />
      </div>
      <Drawer
        isOpen={openRouteDrawer}
        handleControlDrawer={handleControlRouteDrawer}
      >
        <ul className="flex flex-col space-y-2 p-4 bg-[#0C0C0C] text-white rounded-xl">
        <div className="flex justify-center pt-4">
            <h1 className="sm:text-[16px] font-extrabold">
              WHAT WE DO
            </h1>
          </div>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/who-we-are/what-we-think")}
          >
            What We Think
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/who-we-are/research-report")}
          >
            Perspective
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/who-we-are/perspective")}
          >
            Contact Us
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/who-we-are/case-study")}
          >
            Case Study
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/who-we-are/trademark-and-branding")}
          >
            Trademark And Branding
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/who-we-are/strategic-marketing")}
          >
            Marketing
          </li>
        </ul>
        <ul className="flex flex-col space-y-2 p-4 bg-[#0C0C0C] text-white rounded-xl mt-4">
        <div className="flex justify-center pt-2">
            <h1 className="sm:text-[16px] font-extrabold">
              SERVICES
            </h1>
          </div>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/services/development")}
          >
            Development
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/services/logo-design")}
          >
            Logo Design
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/services/compliance")}
          >
            Compliance
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/services/strategic-insight")}
          >
            Strategic Insight
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/who-we-are/trademark-and-branding")}
          >
           Design and Printing Service
          </li>
          <li
            className="hover:bg-white hover:bg-text-700 p-2 rounded-md cursor-pointer transition duration-300"
            onClick={() => handleNavigate("/services/design-printing")}
          >
            Marketing
          </li>
        </ul>
      </Drawer>
    </>
  );
}
