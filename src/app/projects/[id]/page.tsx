"use client";

import { useParams } from "next/navigation";
import { getProjectById } from "@/lib/projects-data";
import { Button } from "@/components/ui/button";

import {ExternalLink, Github, Tag, } from "lucide-react";
import Image from "next/image";

const ProjectDetails = () => {
  const { id } = useParams(); 
  const project = getProjectById(id as string);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p className="text-xl">Project not found 🚫</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{project.category}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{project.longDescription}</p>
              <div className="flex flex-wrap gap-4">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
              <Image
                src={typeof project.image === "string" ? project.image : project.image.src}
                alt={project.title}
                width={500}
                height={500}
                className="relative w-full h-96 object-cover rounded-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technologies <span className="text-cyan-400">Used</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
