// data/workExperience.ts
import { FaPython, FaChartBar, FaAws, FaChalkboardTeacher, FaJava, FaLeaf} from 'react-icons/fa';
import { SiApachekafka, SiApachespark, SiBoehringeringelheim, SiDjango, SiDocker, SiElasticstack, SiGraphql, SiJenkins, SiJunit5, SiLangchain, SiMlflow, SiMysql, SiOpenai, SiPandas, SiPostgresql, SiPytorch, SiRedis, SiStreamlit, SiTableau, SiTensorflow } from 'react-icons/si';
import React from 'react';
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import NortheasternIcon from '@/components/icons/NortheasternIcon';
import { internshipWorkAtBI, workAtJocata, workExpAtNEU, workAtIIT } from './jobDesc';
import { RiNextjsFill } from 'react-icons/ri';
import BILogo from '@/components/icons/BILogo';
import JocataIcon from '@/components/icons/JocataIcon';
import IITLogo from '@/components/icons/IITLogo';
import { DiMongodb } from 'react-icons/di';


export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: string;
  description: string | Promise<string>;
  skills: Skill[];
  logo: React.ComponentType<{ className?: string }>;
}

async function convertMarkDown(desc: string){
  const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeStringify);
  const file = await processor.process(desc);
  return String(file);
}


export const workExperiences: WorkExperience[] = [
{
    company: "One Community Global",
    position: "Software Engineer",
    duration: "Aug 2024 - December 2024",
    year: "2024",
    description: convertMarkDown(internshipWorkAtBI),
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring", icon: FaLeaf },
      { name: "Next.js", icon:  RiNextjsFill},
      { name: "GraphQL", icon: SiGraphql},
      { name: "ELK", icon: SiElasticstack},
      { name: "Kafka", icon: SiApachekafka},
      { name: "LangChain", icon: SiLangchain},
      { name: "OpenAI", icon: SiOpenai},
      { name: "JUnit", icon: SiJunit5},
      { name: "Docker", icon: SiDocker},
      { name: "Jenkins", icon: SiJenkins},
      { name: "AWS", icon: FaAws},
    ],
    logo: BILogo,
  },
  {
    company: "Northeastern University",
    position: "Graduate Teaching Assistant",
    duration: "Aug 2023 - Jul 2024",
    year: "2023-2024",
    description: convertMarkDown(workExpAtNEU),
    skills: [
      { name: "Teaching", icon: FaChalkboardTeacher },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "Pytorch", icon:  SiPytorch},
      { name: "PySpark", icon: SiApachespark},
      { name: "MySQL", icon:  SiMysql},
      { name: "NoSQL", icon: DiMongodb},
    ],
    logo: NortheasternIcon
  },
  {
    company: "Omdena",
    position: "Software Engineer",
    duration: "Jul 2022 - Oct 2022",
    year: "2022",
    description: convertMarkDown(workAtJocata),
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring", icon: FaLeaf },
      { name: "Next.js", icon:  RiNextjsFill},
      { name: "ELK", icon: SiElasticstack},
      { name: "Kafka", icon: SiApachekafka},
      { name: "Redis", icon: SiRedis},
      { name: "Docker", icon: SiDocker},
      { name: "AWS", icon: FaAws},
    ],
    logo: JocataIcon
  },
  {
    company: "Indian Institue of Technology",
    position: "Deep Learning Intern",
    duration: "Jun 2021 - Aug 2021",
    year: "2021",
    description: convertMarkDown(workAtIIT),
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Pandas", icon: SiPandas},
      { name: "Pytorch", icon:  SiPytorch},
      { name: "PySpark", icon: SiApachespark},
      { name: "MLFlow", icon: SiMlflow},
      { name: "Redis", icon: SiRedis},
      { name: "TensorFlow", icon: SiTensorflow},
      { name: "Docker", icon: SiDocker},
      { name: "AWS", icon: FaAws},
    ],
    logo: IITLogo
  },
];

