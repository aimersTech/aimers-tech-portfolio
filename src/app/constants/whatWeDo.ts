export interface IWhatWeDo {
    title: string,
    description: string,
    options: string[]
}

export const WhatWeDo: IWhatWeDo[] = [
    {
        title: "Web & App Development",
        description: "Building robust and scalable web platforms using modern frameworks like React, Next.js, and Node.js",
        options: [
            "Responsive Design",
            "SEO Optimization",
            "Performance Focused",
            "Modern UI/UX"
        ]
    },
    {
        title: "AI Integration",
        description: "Applying machine learning to real-world problems with custom AI solutions and automation",
        options: [
            "Machine Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Automation"
        ]
    },
    {
        title: "MVP Launch",
        description: "Helping startups go from idea to launch with strategic planning and rapid development",
        options: [
            "Market Research",
            "Prototype Development",
            "Launch Strategy",
            "Growth Planning"
        ]
    },
    {
        title: "Mobile Solutions",
        description: "Creating seamless mobile experiences with progressive web apps and responsive design",
        options: [
            "Cross-Platform",
            "Native Performance",
            "Offline Capability",
            "App Store Ready"
        ]
    },
    {
        title: "Database Design",
        description: "Architecting scalable database solutions with optimal performance, maintainability and security",
        options: [
            "SQL & NoSQL",
            "Data Migration",
            "Performance Tuning",
            "Security First"
        ]
    },
    {
        title: "Cloud Solutions",
        description: "Deploying and managing applications on cloud platforms for maximum scalability",
        options: [
            "AWS & Firebase",
            "Auto Scaling",
            "CI/CD Pipeline",
            "Monitoring & Analytics"
        ]
    },
]