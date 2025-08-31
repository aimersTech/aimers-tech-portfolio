import KnowTheAimers from '@/components/sections/AboutUs/KnowTheAimers/KnowTheAimers';
import OurValues from '@/components/sections/AboutUs/OurValues/OurValues';
import WantToJoinUs from '@/components/sections/AboutUs/WantToJoinUs/WantToJoinUs';

function page() {
  return (
    <div className='bg-black min-h-screen w-full font-sans'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <OurValues />
        <KnowTheAimers />
        <WantToJoinUs />
      </div>
    </div>
  );
}

export default page;