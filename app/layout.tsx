// app/layout.tsx
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaUser, FaBriefcase, FaCode, FaUserGraduate } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Ajay Kumar Reddy Inavolu",
  description: "Portfolio page of Ajay Kumar Reddy Inavolu",
};

const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <FaUser />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaCode />,
  },
  {
    name: "Work",
    link: "#work",
    icon: <FaBriefcase />,
  },
  {
    name: "Education",
    link: "#education",
    icon: <FaUserGraduate />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Ajay's Portfolio" />
        <meta
          property="og:description"
          content="Dedicated Engineer with expertise in building scalable, high-performance microservices and real-time data processing solutions. Proficient in designing and deploying distributed cloud and AI platforms, leveraging Java, Spring Boot, Docker, AWS."
          />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <StickyIcons />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
