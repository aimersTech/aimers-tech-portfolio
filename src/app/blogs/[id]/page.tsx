"use client";
import { blogDetails } from "@/constants/blogDetails";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogDetails.find((blog) => blog.id === Number(id));
  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
    if (blog?.body1) {
      fetch(blog.body1)
        .then((res) => res.text())
        .then((html) => setBlogContent(html))
        .catch((err) => console.error("Error loading blog HTML:", err));
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="container mx-auto grid place-items-center h-[50vh] text-white text-xl">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10 flex flex-col items-center justify-center gap-5 md:gap-10 font-dmsans text-white">
      <h1 className="text-2xl md:text-4xl self-start font-bold">
        <span className="text-[#00D9FF]">{blog.heading1}</span>
        <span>{blog.heading2}</span>
      </h1>

      {/* Author section */}
      <div className="flex flex-col md:flex-row self-start md:self-center items-start md:items-center gap-2 md:gap-6 lg:gap-8">
        <div className="flex gap-3 items-center">
          <div className="rounded-xl">
            <Image
              src={blog.author.img}
              alt={blog.author.name}
              className="rounded-xl h-[30px] w-[30px] md:h-[50px] md:w-[60px]"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl text-white">{blog.author.name}</p>
            <p className="text-[12px] md:text-sm">{blog.author.role}</p>
          </div>
        </div>

        <div className="h-5 w-[2px] bg-white hidden md:flex" />

        <div className="flex flex-col items-start">
          <p className="text-[12px] md:text-xl text-white">
            {blog.changable.status} {blog.changable.issueDate}
          </p>
          <div className="flex items-center gap-2">
            <Image
              src={blog.changable.icon}
              alt="icon"
              className="h-2 w-4 md:h-3 md:w-7"
            />
            <p className="text-[12px] md:text-sm">{blog.changable.timeToRead}</p>
          </div>
        </div>
      </div>

      {/* Banner image */}
      <div>
        <Image src={blog.bannerImg} alt="blog-banner" />
      </div>

      {/* Subheading */}
      <h2 className="text-xl md:text-3xl self-start font-bold">
        {blog.subheading}
      </h2>

      {/* Blog HTML content */}
      <div
        className="prose prose-invert max-w-none text-sm md:text-base leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blogContent }}
      />

      {/* More posts footer */}
      <div className="w-full flex justify-between items-center px-8 py-4 md:px-16 md:py-8 bg-[#D9D9D933]">
        <div className="flex flex-col gap-4 md:gap-14">
          <div className="flex flex-col gap-2 md:gap-8">
            <div className="w-fit border-b border-[#FFFFFF]">
              <p className="text-[12px] sm:text-sm md:text-xl">More Posts From</p>
            </div>
            <p className="font-dmsans text-base sm:text-xl md:text-3xl">
              {blog.author.name}
            </p>
          </div>

          <div className="flex gap-1 md:gap-2 items-center cursor-pointer">
            <p className="text-[12px] sm:text-sm md:text-xl">Go To Blogs</p>
            <ArrowRight className="mt-1 size-4 md:size-5" />
          </div>
        </div>

        <div>
          <Image
            src={blog.author.img1}
            className="w-full md:h-40 md:w-72 lg:h-48 lg:w-80"
            alt="author-large-image"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
