"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { SiShowtime } from "react-icons/si";
import { GiSoccerKick } from "react-icons/gi";
import { FaLightbulb, FaCode, FaBookReader } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
            నమస్కారం🙏!! I&apos;m Ajay Kumar Reddy Inavolu, a passionate Full Stack Software Engineer dedicated to building scalable, high-performance applications. I specialize in designing and deploying robust microservices, optimizing real-time data processing, and architecting cloud-native solutions. My expertise spans backend development with Java, Spring Boot, and frontend engineering with React and Next.js, ensuring seamless user experiences. With a strong foundation in distributed systems, containerization (Docker, Kubernetes), and cloud technologies (AWS, ELK, Kafka), I thrive on solving complex engineering challenges. Committed to innovation and excellence, I continuously refine systems for high availability, performance, and security, shaping the future of technology with impactful solutions.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 

              After gaining hands-on experience as a Full Stack Software Engineer, I decided to pursue my Master&apos;s in Computer Science to deepen my expertise in scalable system design, cloud computing, and distributed architectures. This journey has significantly enhanced my problem-solving and critical thinking skills, allowing me to refine my approach to building efficient algorithms and optimizing system performance. Along the way, I developed a passion for solving complex coding challenges, turning them into opportunities to push my technical boundaries and continuously evolve as an engineer.            </p>
            <p>
              When I&apos;m not crunching numbers or coding, you might find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><SiShowtime className="inline-block mr-2" /> Watching anime (Naruto and Onepiece are my all-time favourites)</li>
              <li><FaBookReader className="inline-block mr-2" /> Reading books (currently reading Atomic Habits)</li>
              <li><GiSoccerKick className="inline-block mr-2" /> Playing soccer (GGMU!!!)</li>
            </ul>
            <p>
            Currently, I&apos;m deeply engaged in building scalable full-stack applications while exploring the potential of Large Language Models (LLMs) and cloud-native architectures. I stay updated on the latest technological advancements from leading tech companies, drawing inspiration to refine my skills and explore cutting-edge innovations. As a firm believer in lifelong learning and continuous improvement, I embrace every challenge as an opportunity to grow, expand my knowledge, and push the boundaries of what technology can achieve. </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
