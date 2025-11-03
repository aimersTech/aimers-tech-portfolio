import React from "react";

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Design",
      technologies: [
        { name: "Figma", color: "bg-cyan-400" },
        { name: "Adobe XD", color: "bg-green-400" },
        { name: "Adobe Photoshop", color: "bg-pink-400" },
        { name: "Sketch", color: "bg-purple-400" },
      ],
    },
    {
      title: "Frontend",
      technologies: [
        { name: "React", color: "bg-yellow-400" },
        { name: "Next.js", color: "bg-purple-400" },
        { name: "TypeScript", color: "bg-green-400" },
        { name: "Tailwind CSS", color: "bg-cyan-400" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", color: "bg-green-400" },
        { name: "Django", color: "bg-cyan-400" },
        { name: "GoLang", color: "bg-orange-400" },
        { name: "Python", color: "bg-yellow-400" },
      ],
    },
    {
      title: "Databases",
      technologies: [
        { name: "PostgreSQL", color: "bg-yellow-400" },
        { name: "MongoDB", color: "bg-cyan-400" },
        { name: "Redis", color: "bg-pink-400" },
        { name: "Supabase", color: "bg-green-400" },
      ],
    },
    {
      title: "AI & ML",
      technologies: [
        { name: "TensorFlow", color: "bg-green-400" },
        { name: "PyTorch", color: "bg-pink-400" },
        { name: "OpenAI", color: "bg-cyan-400" },
        { name: "Hugging Face", color: "bg-yellow-400" },
      ],
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        { name: "Firebase", color: "bg-cyan-400" },
        { name: "AWS", color: "bg-yellow-400" },
        { name: "Docker", color: "bg-green-400" },
        { name: "Vercel", color: "bg-pink-400" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white underline decoration-[#FFFFFF] decoration-1 underline-offset-[15px] text-5xl font-semibold mb-6">
            <span className="text-cyan-400">Technology</span>{" "}
            <span className="text-white">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build robust, scalable, and
            innovative solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl p-8 bg-black/40 hover:border-gray-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-8 text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center justify-between border border-gray-700 rounded-full px-4 py-2 hover:border-gray-500 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${tech.color} flex-shrink-0`}
                      />
                      <span className="text-gray-300 group-hover:text-white">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Always <span className="text-cyan-400">Learning</span>, Always{" "}
            <span className="text-cyan-400">Growing</span>
          </h3>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Our tech stack is constantly evolving. We stay up-to-date with the
            latest technologies and best practices to ensure we deliver the most
            effective solutions for your projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
