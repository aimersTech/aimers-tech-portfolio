export interface IBlogs {
    id: number
    title: string
    description: string
    image: string
    date: string
    readTime: string
}

export const Blogs: IBlogs[] = [
    {
    id: 1,
    title: "Big O Notation and the Climb Over Constants.",
    description:
      "A practical exploration of why Quicksort often outperforms Mergesort despite their similar O(n log n) complexities, highlighting the real-world impact of constant factors in algorithm performance.",
    image: "/bigo.webp",
    date: "July 30, 2025",
    readTime: "12 min read",
  },
  {
    id: 2,
    title: "DSA before Development or Development before DSA?",
    description:
      "Why mastering Data Structures and Algorithms (DSA) before diving into development can make you a stronger, more efficient problem solver.",
    image: "/dsavsdev.png",
    date: "July 31, 2025",
    readTime: "9 min read",
  },
  {
    id: 3,
    title: "Why is the Random Function on So Many Programming Languages Lying?",
    description:
      "Discover why programming 'random' functions aren't truly random and how to achieve genuine unpredictability in your projects.",
    image: "/blog3.png",
    date: "July 30, 2025",
    readTime: "15 min read",
  },
  // {
  //   id: 4,
  //   title: "AI helps you work fast, smart, and do more tasks.",
  //   description:
  //     "Artificial Intelligence (AI) is no longer a futuristic concept—it’s now a vital part of how we work.",
  //   image: "/blog4.png",
  //   date: "July 31, 2025",
  //   readTime: "6 min read",
  // },
  // {
  //   id: 5,
  //   title: "AI Won’t Take Your Job – But It Will Change How You Do It",
  //   description:
  //     "AI won’t replace you, but it will redefine the way you work—automating the routine so you can focus on creativity and strategy.",
  //   image: "/blog1.png",
  //   date: "July 30, 2025",
  //   readTime: "12 min read",
  // },
  // {
  //   id: 6,
  //   title: "AI helps you work fast, smart, and do more tasks.",
  //   description:
  //     "Artificial Intelligence (AI) is no longer a futuristic concept—it’s now a vital part of how we work.",
  //   image: "/blog4.png",
  //   date: "July 31, 2025",
  //   readTime: "6 min read",
  // },
]
