export interface IAuthor {
    name: string;
    role: string;
    avatar: string;
}

export interface IFeatured {
    image: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    author: IAuthor;
}

export interface IArticles {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    author: IAuthor;
}

export const Featured: IFeatured = {
    image: "/featured-blog.png",
    title: "25 LinkedIn Stats To Know For In 2025",
    description:
        "In this article, you'll find 20+ essential LinkedIn statistics that reveal the platform's reach, effectiveness, and continued growth.",
    date: "July 30, 2025",
    readTime: "15 min read",
    author: {
        name: "Rezwan Alam Roan",
        role: "Frontend Developer",
        avatar: "/useravatar.png",
    },
};

export const Articles: IArticles[] = [
    {
        id: 1,
        image: "/article1.png",
        title: "AI Won’t Take Your Job – But It Will Change How You Do It",
        description:
        "AI won’t replace you, but it will redefine the way you work—automating the routine so you can focus on creativity and strategy.",
        date: "July 30, 2025",
        readTime: "12 min read",
        author: {
        name: "Mohammad Tashin Ferdous",
        role: "Software Engineer",
        avatar: "/useravatar.png",
        },
    },
    {
        id: 2,
        image: "/article2.png",
        title: "How UX-Driven Design Impacts SaaS Product Success",
        description:
        "In the fast-paced world of SaaS, having a powerful product isn’t enough—users expect seamless, intuitive, and delightful experiences.",
        date: "July 15, 2025",
        readTime: "8 min read",
        author: {
        name: "Md. Azizul Hakim",
        role: "UI/UX Designer",
        avatar: "/useravatar.png",
        },
    },
];
