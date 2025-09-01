"use client";
import { blogDetails } from "@/constants/blogDetails";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogDetails.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-10 font-dmsans text-white">
      <h1 className="text-4xl font-bold">
        <span className="text-[#00D9FF]">{blog.heading1}</span>
        <span>{blog.heading2}</span>
      </h1>

      <div className="flex items-center gap-8">
        {/* first */}
        <div className="flex gap-3">
          <div className="rounded-full">
            <Image
              src={blog.author.img}
              alt={blog.author.name}
              className="rounded-full h-[50px] w-[50px]"
            />
          </div>
          <div>
            <p className="text-xl text-white">{blog.author.name}</p>
            <p className="text-sm">{blog.author.role}</p>
          </div>
        </div>
        {/* vertical line */}
        <div className="h-5 w-[2px] bg-white" />
        {/* second */}
        <div className="flex flex-col">
          <p className="text-xl text-white">
            {blog.changable.status} {blog.changable.issueDate}
          </p>
          <div className="flex items-center gap-2">
            <Image src={blog.changable.icon} alt="nice-try-didi" />
            <p className="text-sm">{blog.changable.timeToRead}</p>
          </div>
        </div>
      </div>
      <div>
        <Image src={blog.bannerImg} alt="blog-banner" />
      </div>
      <h2 className="text-3xl font-bold">{blog.subheading}</h2>
      <p className="text-sm">{blog.body1}</p>
      <p className="text-sm">{blog.body2}</p>
    </div>
  );
};

export default BlogDetails;
