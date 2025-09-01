import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    LucideProps,
    MapPin,
    Twitter,
    Youtube,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type TIcon = {
    href: string
    target?: string
    rel?: string
    icon: React.ElementType
}

export const footerSocialIcons: TIcon[] = [
    {
        href: "https://www.facebook.com/profile.php?id=61578696980378",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: Facebook,
    },
    {
        href: "https://www.instagram.com/aimers.tech.global/",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: Instagram,
    },
    {
        href: "https://linkedin.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: Linkedin,
    },
    {
        href: "https://github.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: Github,
    },
    {
        href: "https://www.youtube.com/@aimers.tech.global",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: Youtube,
    },
    {
        href: "https://x.com/aimerstech_dd",
        target: "_blank",
        rel: "noopener noreferrer",
        icon: Twitter,
    },
]

export interface IFooterDataElement {
    heading: string;
    options: string[]
}

export interface IFooterData {
    company: IFooterDataElement;
    services: IFooterDataElement;
    support: IFooterDataElement;
}

export const footerData: IFooterData = {
    company: {
        heading: "Company",
        options: ["About Us", "Insights", "Process", "Projects"]
    },
    services: {
        heading: "Services",
        options: ["UI/UX Design", "Web Development", "Mobile Application", "AI Integration"]
    },
    support: {
        heading: "Support",
        options: ["Contact", "FAQ", "Support", "Documentation"]
    }
}