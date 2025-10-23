import blogAuthor1 from '../assets/individualBlog/blog1/blogAuthor-1.png';
import blogAuthorLargeImg1 from '../assets/individualBlog/blog1/blogAuthorLarge-1.png';
import sunglassIcon from '../assets/individualBlog/blog1/sunglassIcon.png';
// import bannerPic1 from '../assets/individualBlog/blog1/banner.png';

import newBannerPic1 from '../assets/individualBlog/blog1/bigo.webp';
import newBannerPic2 from '../assets/individualBlog/blog2/dsavsdev.png';
import newBannerPic3 from '../assets/individualBlog/blog3/randomnumber.png';


//blog2
import authorAzizSmall from '@/assets/individualBlog/blog2/author-2-aziz-small.jpg'
import authorAzizBig from '@/assets/individualBlog/blog2/author-2-aziz-big.jpg'
// import blog2Banner from '@/assets/individualBlog/blog2/blog-2-banner.png'

//blog3
import authorReanSmall from '@/assets/individualBlog/blog3/author-3-rean-small.jpg'
import authorReanBig from '@/assets/individualBlog/blog3/author-3-rean-big.jpg'
// import blog3Banner from '@/assets/individualBlog/blog3/blog-3-banner.png'

//blog4
// import authorMahinSmall from '@/assets/individualBlog/blog4/author-4-mahin-small.png'
// import authorMahinBig from '@/assets/individualBlog/blog4/author-4-mahin-big.png'
// import blog4Banner from '@/assets/individualBlog/blog4/blog-4-banner.png'

