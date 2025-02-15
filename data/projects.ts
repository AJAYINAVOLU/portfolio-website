// data/projects.ts
import { RiNextjsFill, RiImageAiFill, RiAiGenerate2 } from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { PiGraphThin } from "react-icons/pi";

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
}

export const projects: Project[] = [
  {
  id: 1,
  title: "Next.js Portfolio Website",
  description: "A single-page application portfolio website built using Next.js, TailwindCSS, and shadcn/ui components.",
  icon: RiNextjsFill,
  technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
  githubLink: "https://github.com/AJAYINAVOLU/portfolio-website",
  },
  {
  id: 2,
  title: "Distributed Graph Analysis",
  description: "Implemented PageRank in MapReduce and Spark to analyze 1M nodes dense web graph on EMR cluster with I/O handling in S3 buckets",
  icon: PiGraphThin,
  technologies: ["PageRank", "Python", "Java", "PySpark", "AWS", "Hadoop"],
  githubLink: "https://github.com/AJAYINAVOLU/PageRank",
  },
  {
    id: 3,
    title: "Caption Craft",
    description: "Innovative social media platform designed to creatively generate and share art based on user-provided prompts.",
    icon: SiReact,
    technologies: ["Javascript", "React", "Express", "Redux", "MongoDB", "MaterialUI", "Stable Diffusion", "Transformers"],
    githubLink: "https://github.com/AJAYINAVOLU/portfolio-website",
  },
  {
    id: 4,
    title: "Image Editing Application",
    description: "Crafted a Java-based image editing tool with an intuitive GUI, allowing users to load, modify, and save images through both graphical and text-based inputs.",
    icon: RiImageAiFill,
    technologies: ["Java", "MVC design pattern", "JSwing", "JUnit"],
    githubLink: "https://github.com/AJAYINAVOLU/Image-Processing",
  },
  {
    id: 5,
    title: "Story Generation",
    description: "Fine-tuned a large language model (LLM) to generate coherent stories, trained on Facebook AI research dataset with 300,000 entries.",
    icon: RiAiGenerate2,
    technologies: ["Python", "DistilGPT", "Llama", "HuggingFace", "LangChain"],
    githubLink: "https://github.com/AJAYINAVOLU/story-generation",
  },
];
