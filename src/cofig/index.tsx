import webDev from "@/assets/web_dev.jpg";
import logoDesign from "@/assets/logo_design.jpg";
import brandBuilding from "@/assets/brand_building.webp";
import legal from "@/assets/legal.jpg";
import compliance from "@/assets/compliance.jpg";
import collaborative from "@/assets/collaborative.jpg";
import strategic_insight from "@/assets/strategic_insight.jpg";
import proactive_support from "@/assets/proactive_support.jpg";
import printing from "@/assets/printing.jpg";
import marketing from "@/assets/strategic_marketing.jpeg";

const servicesJson = [
  {
    bgImage: webDev,
    headerText: "Website Development",
    subtitle:
      "Reinventing with a digital core: How to accelerate growth through change",
    detailedText:
      "In today’s digital age, your website is often the first interaction customers have with your brand. At Stratava, we specialize in developing and designing websites that captivate your audience and convert visitors into loyal customers",
    dynamicRoute: "/services/development",
  },
  {
    bgImage: logoDesign,
    headerText: "Logo Design:",
    subtitle:
      "Logo is more than just a visual element, it is the cornerstone of your brand identity",
    detailedText:
      "Creating visually stunning and highly functional websites that enhance your online presence and engage your audience.",
    dynamicRoute: "/services/logo-design",
  },
  // {
  //   bgImage: brandBuilding,
  //   headerText: "Brand Building",
  //   subtitle:
  //     "Brand management and analysis and how brand is perceived in the market",
  //   detailedText:
  //     "Helping you build a strong, recognizable brand that resonates with your target audience.",
  //   dynamicRoute: "/services",
  // },
  // {
  //   bgImage: legal,
  //   headerText: "Intellectual Property Protection",
  //   subtitle:
  //     "Protect logos, product names, and packaging designs and ensuring all the rights",
  //   detailedText:
  //     "Assisting businesses in protecting their intellectual property by ensuring that your brand is legally safeguarded against infringement.",
  //   dynamicRoute: "/services",
  // },
  {
    bgImage: compliance,
    headerText: "Regulatory Compliance",
    subtitle:
      "Managing Organization laws and regulations that apply to its business and industry",
    detailedText:
      "Providing essential certifications such as FSSAI and IEC, enabling you to navigate regulatory requirements with ease and operate confidently in your industry.",
    dynamicRoute: "/services/compliance",
  },
  // {
  //   bgImage: collaborative,
  //   headerText: "Collaborative Partnership",
  //   subtitle:
  //     "Our multidisciplinary team collaborates seamlessly to bring diverse perspectives",
  //   detailedText:
  //     "We view our relationship with clients as a partnership. We work closely with you to understand your vision and goals, ensuring our solutions are aligned with your needs.",
  //   dynamicRoute: "/services",
  // },
  {
    bgImage: strategic_insight,
    headerText: "Strategic Insight",
    subtitle:
      "Analysis of your business and specific challenges to develop informed strategies.",
    detailedText:
      "Our approach is grounded in data and research, ensuring our recommendations are backed by solid insights.",
    dynamicRoute: "/services/strategic-insight",
  },
  // {
  //   bgImage: proactive_support,
  //   headerText: "Proactive Support",
  //   subtitle:
  //     "Continuous monitoring and support to ensure sustained success and address.",
  //   detailedText:
  //     "We identify potential challenges early and develop solutions to mitigate them before they impact your business.",
  //   dynamicRoute: "/services",
  // },
  {
    bgImage: printing,
    headerText: "Commercial Design and Printing Services",
    subtitle: "Elevate Your Brand with Professional Design and Printing",
    detailedText:
      "a full range of commercial design and printing services to help you make a lasting impression. From pamphlets and visiting cards to banners, booklets, envelopes, and menu cards, our expert team is dedicated to providing high-quality designs and prints that elevate your brand.",
    dynamicRoute: "/services/design-printing",
  },
  {
    bgImage: marketing,
    headerText: "Strategic Marketing",
    subtitle:
      "Digital marketing to reach right customer to your business and industry",
    detailedText:
      "Developing and implementing strategic marketing campaigns that drive traffic, generate leads, and increase conversions, Helping you build a strong, recognizable brand that resonates with your target audience.",
    dynamicRoute: "/services/strategic-marketing",
  },
];

const whatWeDoJson = [
  {
    title: "WHAT WE THINK",
    description: "Insights and perspectives shaping our approach and strategy",
    dynamicRoute: "/who-we-are/what-we-think",
  },
  {
    title: "RESEARCH REPORT",
    description:
      "In-depth analysis to inform and guide successful project execution.",
    dynamicRoute: "/who-we-are/research-report",
  },
  {
    title: "PERSPECTIVE",
    description:
      "Gaining a unique viewpoint to enhance understanding and drive innovation.",
    dynamicRoute: "/who-we-are/perspective",
  },
  {
    title: "CASE STUDY",
    description:
      "Analyzing real-world scenarios to uncover insights and drive strategic decisions",
    dynamicRoute: "/who-we-are/case-study",
  },
  {
    title: "TRADEMARK AND BRANDING",
    description:
      "Building a distinctive identity to protect and promote your business.",
    dynamicRoute: "/who-we-are/trademark-and-branding",
  },
  {
    title: "STRATEGIC MARKETING",
    description:
      "Crafting targeted campaigns to drive growth and maximize ROI.",
    dynamicRoute: "/who-we-are/strategic-marketing",
  },
];

export { servicesJson, whatWeDoJson };
