

export interface IOurProcess {
    step: number,
    title: string,
    description: string,
    options: string[]
}

export const OurProcess: IOurProcess[] = [
    {
        step: 1,
        title: "Planning & Proposal",
        description: "We start by understanding your vision, requirements, and goals to create a comprehensive project plan.",
        options: [
            "Requirement Analysis",
            "Project Scope",
            "Timeline Planning",
            "Cost Estimation"
        ]
    },
    {
        step: 2,
        title: "Design & Build",
        description: "Our team creates intuitive designs and develops robust solutions using the latest technologies.",
        options: [
            "UI/UX Design",
            "Prototyping",
            "Development",
            "Code Review"
        ]
    },
    {
        step: 3,
        title: "Test & Deploy",
        description: "Rigorous testing ensures quality, followed by smooth deployment to production environments.",
        options: [
            "Quality Assurance",
            "User Testing",
            "Performance Testing",
            "Deployment"
        ]
    },
    {
        step: 4,
        title: "Ongoing Support",
        description: "We provide continuous support, maintenance, and updates to ensure your solution evolves with your needs.",
        options: [
            "24/7 Support",
            "Regular Updates",
            "Performance Monitoring",
            "Feature Enhancement"
        ]
    },
]