export const blogDetails = [
  {
    id: 1,
    heading1: "Big O Notation and",
    heading2: " the Climb Over Constants.",
    author: {
      img: blogAuthor1,
      img1: blogAuthorLargeImg1,
      name: "Md. Tahsin Ferdous",
      role: "Software Engineer",
    },
    changable: {
      status: "Updated",
      issueDate: "Sept 01, 2024",
      icon: sunglassIcon,
      timeToRead: "7 Min Read",
    },
    bannerImg: newBannerPic1,
    subheading: "Understanding how constant factors make Quicksort faster than Mergesort in real-world scenarios.",
    body1: `/blog-html/blog1.html`,
    body2: ``,
  },
  {
    id: 2,
    heading1: "DSA before Development or",
    heading2: " Development before DSA?",
    author: {
      img: authorReanSmall,
      img1: authorReanBig,
      name: "Rezuan Alam Rean",
      role: "Front End Developer",
    },
    changable: {
      status: "Updated",
      issueDate: "July 09, 2024",
      icon: sunglassIcon,
      timeToRead: "5 Min Read",
    },
    bannerImg: newBannerPic2,
    subheading: "Exploring how a solid grasp of DSA lays the groundwork for smarter coding, better performance, and long-term growth in software development.",
    body1: `/blog-html/blog2.html`,
    body2: ``,
  },
  {
    id: 3,
    heading1: "Why is the Random Function on So",
    heading2: " Many Programming Languages Lying?",
    author: {
      img: authorAzizSmall,
      img1: authorAzizBig,
      name: "Md. Azizul Hakim",
      role: "UI/UX Designer",
    },
    changable: {
      status: "Updated",
      issueDate: "July 30, 2025",
      icon: sunglassIcon,
      timeToRead: "15 Min Read",
    },
    bannerImg: newBannerPic3,
    subheading: "Unveiling the Secrets Behind Pseudo-Randomness and Its Impact on Coding, Security, and Games",
    body1: `/blog-html/blog3.html`,
    body2: ``,
  },
//   {
//     id: 4,
//     heading1: "AI Helps You Work",
//     heading2: " Fast, Smart, and Do More Tasks",
//     author: {
//       img: authorMahinSmall,
//       img1: authorMahinBig,
//       name: "Touhidur Rahman Mahin",
//       role: "Lead Consultant & Visual Designer",
//     },
//     changable: {
//       status: "Updated",
//       issueDate: "July 31, 2025",
//       icon: sunglassIcon,
//       timeToRead: "6 Min Read",
//     },
//     bannerImg: blog4Banner,
//     subheading: "Work Faster and Smarter with AI",
//     body1: `Artificial Intelligence (AI) is no longer a futuristic concept—it’s now a vital part of how we work. Whether you're in tech, business, or managing personal projects, AI helps you work faster, smarter, and handle more tasks efficiently. Rather than replacing humans, AI acts as a smart assistant, making your daily work easier and your results better.`,
//     body2: `Final Thoughts:
// AI is here to make your work-life better. By automating boring tasks, giving you smart insights, and helping you manage more projects, AI lets you focus on what truly matters—thinking creatively, solving real problems, and delivering your best work.`,
//   },
//   {
//     id: 5,
//     heading1: "AI Won't Take Your Job-",
//     heading2: " But It Will Change How You Do It",
//     author: {
//       img: blogAuthor1,
//       img1: blogAuthorLargeImg1,
//       name: "Md. Tahsin Ferdous",
//       role: "Software Engineer",
//     },
//     changable: {
//       status: "Updated",
//       issueDate: "July 30, 2025",
//       icon: sunglassIcon,
//       timeToRead: "12 Min Read",
//     },
//     bannerImg: bannerPic1,
//     subheading: "AI is Changing Work—Not Replacing Workers",
//     body1: `
// The rapid advancement of Artificial Intelligence has sparked widespread concerns about job security. Many fear that machines will eventually replace human workers across industries. However, the reality is far more nuanced. AI is not here to take your job; instead, it is poised to transform how you work. Rather than replacing humans, AI will automate repetitive and mundane tasks, allowing professionals to focus on higher-value activities that require creativity, empathy, and critical thinking—skills that machines cannot replicate.
// One of the most significant changes AI will bring is the automation of routine tasks. Activities like data entry, report generation, and even basic customer support will increasingly be handled by AI systems. This shift will free up human workers to dedicate more time to strategic decision-making, problem-solving, and innovative projects that drive business growth. AI will also empower professionals by providing data-driven insights at an unprecedented speed and scale, enabling faster and more informed decision-making processes across various industries.

// Rather than eliminating jobs, AI will reshape roles and create new collaborative workflows where humans and machines work side by side. Professionals will become supervisors and collaborators of AI, managing AI-driven processes and ensuring their outputs align with business objectives. This collaboration will require workers to develop new skill sets, including AI literacy, data interpretation, and the ability to effectively communicate and work with AI systems. Job roles will evolve—for instance, customer support agents may transition into AI bot trainers, ensuring the AI delivers accurate and empathetic responses to customers.
// Another key impact of AI will be its ability to boost human creativity and innovation. By handling the tedious aspects of work, AI will allow creative professionals to dedicate more time to ideation, experimentation, and refining their craft. Fields like marketing, UX/UI design, and product development will benefit from faster prototyping and iterative processes, accelerating the pace of innovation.

// To thrive in this evolving landscape, individuals must adopt a mindset of lifelong learning. Staying updated with the latest AI tools and technologies relevant to their industry will be crucial. Soft skills like critical thinking, emotional intelligence, and adaptability will become even more valuable as human-centric qualities that machines cannot replicate. Embracing AI tools in daily workflows will not only enhance efficiency but also provide a deeper understanding of how to collaborate effectively with these technologies.
// In conclusion, AI is not a threat to human jobs; it is a catalyst for change. While certain routine tasks will be automated, AI will open up new opportunities for those willing to adapt and evolve. The future of work is not about humans versus machines but about humans and machines working together to achieve greater efficiency, innovation, and impact. AI won’t replace you, but it will redefine the way you work—automating the routine so you can focus on creativity and strategy.

// `,
//     body2: `Final Thoughts:
// AI isn’t a job killer—it’s a job shifter. While some routine roles will be automated, countless new opportunities will emerge for those who embrace the change. The future of work isn’t about human vs. machine; it’s about human + machine working together to achieve more than either could alone.`,
//   },
//   {
//     id: 6,
//     heading1: "AI Helps You Work",
//     heading2: " Fast, Smart, and Do More Tasks",
//     author: {
//       img: authorMahinSmall,
//       img1: authorMahinBig,
//       name: "Touhidur Rahman Mahin",
//       role: "Lead Consultant & Visual Designer",
//     },
//     changable: {
//       status: "Updated",
//       issueDate: "July 31, 2025",
//       icon: sunglassIcon,
//       timeToRead: "6 Min Read",
//     },
//     bannerImg: blog4Banner,
//     subheading: "Work Faster and Smarter with AI",
//     body1: `Artificial Intelligence (AI) is no longer a futuristic concept—it’s now a vital part of how we work. Whether you're in tech, business, or managing personal projects, AI helps you work faster, smarter, and handle more tasks efficiently. Rather than replacing humans, AI acts as a smart assistant, making your daily work easier and your results better.`,
//     body2: `Final Thoughts:
// AI is here to make your work-life better. By automating boring tasks, giving you smart insights, and helping you manage more projects, AI lets you focus on what truly matters—thinking creatively, solving real problems, and delivering your best work.`,
//   },
];