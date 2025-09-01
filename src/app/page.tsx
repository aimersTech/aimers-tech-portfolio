import ContactForm from "@/components/forms/ContactForm";
import ProjectSection from "@/components/sections/Home/ProjectSection";
import KnowTheAimers from "@/components/sections/AboutUs/KnowTheAimers/KnowTheAimers";
import ExploreInsights from "@/components/sections/Home/ExploreInsights";
import AboutUsSection from "@/components/sections/Home/About";
import AimersTech from "@/components/sections/Home/AimersTech";
import OurProcessSection from "@/components/sections/Home/OurProcessSection";
import TechStackSection from "@/components/sections/Home/TechStackSection";
import WhatWeDoSection from "@/components/sections/Home/WhatWeDo";
import HomeBanner from "@/components/Banners/Banner";

export default function Home() {
  return (
    <div className="">
      <HomeBanner/>
      <OurProcessSection />
      <WhatWeDoSection />
      <AboutUsSection />
      <AimersTech />
      <TechStackSection/>
      <ProjectSection/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
{/* resuble components */}
      <KnowTheAimers/>
      </div>
      <ContactForm/>
      <ExploreInsights />
    </div>
  );
}
