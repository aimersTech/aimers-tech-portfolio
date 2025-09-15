import React from "react";
import Image from "next/image";
import { ArrowRight, Glasses } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Featured, Articles } from "@/constants/exploreInsights";

const ExploreInsights = () => {
  return (
    <section className="bg-[#2F2F2F] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
          Explore <span className="text-cyan-400">Insights</span> For
          Acceleration
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Article */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="mb-6">
              <Image
                src={Featured.image}
                alt={Featured.title}
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{Featured.title}</h3>
            <p className="text-gray-300 mb-4">{Featured.description}</p>

            {/* Meta Info */}
            <div className="flex items-center text-sm text-gray-400 mb-6">
              <span>{Featured.date}</span>
              <span className="flex items-center ml-4">
                <Glasses size={14} className="mr-1" /> {Featured.readTime}
              </span>
            </div>

            <div className="flex items-center mb-6">
              <Image
                src={Featured.author.avatar}
                alt={Featured.author.name}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{Featured.author.name}</p>
                <p className="text-sm text-gray-400">{Featured.author.role}</p>
              </div>
            </div>

            {/* Button */}
            <button className="inline-flex self-start px-5 py-2 rounded-md border border-cyan-400 text-cyan-400 items-center gap-2 hover:bg-cyan-400 hover:text-black transition hover:cursor-pointer">
              Read More <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column Articles */}
          <div className="flex flex-col gap-10">
            {Articles.map((article, idx) => (
              <div
                key={idx}
                className="flex flex-col border-b border-gray-700 pb-8"
              >
                <div className="mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="rounded-md object-cover w-full"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                <p className="text-gray-400 text-sm mb-3">
                  {article.description}
                </p>

                {/* Meta */}
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{article.date}</span>
                  <span className="flex items-center ml-4">
                    <Glasses size={14} className="mr-1" /> {article.readTime}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={36}
                    height={36}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{article.author.name}</p>
                    <p className="text-xs text-gray-400">
                      {article.author.role}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="self-start px-4 py-1.5 rounded-md border border-cyan-400 text-cyan-400 flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition hover:cursor-pointer">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/blogs">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 hover:cursor-pointer">
              View All Blogs <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreInsights;