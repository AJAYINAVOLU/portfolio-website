// components/SkillsGrid.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// FontAwesome Icons
import { FaPython, FaDatabase, FaJava, FaReact, FaGithub, FaDocker, FaAws } from 'react-icons/fa';

// Remix Icons
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";

// Simple Icons
import { 
  SiSpringboot, SiGraphql, SiApachekafka, SiMongodb, SiPostgresql, 
  SiMysql, SiOracle, SiRedis, SiJenkins, SiKubernetes, SiElasticsearch, 
  SiPostman, SiTestinglibrary, 
  SiTerraform
} from "react-icons/si";

// Devicons
import { DiSpark } from "react-icons/di";


const SkillsGrid = () => {
  const skills = useMemo(() => [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <RiJavascriptFill />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <RiNextjsFill />, name: 'Next.js' },
    { icon: <SiSpringboot />, name: 'Spring Boot' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    { icon: <SiApachekafka />, name: 'Kafka' },
    { icon: <DiSpark />, name: 'Spark' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiOracle />, name: 'Oracle' },
    { icon: <SiRedis />, name: 'Redis' },
    { icon: <FaGithub />, name: 'Git' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <SiKubernetes />, name: 'Kubernetes' },
    { icon: <SiJenkins />, name: 'Jenkins' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <SiElasticsearch />, name: 'ELK Stack' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <SiTestinglibrary />, name: 'TestNG' },
    {icon:  <SiTerraform/>, name: 'Terraform'}
    
  ], []);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 -mx-2 sm:mx-0"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          custom={index}
          variants={skillVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-card text-card-foreground rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center"
        >
          <div className="text-2xl sm:text-3xl mb-1 text-primary">{skill.icon}</div>
          <p className="text-xs sm:text-sm font-medium">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
