import ecomerce from '@/assests/e-comerce.png'
import taskmanager from '@/assests/task-manager.png'
import realstate from '@/assests/real-state.png'
import fitness from '@/assests/fitness.png'
import content from '@/assests/content-management.png'
import chatbot from '@/assests/chatbot.png'
import { StaticImageData } from 'next/image'
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string | StaticImageData
  technologies: string[]
  features: string[]
  gallery: string[]
  liveDemo: string
  code: string
  category: string
  duration: string
  client: string
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with secure payments, inventory management, and admin dashboard",
    longDescription:
      "This comprehensive e-commerce platform revolutionizes online retail with its robust architecture and user-centric design. Built with modern technologies, it provides seamless shopping experiences while offering powerful administrative tools for business owners.",
    image:ecomerce,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT", "Tailwind CSS"],
    features: [
      "Secure payment processing with Stripe integration",
      "Real-time inventory management system",
      "Advanced product search and filtering",
      "Responsive admin dashboard",
      "User authentication and authorization",
      "Order tracking and management",
      "Email notifications and confirmations",
      "SEO-optimized product pages",
    ],
    gallery: ["/person-at-desk.png", "/ecommerce-dashboard.png", "/shopping-cart.png"],
    liveDemo: "https://ecommerce-demo.vercel.app",
    code: "https://github.com/example/ecommerce-platform",
    category: "Full-Stack Development",
    duration: "3 months",
    client: "RetailTech Solutions",
  },
  {
    id: "2",
    title: "AI Task Manager",
    description: "Smart task management with AI-powered prioritization and natural language processing",
    longDescription:
      "An intelligent task management system that leverages artificial intelligence to help users organize, prioritize, and complete their work more efficiently. The system learns from user behavior to provide personalized recommendations.",
    image:taskmanager,
    technologies: ["Next.js", "OpenAI", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],
    features: [
      "AI-powered task prioritization",
      "Natural language task creation",
      "Smart deadline suggestions",
      "Productivity analytics and insights",
      "Team collaboration tools",
      "Integration with popular calendar apps",
      "Voice-to-text task input",
      "Automated progress tracking",
    ],
    gallery: ["/colorful-sticky-notes.png", "/ai-dashboard.png", "/placeholder-ufc24.png"],
    liveDemo: "https://ai-task-manager.vercel.app",
    code: "https://github.com/example/ai-task-manager",
    category: "AI & Machine Learning",
    duration: "4 months",
    client: "ProductivityPro Inc.",
  },
  {
    id: "3",
    title: "Fitness Tracker PWA",
    description: "Progressive web app for fitness tracking with workout plans and push notifications",
    longDescription:
      "A comprehensive fitness tracking progressive web application that helps users achieve their health goals through personalized workout plans, nutrition tracking, and social features.",
    image:fitness,
    technologies: ["React", "PWA", "Firebase", "Chart.js", "Service Workers", "Web Push API"],
    features: [
      "Offline workout tracking capability",
      "Personalized workout recommendations",
      "Nutrition and calorie tracking",
      "Progress visualization with charts",
      "Social challenges and leaderboards",
      "Push notifications for reminders",
      "Wearable device integration",
      "Custom workout plan creation",
    ],
    gallery: ["/person-exercising.png", "/fitness-dashboard.png", "/workout-tracking-app.png"],
    liveDemo: "https://fitness-tracker-pwa.vercel.app",
    code: "https://github.com/example/fitness-tracker-pwa",
    category: "Mobile Development",
    duration: "2 months",
    client: "FitLife Technologies",
  },
  {
    id: "4",
    title: "Real Estate Dashboard",
    description: "Analytics dashboard for real estate professionals with data visualization and property management",
    longDescription:
      "A powerful analytics dashboard designed for real estate professionals to manage properties, track market trends, and make data-driven decisions with comprehensive reporting tools.",
    image:realstate,
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js", "Express", "JWT"],
    features: [
      "Interactive property map visualization",
      "Market trend analysis and reporting",
      "Client relationship management",
      "Property valuation tools",
      "Commission tracking and calculations",
      "Document management system",
      "Automated report generation",
      "Mobile-responsive design",
    ],
    gallery: ["/placeholder-ni005.png", "/real-estate-analytics.png", "/property-dashboard.png"],
    liveDemo: "https://real-estate-dashboard.vercel.app",
    code: "https://github.com/example/real-estate-dashboard",
    category: "Data Analytics",
    duration: "5 months",
    client: "RealtyMax Group",
  },
  {
    id: "5",
    title: "Content Management System",
    description: "Custom CMS with intuitive drag-and-drop interface and seamless workflow for content creators",
    longDescription:
      "A modern content management system that empowers content creators with an intuitive interface, powerful editing tools, and seamless publishing workflows for digital content.",
    image:content,
    technologies: ["Next.js", "Headless CMS", "Sanity.io", "Vercel", "TypeScript"],
    features: [
      "Drag-and-drop content builder",
      "Real-time collaborative editing",
      "SEO optimization tools",
      "Multi-language content support",
      "Version control and rollback",
      "Custom field types and templates",
      "Automated content scheduling",
      "Performance analytics dashboard",
    ],
    gallery: ["/person-writing-content.png", "/cms-editor-interface.png", "/content-dashboard.png"],
    liveDemo: "https://cms-platform.vercel.app",
    code: "https://github.com/example/content-management-system",
    category: "Content Management",
    duration: "3 months",
    client: "ContentFlow Media",
  },
  {
    id: "6",
    title: "Chatbot Integration",
    description: "AI-powered intelligent customer service chatbot with advanced natural language understanding",
    longDescription:
      "An advanced AI chatbot solution that provides intelligent customer service with natural language processing, sentiment analysis, and seamless integration with existing business systems.",
    image:chatbot,
    technologies: ["Python", "TensorFlow", "React", "Node.js", "NLP", "WebSocket"],
    features: [
      "Advanced natural language processing",
      "Sentiment analysis and emotion detection",
      "Multi-language support",
      "Integration with CRM systems",
      "Conversation analytics and insights",
      "Escalation to human agents",
      "Custom training data support",
      "Real-time response optimization",
    ],
    gallery: ["/chat-interface.png", "/chatbot-analytics-dashboard.png", "/conversation-flow.png"],
    liveDemo: "https://chatbot-integration.vercel.app",
    code: "https://github.com/example/chatbot-integration",
    category: "AI & Automation",
    duration: "4 months",
    client: "CustomerCare Solutions",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter((project) => project.category === category)
}


