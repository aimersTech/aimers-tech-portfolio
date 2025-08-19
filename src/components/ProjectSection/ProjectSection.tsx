import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/projects-data';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectSection = () => {
    return (
        <div>
                <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions and successful implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData?.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link href={`/projects/${project.id}`}>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 text-xs">
                      View Project
                    </Button>
                  </Link>
                  <Link href={project.code} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 px-4 py-2 text-xs bg-transparent"
                    >
                      Code
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )).slice(0,3)}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Want to see more of <span className="text-cyan-400">our work</span>?
          </p>
          <Link href="/projects">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">View All Projects →</Button>
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ProjectSection;