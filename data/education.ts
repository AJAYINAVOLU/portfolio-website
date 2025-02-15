import MUIcon from "@/components/icons/MUIcon";
import NortheasternIcon from "@/components/icons/NortheasternIcon";

export interface EducationField {
    university: string;
    degree: string;
    duration: string;
    year: string;
    logo: React.ComponentType<{ className?: string }>;
}

export const educations: EducationField[] = [
    {
        university: "Northeastern University, Boston",
        degree: "Master of Science in Computer Science",
        duration: "Jan 2023 - May 2025",
        year: "2023-2025",
        logo: NortheasternIcon
    },
    {
        university: "Vellore Institute of Technology, India",
        degree: "Bachelor of Technology, Computer Science and Engineering",
        duration: "Aug 2018 - May 2022",
        year: "2018-2022",
        logo: MUIcon
    },
];
    
    