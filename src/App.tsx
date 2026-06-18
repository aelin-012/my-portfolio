import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, FileText, ExternalLink, Heart, Coffee, Clock, Users, Linkedin, BarChart, ClipboardCheckIcon, Presentation, UserPlus, MessageSquare, Search, Lightbulb, RefreshCw, Eye, Trophy, ChevronDown } from 'lucide-react';
import { MdInsights } from "react-icons/md";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const assetBase = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target as Node)) {
        setShowResumeOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'co-curriculars', label: 'Co-Curriculars' },
    { id: 'contact', label: 'Contact' },
  ];

  const projectCategories = [
    { label: "Data Analytics", note: "Case studies and insights" },
    { label: "Career Tracking", note: "Application and interview dashboarding" },
    { label: "IoT + ML", note: "Smart systems and automation" },
  ];

  type SingleExperience = {
    type: "single";
    role: string;
    company: string;
    duration: string;
    location: string;
    bulletPoints: string[];
  };

  type GroupExperience = {
    type: "group";
    company: string;
    subtitle: string;
    duration: string;
    roles: Array<{
      role: string;
      duration: string;
      location: string;
      bulletPoints: string[];
    }>;
  };

  const experiences: Array<SingleExperience | GroupExperience> = [
    {
      type: "single",
      role: "AI/ML Intern",
      company: "SANLAYAN (Defense Technology Solutions)",
      duration: "Jan 2026 - Present",
      location: "Bengaluru, Karnataka",
      bulletPoints: [
        "Developing AI/ML solutions for radar-based defense systems, working with data processing, analytical workflows, and software development activities.",
        "Collaborating with cross-functional engineering teams to analyze business and technical requirements, support solution development, and contribute to mission-critical applications.",
      ],
    },
    {
      type: "group",
      company: "Cognizant",
      subtitle: "IT Services and IT Consulting",
      duration: "Jul 2025 - Dec 2025",
      roles: [
        {
          role: "Programmer Analyst Trainee",
          duration: "Nov 2025 - Dec 2025",
          location: "Chennai, Tamil Nadu",
          bulletPoints: [
            "Assigned to an insurance-domain project, contributing to software testing activities and quality assurance processes.",
          ],
        },
        {
          role: "Programmer Analyst Trainee",
          duration: "Jul 2025 - Oct 2025",
          location: "Coimbatore, Tamil Nadu",
          bulletPoints: [
            "Completed structured training in web development, software testing, and analytical problem-solving fundamentals.",
            "Served as Cohort Representative, coordinating communication between trainees and trainers while supporting daily operational activities.",
          ],
        },
      ],
    },
  ];

  const technicalSkillsCategories = [
    {
      "category": "Programming & Data Analysis",
      "skills": [
        { "name": "Python", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { "name": "R", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
        { "name": "SQL", "logo": `${assetBase}logos/sql.png` }
      ],
    },

    {
      category: 'Data Visualization & BI Tools',
      skills: [
        { name: 'Tableau', logo: `${assetBase}logos/tableau.svg` },
        { name: 'Power BI', logo: `${assetBase}logos/power bi.svg` },
      ],
    },
    {
      category: 'Web Technologies',
      skills: [
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      ],
    },
    {
      category: 'Databases & Querying',
      skills: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'BigQuery Sandbox', logo: `${assetBase}logos/bigquery.svg` },
      ],
    },
    {
      category: 'Development Environments',
      skills: [
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'RStudio Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg' },
      ],
    },
    {
      category: 'Productivity Suites',
      "skills": [
        { "name": "Microsoft Excel", "logo": `${assetBase}logos/excel.png` },
        { "name": "Google Sheets", "logo": `${assetBase}logos/sheets.svg` },
        { "name": "Microsoft Office", "logo": `${assetBase}logos/office.svg` },
        { "name": "Google Workspace", "logo": `${assetBase}logos/google.svg` }
      ],
    }
  ];

  return (
    <div className={`min-h-screen bg-brand-beige dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-500 overflow-x-hidden`}>
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 dark:bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/5 dark:bg-indigo-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Floating Shapes */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-12 h-12 border-2 border-brand-blue/10 rounded-lg hidden lg:block"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] left-[5%] w-16 h-16 border-2 border-brand-blue/10 rounded-full hidden lg:block"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[5%] w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl hidden lg:block"
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 floating-nav bg-brand-beige/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-brand-blue dark:hover:text-white
                    ${activeSection === item.id ? 'text-brand-blue dark:text-blue-400 font-bold' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-[100vh] flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0349a8_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>
            <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-indigo-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative aspect-square w-56 h-56 rounded-full overflow-hidden border-4 border-brand-beige dark:border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={`${assetBase}images/Profile.jpeg`}
                  alt="Yoshni Nandha Kishore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-6xl font-bold mb-4 text-brand-blue dark:text-blue-400">Yoshni Nandha Kishore</h1>
              <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">Data Analytics | Management & Marketing Enthusiast | MBA Aspirant</p>

              <div className="flex justify-center md:justify-start items-center gap-4 mb-8">
                <a
                  href="mailto:yoshni2003@gmail.com"
                  className="group relative bg-white dark:bg-gray-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-md"
                  ></div>
                <img
                  src={`${assetBase}logos/google.svg`}
                  alt="Email"
                  className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
                </a>
                <a
                  href="https://www.linkedin.com/in/yoshni-nandha-kishore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white dark:bg-gray-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue to-blue-300 dark:from-blue-900 dark:to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://github.com/aelin-012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white dark:bg-gray-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110 dark:invert"
                  />
                </a>
              </div>

              <div className="flex justify-center md:justify-start gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="group bg-brand-blue dark:bg-white text-white dark:text-black px-8 py-3 rounded-full hover:bg-brand-blue/90 dark:hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-blue/20"
                >
                  Hire Me
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </motion.a>
                
                <div className="relative" ref={resumeRef}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowResumeOptions(!showResumeOptions)}
                    className="group border-2 border-brand-blue dark:border-white text-brand-blue dark:text-white px-8 py-3 rounded-full hover:bg-brand-blue/5 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 font-semibold"
                  >
                    Resume
                    <FileText className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showResumeOptions ? 'rotate-180' : ''}`} />
                  </motion.button>

                  <AnimatePresence>
                    {showResumeOptions && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-3 left-0 w-56 bg-brand-beige dark:bg-gray-800 border-2 border-brand-blue/20 dark:border-white/20 rounded-2xl shadow-2xl overflow-hidden z-20 backdrop-blur-xl"
                      >
                        <div className="p-2 grid grid-cols-2 gap-2">
                          <a
                            href={`${assetBase}Tech Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-3 hover:bg-brand-blue/10 dark:hover:bg-gray-700/50 rounded-xl transition-all border border-transparent hover:border-brand-blue/20 group/item"
                            onClick={() => setShowResumeOptions(false)}
                          >
                            <span className="text-[10px] font-black text-brand-blue dark:text-gray-100 tracking-wider">TECH</span>
                            <div className="w-4 h-0.5 bg-brand-blue/20 mt-1 rounded-full"></div>
                          </a>
                          <a
                            href={`${assetBase}Non-Tech Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-3 hover:bg-brand-blue/10 dark:hover:bg-gray-700/50 rounded-xl transition-all border border-transparent hover:border-brand-blue/20 group/item"
                            onClick={() => setShowResumeOptions(false)}
                          >
                            <span className="text-[10px] font-black text-brand-blue dark:text-gray-100 tracking-wider">CREATIVE</span>
                            <div className="w-4 h-0.5 bg-brand-blue/20 mt-1 rounded-full"></div>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-brand-beige dark:bg-gray-900 transition-colors duration-300">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="container mx-auto px-4 space-y-16"
        >
          <h2 className="text-4xl font-bold text-center gradient-text tracking-tight">About Me</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm relative overflow-hidden transition-colors duration-300 border border-brand-blue/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg font-light">
                Hi there! I'm an aspiring data analyst with a passion for turning raw data into meaningful insights.
                With a strong foundation in data analysis, problem-solving, and visualization, I love uncovering patterns that drive smarter decision-making.
                Beyond numbers, I'm also a management enthusiast who thrives on organization and leadership.
                <br /><br />
                When I'm not diving into datasets, you'll find me reading a good book, listening to music and podcasts, or binge-watching movies and series.
                I also love experimenting in the kitchen - always with a cup of coffee in hand!
                <br /><br />
                Let's connect and make data work its magic!
              </p>
              <div className="flex justify-center gap-10">
                <div className="flex flex-col items-center group">
                  <BarChart className="w-8 h-8 mb-2 animate-float text-brand-blue/60 dark:text-gray-400 group-hover:text-brand-blue transition-colors" style={{ animationDelay: '0.2s' }} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data-Driven</span>
                </div>
                <div className="flex flex-col items-center group">
                  <ClipboardCheckIcon className="w-8 h-8 mb-2 animate-float text-brand-blue/60 dark:text-gray-400 group-hover:text-brand-blue transition-colors" style={{ animationDelay: '0.4s' }} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Organized</span>
                </div>
                <div className="flex flex-col items-center group">
                  <Coffee className="w-8 h-8 mb-2 animate-float text-brand-blue/60 dark:text-gray-400 group-hover:text-brand-blue transition-colors" style={{ animationDelay: '0.6s' }} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Coffee Lover</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center gradient-text tracking-tight">Education</h2>

          <div id="education" className="max-w-4xl mx-auto space-y-6">
            {[
              {
                degree: "Bachelor of Technology",
                duration: "Oct 2021 - June 2025",
                field: "Electronics and Communication Engineering",
                institution: "Amrita Vishwa Vidyapeetham",
                location: "Coimbatore",
                score: "First class"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-1 text-brand-blue dark:text-blue-400">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.duration}</p>
                  {edu.field && (
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-2 italic">{edu.field}</p>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">{edu.institution}</p>
                      {edu.location && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
                      )}
                    </div>
                    <div className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full shadow-sm group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors duration-300">
                      <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-center gradient-text tracking-tight">Experience</h2>

          <div id="experience" className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                variants={revealVariants}
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  {exp.type === "single" ? (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1 text-brand-blue dark:text-blue-400">{exp.role}</h3>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-medium text-gray-700 dark:text-gray-300">{exp.company}</span>
                            <span className="text-gray-400 dark:text-gray-500">•</span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                            <span className="inline-block w-4 h-4">📍</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-3 border-l-2 border-gray-200 dark:border-gray-700">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base list-disc pl-5">
                          {exp.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-brand-blue dark:text-blue-400">{exp.company}</h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-gray-700 dark:text-gray-300">{exp.subtitle}</span>
                            <span className="text-gray-400 dark:text-gray-500">•</span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-6">
                        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700"></div>
                        {exp.roles.map((role, roleIndex) => (
                          <div key={`${role.duration}-${roleIndex}`} className={`relative pb-6 ${roleIndex === exp.roles.length - 1 ? 'pb-0' : ''}`}>
                            <div className="absolute left-[-1px] top-2 h-3 w-3 rounded-full bg-brand-blue ring-4 ring-gray-50 dark:ring-gray-800"></div>
                            <div className="pl-6">
                              <h4 className="text-lg font-bold mb-1 text-gray-800 dark:text-gray-100">{role.role}</h4>
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className="text-gray-600 dark:text-gray-300 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{role.duration}</span>
                                <span className="text-gray-400 dark:text-gray-500">📍</span>
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{role.location}</span>
                              </div>
                              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base list-disc pl-5">
                                {role.bulletPoints.map((point, pointIndex) => (
                                  <li key={pointIndex}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="skills" className="py-20 bg-brand-beige dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 space-y-16">
          <h2 className="text-4xl font-bold text-center gradient-text">Skills</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="skill-card bg-white/50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm transition-colors duration-300 border border-brand-blue/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <MdInsights className="w-6 h-6 text-brand-blue" />
                <h3 className="text-2xl font-bold text-brand-blue dark:text-blue-400">Technical Skills</h3>
              </div>
              <div className="space-y-8">
                {technicalSkillsCategories.map((category, index) => (
                  <div key={category.category}>
                    <h4 className="text-lg font-semibold mb-4 text-brand-blue/80 dark:text-blue-400">{category.category}</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 transition-colors duration-300 group-hover:scale-110">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-6 h-6 transition-transform group-hover:rotate-12"
                            />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                    {index < technicalSkillsCategories.length - 1 && (
                      <div className="my-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="skill-card bg-white/50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm transition-colors duration-300 border border-brand-blue/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-brand-blue" />
                <h3 className="text-2xl font-bold text-brand-blue dark:text-blue-400">Professional Skills</h3>
              </div>
              <div className="flex flex-col justify-between h-full gap-2">
                {[
                  { icon: Presentation, name: 'Presentation Skills', description: 'Effective delivery of ideas' },
                  { icon: UserPlus, name: 'Collaboration', description: 'Working well in teams' },
                  { icon: MessageSquare, name: 'Communication', description: 'Clear and concise exchange of info' },
                  { icon: Search, name: 'Research', description: 'In-depth analysis and investigation' },
                  { icon: Lightbulb, name: 'Problem-solving Skills', description: 'Creative and analytical solutions' },
                  { icon: RefreshCw, name: 'Adaptability', description: 'Flexibility in dynamic environments' },
                  { icon: Eye, name: 'Attention to Detail', description: 'Precision and thoroughness' },
                  { icon: Trophy, name: 'Leadership Skills', description: 'Guiding teams to success' },
                  { icon: Clock, name: 'Time Management', description: 'Efficient prioritization and productivity' }
                ].map((skill) => (
                  <div key={skill.name} className="group flex items-start gap-3 p-2 rounded-lg transition-colors flex-1">
                    <skill.icon className="w-5 h-5 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold mb-1">{skill.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <h2 className="text-4xl font-bold text-center gradient-text tracking-tight">Certifications</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Self-MBA Program",
                link: "https://drive.google.com/drive/folders/1qRezDMcYWl_SFQe1u7AHE4cfU22nLv9Z",
                issuer: "MBAthinking",
                date: "May 2026 - Present",
                status: "Ongoing",
                description: "Certifications by MBAthinking.",
              },
              {
                title: "Google Data Analytics Professional Certificate",
                link: "https://drive.google.com/file/d/1oGMQ9_n3aeOqa4330LHuudzhssFmujdo/view",
                issuer: "Coursera Platform",
                date: "Jan 2025 - Mar 2025",
                status: "Completed",
                description: "Completed a comprehensive program on data analytics."
              },
              {
                title: "Google Business Intelligence Professional Certificate",
                link: "https://drive.google.com/file/d/1VaBIIBTYphgvJpP0SVdN537oAcFtBs5c/view?usp=sharing",
                issuer: "Coursera Platform",
                date: "Mar 2025 - Present",
                status: "Completed",
                description: "Completed training focused on business intelligence concepts and tools."
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                variants={revealVariants}
                className="group bg-white/50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-brand-blue/5 dark:border-gray-700"
              >
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-1 text-brand-blue dark:text-blue-400">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.issuer} | {cert.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-2">{cert.description}</p>
                  <div className="mt-5 flex flex-col gap-3 border-t border-gray-200/70 pt-4 dark:border-gray-700/70 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href={cert.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue/90 dark:bg-blue-500 dark:text-white dark:shadow-blue-500/20 dark:hover:bg-blue-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {cert.link ? "View Certificate" : "Link to be added"}
                    </a>
                    {cert.status === "Completed" ? (
                      <span className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                        <ClipboardCheckIcon className="w-4 h-4" />
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 self-start rounded-full bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                        <Clock className="w-4 h-4" />
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            <section id="projects" className="py-20 bg-brand-beige dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Case Studies Portfolio",
                description: "Data-driven business insights using Excel, SQL, R, and Tableau",
                techStack: ["Excel", "SQL", "R", "Tableau"],
                link: "https://yoshni-portfolio.blogspot.com/search/label/case-studies"
              },
              {
                title: "Career Application Insight Tracker",
                description: "Data-driven insights and dashboards to optimize job applications and interview success.",
                techStack: ["Excel", "SQL", "R", "Tableau"],
                link: "https://yoshni-portfolio.blogspot.com/2025/03/career-application-insight-tracker.html"
              },
              {
                title: "Automated IoT-Enabled Women's Safety System with Real-Time Monitoring",
                description: "IoT-enabled women's safety detection with Arduino and machine learning.",
                techStack: ["Python", "IoT", "ML", "Hardware Model"],
              }
            ].map((project, index) => {
              const category = projectCategories[index % projectCategories.length];

              const card = (
                <>
                  <div className="relative border-b border-gray-100 bg-gradient-to-r from-white via-brand-beige/35 to-white px-6 py-5 pr-24 dark:border-gray-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                    <div className="flex flex-col items-start gap-2">
                      <span className="inline-flex h-10 w-[170px] items-center justify-center rounded-full bg-brand-blue/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] whitespace-nowrap text-brand-blue dark:bg-blue-400/10 dark:text-blue-300">
                        {category.label}
                      </span>
                      <p className="w-[170px] text-left text-sm leading-snug text-gray-500 dark:text-gray-400">
                        {category.note}
                      </p>
                    </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute right-5 top-1/2 inline-flex -translate-y-1/2 items-center gap-1.5 rounded-full border border-brand-blue/10 bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue shadow-sm transition-colors hover:bg-white dark:border-blue-300/20 dark:bg-gray-900/75 dark:text-blue-300"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Open link
                        </a>
                      )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-blue-500 dark:text-blue-400">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-brand-blue/5 dark:bg-gray-700 text-brand-blue dark:text-gray-300 px-3 py-1 rounded-full shadow-sm hover:bg-brand-blue/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  variants={revealVariants}
                  className="project-card group relative"
                >
                  <div className="block h-full overflow-hidden rounded-2xl border border-gray-100 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-[0_18px_45px_rgba(3,73,168,0.10)] dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400/25 dark:hover:shadow-[0_18px_45px_rgba(59,130,246,0.18)]">
                    {card}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="co-curriculars" className="py-20 bg-brand-beige dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text tracking-tight">Co-Curriculars</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                activity: "Class Representative",
                organization: "Amrita Vishwa Vidyapeetham",
                duration: "Oct 2021 - Sep 2022",
                description: "Strategically facilitated communication between students and faculty, and coordinated academic schedules & events.",
                logo: `${assetBase}logos/amrita.svg`
              },
              {
                activity: "GDSC - Student Core Team",
                organization: "Google Developer Student Club",
                duration: "Aug 2023 - May 2024",
                description: "Designed & delivered targeted resources, workshops, and networking for technical skill development and career growth.",
                logo: `${assetBase}logos/gdsc.svg`
              },
              {
                activity: "The Elite Club",
                organization: "Amrita Vishwa Vidyapeetham",
                duration: "Oct 2023 - Sep 2024",
                description: "Organized workshops & events to instill entrepreneurship and leadership, empowering students with business ideation.",
                logo: `${assetBase}logos/elite.jpg`
              },
              {
                activity: "IETE Club",
                organization: "Institution of Electronics and Telecommunication Engineers",
                duration: "Nov 2023 - Sep 2024",
                description: "Conducted workshops and events, coordinated a major workshop with oneAPI Intel AI Hackathon.",
                logo: `${assetBase}logos/iete.jpg`
              },
              {
                activity: "Finance Coordinator - Gokulastami Event, ECE Dept",
                organization: "Amrita Vishwa Vidyapeetham",
                duration: "Aug 2024",
                description: "Optimized budget allocation using advanced Excel analytics for financial compliance and efficiency.",
                logo: `${assetBase}logos/amrita.svg`
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                variants={revealVariants}
                className="group bg-white/50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-brand-blue/5 dark:border-gray-700 flex items-start gap-4"
              >
                <div className="w-12 h-12 flex-shrink-0">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.organization} logo`}
                      className="w-full h-full object-contain rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs">Logo</div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 text-brand-blue dark:text-blue-400">{item.activity}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.organization} | {item.duration}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-brand-beige dark:bg-gray-900 transition-colors duration-300">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text tracking-wide">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6">
            <a
              href="mailto:yoshni2003@gmail.com"
              className="group flex items-center gap-4 p-5 bg-white/50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-brand-blue/5 dark:border-gray-700 min-w-[240px]"
            >
              <div className="bg-brand-blue/10 dark:bg-gray-700 p-3 rounded-xl group-hover:bg-brand-blue/20 transition-colors">
                <Mail className="w-6 h-6 text-brand-blue dark:text-brand-blue transition-colors" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">Email</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">yoshni2003@gmail.com</span>
              </div>
            </a>
            <a
              href="https://github.com/aelin-012"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white/50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-brand-blue/5 dark:border-gray-700 min-w-[240px]"
            >
              <div className="bg-brand-blue/10 dark:bg-gray-700 p-3 rounded-xl group-hover:bg-brand-blue/20 transition-colors">
                <Github className="w-6 h-6 text-brand-blue dark:text-brand-blue transition-colors" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">GitHub</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">github.com/aelin-012</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/yoshni-nandha-kishore"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white/50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-brand-blue/5 dark:border-gray-700 min-w-[240px]"
            >
              <div className="bg-brand-blue/10 dark:bg-gray-700 p-3 rounded-xl group-hover:bg-brand-blue/20 transition-colors">
                <Linkedin className="w-6 h-6 text-brand-blue dark:text-brand-blue transition-colors" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">LinkedIn</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Yoshni Nandha Kishore</span>
              </div>
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 bg-brand-beige dark:bg-gray-900 border-t border-brand-blue/10 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Yoshni Nandha Kishore. All Rights Reserved.
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
