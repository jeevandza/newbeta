"use client";
import { useRouter } from "next/navigation";
import logo from "@/assets/stratava_logo.png";
import Image from "next/image";
import { DotedIcon } from "@/assets/icons/dotedIcon";
import { Drawer } from "@/components/drawer";
import { useState } from "react";
import Link from "next/link";
import { ContactUs } from "@/components/contactUs";
import { Footer } from "@/components/footer";

export function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openRouteDrawer, setOpenRouteDrawer] = useState(false);

  const router = useRouter();

  const handleControlRouteDrawer = () => {
    setOpenRouteDrawer((prev) => !prev);
  };



  const handleNavigate = (href: string) => {
    router.push(href);
    setOpenRouteDrawer(false);
  };


  return (
    <>
      <div className="bg-[#0C0C0C] h-full w-screen text-white ">
        <div className="flex justify-between sm:p-4 lg:p-2">
          <Link href={"/"} className="flex items-center cursor-pointer">
            <Image
              className="bg-inherit"
              width={40}
              height={40}
              src={logo}
              alt="logo"
            />
            <h2 className="sm:hidden md:block text-2xl ml-4 font-extrabold">
              STRATAVA
            </h2>
          </Link>
          <div
            onClick={handleControlRouteDrawer}
            className="hover:bg-gray-400 p-2 rounded-2xl cursor-pointer duration-500"
          >
            <DotedIcon />
          </div>
        </div>

        {children}
        <ContactUs />
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
