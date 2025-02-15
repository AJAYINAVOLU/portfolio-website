// components/Footer.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useMediaQuery } from '@/hooks/use-media-query';
import { LeetcodeIcon } from 'hugeicons-react';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/AJAYINAVOLU' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajayinavolu/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/' },
    { icon: LeetcodeIcon, href: 'https://leetcode.com/u/AJAY_REDDY_1999/'},
    { icon: FaEnvelope, href: 'mailto:ajay.inavolu@gmail.com' },
  ];

  return (
    <motion.footer
      className="py-8 mt-20 bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {isMobile && (
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        )}
        <motion.div
          className="text-center text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-lg font-mono">
            Designed & Built by{' '}
            <span className="text-primary font-bold">
              Ajay Kumar Reddy Inavolu
            </span>{' '}
            <span className="animate-pulse inline-block">🚀</span>
          </p>
          <p className="mt-2 text-sm">
          “I have self-doubt. I have insecurity. I have fear of failure. I have nights when I show up at the arena and I’m like, ‘My back hurts, my feet hurt, my knees hurt. I don’t have it. I just want to chill.’ We all have self-doubt. You don’t deny it, but you also don’t capitulate to it. You embrace it.” - Kobe Bryant
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
