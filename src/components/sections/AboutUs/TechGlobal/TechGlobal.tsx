import React from 'react';
import image1 from "../../../../assests/globalTech/1192b57cbe683f4e7552a1cba0ddeb9d25178cb9.jpg";
import image2 from "../../../../assests/globalTech/381ff00ca5da7cf94c2b0e86d0afe0791cd6e358.jpg";
import image3 from "../../../../assests/globalTech/8992e44c5d3fee34a1d8ad50d7bbbb5cf3a72411.png";
import image4 from "../../../../assests/globalTech/bc272ac73079f5ee6d83e5e01eeeab4fda6534a9.jpg";
import image5 from "../../../../assests/globalTech/f86ad9d679c6ff6809bd5bd87855cf87ca8fa37b.jpg";
import image6 from "../../../../assests/globalTech/first.jpg";
import Image from 'next/image';


const TechGlobal = () => {
    return (
        <section className="bg-black text-white mb-[120px] overflow-hidden">
            <div className="container mx-auto  relative xl:h-[800px]  ">
                <div className="py-16 lg:pt-[100px] lg:pb-0 relative z-10">
                    <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-start">
                        {/* Left Content */}
                        <div className="space-y-8 text-center xl:text-left">
                            <h1 className="text-[30px] lg:text-[40px] font-bold leading-tight">
                                <span className="text-cyan-400">Hey!</span>
                                <br />
                                We are <span className="text-cyan-400">Aimers Tech Global</span>
                            </h1>

                            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto xl:mx-0">
                                We are a forward-thinking technology company dedicated to transforming ideas into reality. We specialize in crafting innovative digital solutions that drive business growth and user engagement. Our team blends creativity with cutting-edge technology to solve real-world challenges with precision and impact. Our mission is to empower businesses with technology that inspires progress and delivers impact. Collaboration and creativity are at the heart of everything we build. We don’t just develop products — we craft experiences that shape the future.
                            </p>
                        </div>

                        {/* Right Images Container */}
                        <div className="relative hidden xl:block">
                            {/* Image 1 */}
                            <div className="w-[190px]  h-[135px] absolute top-[80px] left-[70px] rounded-lg overflow-hidden shadow-xl">
                                <Image src={image1} alt="Team collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Image 2 */}
                            <div className="w-[200px] h-[143px] absolute top-[250px] left-[130px] rounded-lg overflow-hidden shadow-xl">
                                <Image src={image3} alt="Team meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Image 3 */}
                            <div className="w-[280px] h-[200px] absolute top-[0px] left-[280px] rounded-lg overflow-hidden shadow-xl">
                                <Image src={image6} alt="Development team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Image 4 */}
                            <div className="w-[282px] h-[200px] absolute top-[230px] left-[350px] rounded-lg overflow-hidden shadow-xl">
                                <Image src={image4} alt="Design process" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Image 5 */}
                            <div className="w-[214px] h-[153px] absolute top-[420px] left-[65px] rounded-lg overflow-hidden shadow-xl">
                                <Image src={image5} alt="Team discussion" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Image 6 */}
                            <div className="w-[282px] h-[200px] absolute top-[460px] left-[300px] rounded-lg overflow-hidden shadow-xl">
                                <Image src={image2} alt="Workspace" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Responsive grid for smaller screens */}
                        <div className="xl:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
                            {[image1, image3, image6, image4, image5, image2].map((img, idx) => (
                                <div key={idx} className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
                                    <Image
                                        src={img}
                                        alt={`Responsive image ${idx + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechGlobal;
