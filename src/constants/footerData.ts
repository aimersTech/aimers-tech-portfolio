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

export type TIcon = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const footerSocialIcons: TIcon[] = [
    { icon: Facebook },
    { icon: Instagram },
    { icon: Linkedin },
    { icon: Github },
    { icon: Youtube },
    { icon: Twitter },
];

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