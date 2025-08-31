import ContactForm from "@/components/forms/ContactForm";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import KnowTheAimers from "@/components/sections/AboutUs/KnowTheAimers/KnowTheAimers";
import Banner from "@/components/sections/Banner/Banner";
import ExploreInsights from "@/components/sections/ExploreInsights/ExploreInsights";
import OurProcessSection from "@/components/sections/OurProcess/OurProcessSection";
import TechStackSection from "@/components/sections/TechStack/TechStackSection";
import WhatWeDoSection from "@/components/sections/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <OurProcessSection />
      <WhatWeDoSection />
      <TechStackSection/>
      <ProjectSection/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">

      <KnowTheAimers/>
      </div>
      <ContactForm/>
      <ExploreInsights />
    </div>
  );
}
