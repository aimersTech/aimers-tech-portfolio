import KnowTheAimers from '@/components/sections/AboutUs/KnowTheAimers/KnowTheAimers';
import OurValues from '@/components/sections/AboutUs/OurValues/OurValues';

function page() {
  return (
    <div className='bg-black min-h-screen w-full font-sans'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <OurValues />
        <KnowTheAimers />
      </div>
    </div>
  );
}

export default page;