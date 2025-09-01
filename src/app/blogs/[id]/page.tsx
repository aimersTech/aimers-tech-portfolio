"use client"
import { blogDetails } from "@/constants/blogDetails"
import Image from "next/image"
import { useParams } from "next/navigation"

const Page = () => {
    const {id} = useParams()
    console.log(id)
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-10 font-dmsans text-white">
        <h1 className="text-4xl font-bold ">
            <span className="text-[#00D9FF]">{blogDetails.heading1}</span>
            <span className="">{blogDetails.heading2}</span>
        </h1>

        <div className="flex items-center gap-8 ">
            {/* first */}
            <div className="flex gap-3">
                <div className="rounded-full">
                    <Image src={blogDetails.author.img} alt={blogDetails.author.name} className="rounded-full h-[50px] w-[50px]"/>
                </div>
                <div>
                    <p className="text-xl text-white">{blogDetails.author.name}</p>
                    <p className="text-sm">{blogDetails.author.role}</p>
                </div>
            </div>
            {/* vertical line */}
            <div className="h-5 w-[2px] bg-white"/>
            {/* second */}
            <div className="flex flex-col">
                <p className="text-xl text-white">{blogDetails.changable.status} {blogDetails.changable.issueDate}</p>
                <div className="flex items-center gap-2">
                    <Image src={blogDetails.changable.icon} alt="nice-try-didi"/>
                    <p className="text-sm">{blogDetails.changable.timeToRead}</p>
                </div>
            </div>
        </div>
        <div>
            <Image src={blogDetails.bannerImg} alt="blog-banner"/>
        </div>
        <h2 className="text-3xl font-bold">
           {blogDetails.subheading}
        </h2>
        <p className="text-sm">
            {blogDetails.body1}
        </p>
        <p className="text-sm">
          {blogDetails.body2}
        </p>
    </div>
}

export default Page;