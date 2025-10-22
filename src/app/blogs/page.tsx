import Image from "next/image";
import { Calendar, Glasses } from "lucide-react";
import { Blogs } from "@/constants/blogList";
import Link from "next/link";


const page = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <h2 className=" text-white underline decoration-[#FFFFFF] decoration-1 underline-offset-[15px] text-5xl font-semibold  text-center mb-12">
          <p className="text-cyan-400 ">Blogs</p>
        </h2>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {Blogs.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <div
                className="bg-black border max-w-[430px] h-[380px] flex flex-col justify-between items-center border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition"
              >
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[20px] font-semibold mb-3 hover:text-cyan-400 cursor-pointer line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 text-gray-400 text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Glasses size={14} color="#00D9FF"/>
                      {blog.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
