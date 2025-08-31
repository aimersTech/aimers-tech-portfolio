import React from 'react';

const AimersTechSection = () => {
  return (
    <section className="bg-gray-800 text-white py-[118px] px-5 lg:px-10">
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-16 justify-items-center">

          {/* Left Content */}
          <div className="space-y-6 flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
              Why <span className="text-cyan-400">Aimers Tech Global</span>?
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl text-center lg:text-left">
              Aimers Tech Global is a forward-thinking software company
              delivering innovative digital solutions tailored to modern
              business needs. We specialize in modern UI/UX Design, custom
              Software Development, Web and Mobile Applications and
              cutting-edge tech services that drive growth. With a global
              vision and a passion for excellence, we aim to empower
              businesses through technology.
            </p>
          </div>

          {/* Right Content - Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  items-start">

            {/* Card 1 */}
            <div className="bg-black shadow-md p-6 lg:p-8 flex flex-col justify-center items-center text-center w-full h-36 relative lg:-top-10">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">5+</div>
              <div className="text-gray-300 text-lg lg:text-xl">Projects</div>
            </div>

            {/* Card 2 */}
            <div className="bg-black shadow-md p-6 lg:p-8 flex flex-col justify-center items-center text-center w-full h-36">
              <div className="text-gray-300 text-lg lg:text-xl leading-tight">
                Personal open-<br />source work
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-black shadow-md p-6 lg:p-8 flex flex-col justify-center items-center text-center w-full h-36 relative lg:-top-10">
              <div className="text-gray-300 text-lg lg:text-xl leading-tight">
                Internal tools/<br />mockups
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-black shadow-md p-6 lg:p-8 flex flex-col justify-center items-center text-center w-full h-36">
              <div className="text-gray-300 text-lg lg:text-xl">
                Technology Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AimersTechSection;