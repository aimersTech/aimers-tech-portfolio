import React from "react";

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Design",
      technologies: [
        { name: "Figma", color: "bg-red-500" },
        { name: "Adobe XD", color: "bg-green-500" },
        { name: "Adobe Photoshop", color: "bg-pink-500" },
        { name: "Sketch", color: "bg-purple-500" },
      ],
    },
    {
      title: "Frontend",
      technologies: [
        { name: "React", color: "bg-yellow-500" },
        { name: "Next.js", color: "bg-purple-500" },
        { name: "TypeScript", color: "bg-green-500" },
        { name: "Tailwind CSS", color: "bg-cyan-500" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", color: "bg-green-500" },
        { name: "Django", color: "bg-cyan-500" },
        { name: "GoLang", color: "bg-red-500" },
        { name: "Python", color: "bg-yellow-500" },
      ],
    },
    {
      title: "Databases",
      technologies: [
        { name: "PostgreSQL", color: "bg-yellow-500" },
        { name: "MongoDB", color: "bg-green-500" },
        { name: "Redis", color: "bg-red-500" },
        { name: "Supabase", color: "bg-green-500" },
      ],
    },
    {
      title: "AI & ML",
      technologies: [
        { name: "TensorFlow", color: "bg-green-500" },
        { name: "PyTorch", color: "bg-red-500" },
        { name: "OpenAI", color: "bg-cyan-500" },
        { name: "Hugging Face", color: "bg-yellow-500" },
      ],
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        { name: "Firebase", color: "bg-cyan-500" },
        { name: "AWS", color: "bg-yellow-500" },
        { name: "Docker", color: "bg-green-500" },
        { name: "Vercel", color: "bg-red-500" },
      ],
    },
  ];
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Technology</span>{" "}
            <span className="text-white">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build robust, scalable,
            and innovative solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techCategories?.map((category, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-6 bg-black/50 hover:border-gray-600 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category?.technologies?.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-3 group"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${tech.color} flex-shrink-0`}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {tech.name}
                    </span>
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
            latest technologies and best practices to ensure we deliver the
            most effective solutions for your projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
