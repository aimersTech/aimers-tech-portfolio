import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ExploreInsights from "@/components/sections/ExploreInsights/ExploreInsights";
import OurProcessSection from "@/components/sections/OurProcess/OurProcessSection";
import TechStackSection from "@/components/sections/TechStack/TechStackSection";
import WhatWeDoSection from "@/components/sections/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div>
      <OurProcessSection />
      <WhatWeDoSection />
      <TechStackSection/>
      <ProjectSection/>
      <ExploreInsights />
    </div>
  );
}
