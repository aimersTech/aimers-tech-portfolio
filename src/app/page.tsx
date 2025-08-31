import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ExploreInsights from "@/components/sections/ExploreInsights/ExploreInsights";
import AboutUsSection from "@/components/sections/Home/About";
import AimersTech from "@/components/sections/Home/AimersTech";
import OurProcessSection from "@/components/sections/OurProcess/OurProcessSection";
import TechStackSection from "@/components/sections/TechStack/TechStackSection";
import WhatWeDoSection from "@/components/sections/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div>
      <OurProcessSection />
      <WhatWeDoSection />
      <AboutUsSection />
      <AimersTech />
      <TechStackSection/>
      <ProjectSection/>
      <ExploreInsights />
    </div>
  );
}
