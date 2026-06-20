import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, ExternalLink, Heart, Clock, Users, Linkedin, ClipboardCheckIcon, Presentation, MessageSquare, Search, Lightbulb, RefreshCw, ChevronDown, PieChart, LayoutDashboard, CheckSquare, BrainCircuit, Globe, Briefcase, Target, LineChart, CheckCircle2, Settings, Calendar, ListChecks, ArrowUpRight, CalendarDays, Palette, Image as ImageIcon, Video, Share2, Sparkles, Handshake, Crown, UserCheck, Layers, Rocket, Focus, BookOpen, Music, Tv, ChefHat, Coffee, Hand } from 'lucide-react';
import Doodles from './components/Doodles';

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
    }, { rootMargin: '-20% 0px -20% 0px' });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
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

  type Project = {
    title: string;
    subtitle?: string;
    description: string;
    techStack: string[];
    categoryLabel: string;
    categoryNote?: string;
    link?: string;
    inProgress?: boolean;
  };

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
    duration: string;
    roles: Array<{
      role: string;
      location: string;
      bulletPoints: string[];
    }>;
  };

  const experiences: Array<SingleExperience | GroupExperience> = [
    {
      type: "group",
      company: "Sanlayan Technologies",
      duration: "Jan 2026 - Present",
      roles: [
        {
          role: "AI/ML Intern",
          location: "Bengaluru, Karnataka",
          bulletPoints: [
            "Developing AI/ML solutions for radar-based defense systems, working with data processing, analytical workflows, and software development activities.",
            "Collaborating with cross-functional engineering teams to analyze business and technical requirements, support solution development, and contribute to mission-critical applications.",
          ],
        },
      ],
    },
    {
      type: "group",
      company: "Cognizant",
      duration: "Jul 2025 - Dec 2025",
      roles: [
        {
          role: "Programmer Analyst Trainee",
          location: "Chennai, Tamil Nadu",
          bulletPoints: [
            "Assigned to an insurance-domain project, contributing to software testing activities and quality assurance processes.",
          ],
        },
        {
          role: "Programmer Analyst Trainee",
          location: "Coimbatore, Tamil Nadu",
          bulletPoints: [
            "Completed structured training in web development, software testing, and analytical problem-solving fundamentals.",
            "Served as Cohort Representative, coordinating communication between trainees and trainers while supporting daily operational activities.",
          ],
        },
      ],
    },
  ];

  const techSkills: any[] = [
    {
      category: "Core Tools & Programming",
      skills: [
        { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", image: `${assetBase}logos/sql.png` }
      ]
    },
    {
      category: "Data & BI Tools",
      skills: [
        { name: "Power BI", image: `${assetBase}logos/power bi.svg` },
        { name: "Tableau", image: `${assetBase}logos/tableau.svg` },
        { name: "Excel", image: `${assetBase}logos/excel.png` }
      ]
    },
    {
      category: "Data Skills",
      skills: [
        { name: "Data Analysis", icon: LineChart },
        { name: "Data Visualization", icon: PieChart },
        { name: "Dashboarding", icon: LayoutDashboard },
        { name: "Data Validation", icon: CheckSquare }
      ]
    },
    {
      category: "Databases & Platforms",
      skills: [
        { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "BigQuery Sandbox", image: `${assetBase}logos/bigquery.svg` }
      ]
    },
    {
      category: "Tech Foundations",
      skills: [
        { name: "AI/ML Fundamentals", icon: BrainCircuit },
        { name: "Web Development Basics", icon: Globe }
      ]
    }
  ];

  const businessCreativeSkills: any[] = [
    {
      category: "Business & Strategy",
      skills: [
        { name: "Business Analysis", icon: Briefcase },
        { name: "Strategic Thinking", icon: Target },
        { name: "Market Research", icon: Search },
        { name: "Decision Making", icon: CheckCircle2 }
      ]
    },
    {
      category: "Operations & Execution",
      skills: [
        { name: "Operations Management", icon: Settings },
        { name: "Planning & Execution", icon: Calendar },
        { name: "Project Coordination", icon: ListChecks },
        { name: "Process Improvement", icon: ArrowUpRight },
        { name: "Event Management", icon: CalendarDays }
      ]
    },
    {
      category: "Creative & Marketing Edge",
      skills: [
        { name: "Visual Design (Canva)", icon: Palette },
        { name: "Photo Editing", icon: ImageIcon },
        { name: "Short-form Video Editing (InShot)", icon: Video },
        { name: "Social Media Content Creation", icon: Share2 },
        { name: "Design Sensibility / Brand Aesthetics", icon: Sparkles }
      ]
    }
  ];

  const professionalSkills: any[] = [
    {
      category: "Communication & Collaboration",
      skills: [
        { name: "Communication", icon: MessageSquare },
        { name: "Presentation Skills", icon: Presentation },
        { name: "Cross-Functional Collaboration", icon: Users },
        { name: "Relationship Building", icon: Handshake }
      ]
    },
    {
      category: "Leadership & Ownership",
      skills: [
        { name: "Leadership", icon: Crown },
        { name: "People-Centric Approach", icon: UserCheck },
        { name: "Organizational Skills", icon: Layers },
        { name: "Initiative & Proactiveness", icon: Rocket }
      ]
    },
    {
      category: "Execution & Mindset",
      skills: [
        { name: "Creative Problem Solving", icon: Lightbulb },
        { name: "Attention to Detail", icon: Focus },
        { name: "Adaptability", icon: RefreshCw },
        { name: "Time Management", icon: Clock }
      ]
    }
  ];

  const featuredProjects: Project[] = [
    {
      title: "Marketing & Business Experimentation",
      description: "Applying business concepts through practical experiments in marketing, strategy, product management, finance, analytics, and growth initiatives.",
      techStack: ["Marketing", "Strategy", "Product", "Finance"],
      categoryLabel: "SELF-MBA",
      inProgress: true,
    },
    {
      title: "Case Studies Portfolio",
      description: "Analyzed real-world business challenges to generate data-driven insights, recommendations, and strategic solutions.",
      techStack: ["Excel", "SQL", "R", "Tableau"],
      categoryLabel: "DATA ANALYTICS",
    },
    {
      title: "Career Application Insight Tracker",
      description: "Transformed recruitment data into actionable insights on hiring trends, compensation patterns, and role requirements.",
      techStack: ["Excel", "SQL", "R", "Tableau"],
      categoryLabel: "PEOPLE ANALYTICS",
    },
    {
      title: "Automated IoT-Enabled Women's Safety System with Real-Time Monitoring",
      description: "Developed an intelligent real-time monitoring solution using IoT and analytics to enhance safety and emergency response.",
      techStack: ["Python", "IoT", "ML", "Hardware Model"],
      categoryLabel: "IOT + MACHINE LEARNING",
    },
  ];

  return (
    <div className={`min-h-screen bg-brand-beige dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-500 overflow-x-hidden`}>
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Doodles />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 dark:bg-blue-900/10 rounded-full border-brand-blue/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/5 dark:bg-indigo-900/10 rounded-full border-brand-blue/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        

      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 floating-nav bg-brand-beige/70 dark:bg-gray-900/70 backdrop-blur-md shadow-cute transition-all duration-300 border-b border-gray-200 dark:border-gray-800">
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
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-indigo-400 rounded-full border-brand-blue/20 blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative aspect-square w-56 h-56 rounded-full border-brand-blue/20 overflow-hidden border-4 border-brand-beige dark:border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
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
                  className="group relative bg-white dark:bg-gray-800 p-3 rounded-full border-brand-blue/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out"
                >
                  <div
                    className="absolute inset-0 rounded-full border-brand-blue/20 bg-gradient-to-r from-brand-blue via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-md"
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
                  className="group relative bg-white dark:bg-gray-800 p-3 rounded-full border-brand-blue/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out"
                >
                  <div className="absolute inset-0 rounded-full border-brand-blue/20 bg-gradient-to-r from-brand-blue to-blue-300 dark:from-blue-900 dark:to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
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
                  className="group relative bg-white dark:bg-gray-800 p-3 rounded-full border-brand-blue/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out"
                >
                  <div className="absolute inset-0 rounded-full border-brand-blue/20 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
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
                  className="group bg-brand-blue dark:bg-white text-white dark:text-black px-8 py-3 rounded-full border-brand-blue/20 hover:bg-brand-blue/90 dark:hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-blue/20"
                >
                  Hire Me
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </motion.a>
                
                <div className="relative" ref={resumeRef}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowResumeOptions(!showResumeOptions)}
                    className="group border-2 border-brand-blue dark:border-white text-brand-blue dark:text-white px-8 py-3 rounded-full border-brand-blue/20 hover:bg-brand-blue/5 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 font-semibold"
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
                        className="absolute bottom-full mb-3 left-0 w-56 bg-brand-beige dark:bg-gray-800 border-2 border-brand-blue/20 dark:border-white/20 rounded-3xl shadow-2xl overflow-hidden z-20 backdrop-blur-xl"
                      >
                        <div className="p-2 grid grid-cols-2 gap-2">
                          <a
                            href={`${assetBase}Tech Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-3 hover:bg-brand-blue/10 dark:hover:bg-gray-700/50 rounded-3xl transition-all border border-transparent hover:border-brand-blue/20 group/item"
                            onClick={() => setShowResumeOptions(false)}
                          >
                            <span className="text-[10px] font-black text-brand-blue dark:text-gray-100 tracking-wider">TECH</span>
                            <div className="w-4 h-0.5 bg-brand-blue/20 mt-1 rounded-full border-brand-blue/20"></div>
                          </a>
                          <a
                            href={`${assetBase}Non-Tech Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-3 hover:bg-brand-blue/10 dark:hover:bg-gray-700/50 rounded-3xl transition-all border border-transparent hover:border-brand-blue/20 group/item"
                            onClick={() => setShowResumeOptions(false)}
                          >
                            <span className="text-[10px] font-black text-brand-blue dark:text-gray-100 tracking-wider">CREATIVE</span>
                            <div className="w-4 h-0.5 bg-brand-blue/20 mt-1 rounded-full border-brand-blue/20"></div>
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
            <div className="bg-white/70 dark:bg-gray-800/80 p-10 rounded-[3rem] shadow-cute relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 dark:bg-blue-400/10 rounded-full border-brand-blue/20 -translate-y-1/2 translate-x-1/2"></div>
              <p className="text-gray-700 dark:text-gray-200 leading-loose mb-10 text-lg font-medium relative z-10 flex flex-col gap-6">
                <span>
                  Hi there! <Hand className="inline-block w-5 h-5 mx-1 text-amber-500" /> I'm someone who enjoys working at the intersection of data, marketing, and management. I love turning raw data into insights <PieChart className="inline-block w-5 h-5 mx-1 text-brand-blue" />, but also enjoy thinking about how those insights translate into real business decisions and strategies <Lightbulb className="inline-block w-5 h-5 mx-1 text-amber-400" />.
                </span>
                <span>
                  With a foundation in data analysis, problem-solving, and visualization, I’m always curious about patterns, trends, and what they actually mean for growth and impact <Rocket className="inline-block w-5 h-5 mx-1 text-red-500" />. At the same time, I’m equally interested in planning, organizing, and contributing to teams where ideas turn into action <Target className="inline-block w-5 h-5 mx-1 text-emerald-500" />.
                </span>
                <span>
                  Outside of work, I’m usually reading <BookOpen className="inline-block w-5 h-5 mx-1 text-indigo-500" />, listening to music <Music className="inline-block w-5 h-5 mx-1 text-pink-500" /> or podcasts, or binge-watching a good series <Tv className="inline-block w-5 h-5 mx-1 text-gray-500" />. I also enjoy experimenting in the kitchen <ChefHat className="inline-block w-5 h-5 mx-1 text-gray-600" /> — always with a cup of coffee in hand! <Coffee className="inline-block w-5 h-5 mx-1 text-amber-700" />
                </span>
                <span>
                  Let’s connect and build something meaningful together <Sparkles className="inline-block w-5 h-5 mx-1 text-yellow-500" />
                </span>
              </p>
              <div className="flex justify-center gap-12 relative z-10">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="mb-3 animate-float transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 text-brand-blue dark:text-blue-400" style={{ animationDelay: '0.2s' }}>
                    <PieChart size={36} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-brand-blue/70 dark:text-blue-300/80 bg-brand-blue/5 dark:bg-blue-900/30 px-3 py-1 rounded-full">Data-Driven</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="mb-3 animate-float transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 text-brand-blue dark:text-blue-400" style={{ animationDelay: '0.4s' }}>
                    <LineChart size={36} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-brand-blue/70 dark:text-blue-300/80 bg-brand-blue/5 dark:bg-blue-900/30 px-3 py-1 rounded-full">Growth-Oriented</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="mb-3 animate-float transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 text-brand-blue dark:text-blue-400" style={{ animationDelay: '0.6s' }}>
                    <BookOpen size={36} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-brand-blue/70 dark:text-blue-300/80 bg-brand-blue/5 dark:bg-blue-900/30 px-3 py-1 rounded-full">Avid Reader</span>
                </div>
              </div>
            </div>
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
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl shadow-cute hover:shadow-cute-hover transition-all duration-300 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-5 rounded-full border-brand-blue/20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  {exp.type === "single" ? (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1 text-brand-blue dark:text-blue-400">{exp.role}</h3>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-medium text-gray-700 dark:text-gray-300">{exp.company}</span>
                            <span className="text-gray-400 dark:text-gray-500">•</span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full border-brand-blue/20">{exp.duration}</span>
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
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <h3 className="text-xl font-bold text-brand-blue dark:text-blue-400">{exp.company}</h3>
                        <span className="shrink-0 text-gray-600 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full border-brand-blue/20">{exp.duration}</span>
                      </div>

                      <div className="relative pl-6">
                        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700"></div>
                        {exp.roles.map((role, roleIndex) => (
                          <div key={`${role.role}-${roleIndex}`} className={`relative pb-6 ${roleIndex === exp.roles.length - 1 ? 'pb-0' : ''}`}>
                            <div className="pl-6">
                              <h4 className="text-lg font-bold mb-1 text-gray-800 dark:text-gray-100">{role.role}</h4>
                              <div className="flex items-center gap-2 mb-3 flex-wrap">
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

          <h2 className="text-4xl font-bold text-center gradient-text tracking-tight">Education</h2>

          <div id="education" className="max-w-4xl mx-auto space-y-6">
            {[
              {
                degree: "Bachelor of Technology - B.Tech",
                duration: "Aug 2021 - May 2025",
                field: "Electronics and Communications Engineering",
                institution: "Amrita Vishwa Vidyapeetham",
                location: "Coimbatore",
                score: "Grade: First Class"
              },
              {
                degree: "Grade 12",
                duration: "Jun 2019 - May 2021",
                field: "Mathematics and Computer Science",
                institution: "Victory Vidhyalaya Matric Hr Sec School",
                location: "Coimbatore",
                score: "Percentage: 91.8%"
              },
              {
                degree: "Grade 10",
                duration: "Jun 2009 - Mar 2019",
                institution: "Einstein Public School",
                location: "Coimbatore",
                activities: "Activities and societies: I.I.M.U.N, Olympiad, Cambridge English Test, Helen O Grady Drama Academy, VocaBoom, Smile Foundation",
                score: "Percentage: 91.2%"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl shadow-cute hover:shadow-cute-hover transition-all duration-300 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-5 rounded-full border-brand-blue/20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-1 text-brand-blue dark:text-blue-400">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.duration}</p>
                  {edu.field && (
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-2 italic">{edu.field}</p>
                  )}
                  {edu.activities && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{edu.activities}</p>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">{edu.institution}</p>
                      {edu.location && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
                      )}
                    </div>
                    <div className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full border-brand-blue/20 shadow-cute group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors duration-300">
                      <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
</motion.div>
      </section>

      <section id="skills" className="py-20 bg-brand-beige dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 space-y-16">
          <h2 className="text-4xl font-bold text-center gradient-text">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tech Skills Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="skill-card bg-white/50 dark:bg-gray-800 p-8 rounded-3xl shadow-cute transition-colors duration-300 border border-brand-blue/5 flex flex-col"
            >
              <div className="flex items-center justify-center mb-8">
                <h3 className="text-2xl font-bold text-brand-blue dark:text-blue-400">Technical Skills</h3>
              </div>
              <div className="space-y-6 flex-grow">
                {techSkills.map((category) => (
                  <div key={category.category}>
                    <h4 className="text-sm font-bold tracking-wider mb-3 text-brand-blue/80 dark:text-blue-400 uppercase">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill: any) => (
                        <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full border-brand-blue/20 border border-gray-200 dark:border-gray-600 shadow-cute hover:shadow-cute-hover hover:border-brand-blue/30 transition-all duration-300">
                          {skill.image ? (
                            <img src={skill.image} alt={skill.name} className="w-4 h-4 object-contain" />
                          ) : (
                            <skill.icon className="w-4 h-4 text-brand-blue dark:text-blue-400" />
                          )}
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business & Creative Skills Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="skill-card bg-white/50 dark:bg-gray-800 p-8 rounded-3xl shadow-cute transition-colors duration-300 border border-brand-blue/5 flex flex-col"
            >
              <div className="flex items-center justify-center mb-8">
                <h3 className="text-2xl font-bold text-brand-blue dark:text-blue-400">Business & Creative</h3>
              </div>
              <div className="space-y-6 flex-grow">
                {businessCreativeSkills.map((category) => (
                  <div key={category.category}>
                    <h4 className="text-sm font-bold tracking-wider mb-3 text-brand-blue/80 dark:text-blue-400 uppercase">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill: any) => (
                        <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full border-brand-blue/20 border border-gray-200 dark:border-gray-600 shadow-cute hover:shadow-cute-hover hover:border-brand-blue/30 transition-all duration-300">
                          {skill.image ? (
                            <img src={skill.image} alt={skill.name} className="w-4 h-4 object-contain" />
                          ) : (
                            <skill.icon className="w-4 h-4 text-brand-blue dark:text-blue-400" />
                          )}
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Skills Card (Full Width) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="skill-card bg-white/50 dark:bg-gray-800 p-8 rounded-3xl shadow-cute transition-colors duration-300 border border-brand-blue/5 md:col-span-2"
            >
              <div className="flex items-center justify-center mb-8">
                <h3 className="text-2xl font-bold text-brand-blue dark:text-blue-400">Professional Skills</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {professionalSkills.map((category) => (
                  <div key={category.category}>
                    <h4 className="text-sm font-bold tracking-wider mb-4 text-brand-blue/80 dark:text-blue-400 uppercase text-center">{category.category}</h4>
                    <div className="flex flex-col gap-3">
                      {category.skills.map((skill: any) => (
                        <div key={skill.name} className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-700 rounded-3xl border border-gray-200 dark:border-gray-600 shadow-cute hover:shadow-cute-hover hover:border-brand-blue/30 transition-all duration-300">
                          {skill.image ? (
                            <img src={skill.image} alt={skill.name} className="w-4 h-4 object-contain" />
                          ) : (
                            <skill.icon className="w-4 h-4 text-brand-blue dark:text-blue-400" />
                          )}
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                      ))}
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
                link: "#", // NOTE: link to be added here
                issuer: "MBAthinking",
                date: "May 2026 - Present",
                status: "Ongoing",
                description: "Ongoing program covering marketing, strategy, product, finance, and analytics.",
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
                className="group bg-white/50 dark:bg-gray-800 p-6 rounded-3xl shadow-cute hover:shadow-cute-hover transition-all duration-300 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out border border-brand-blue/5 dark:border-gray-700"
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
                      className="inline-flex items-center justify-center gap-2 self-start rounded-full border-brand-blue/20 bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-cute-hover shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue/90 dark:bg-blue-500 dark:text-white dark:shadow-blue-500/20 dark:hover:bg-blue-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {cert.link ? "View Certificate" : "Link to be added"}
                    </a>
                    {cert.status === "Completed" ? (
                      <span className="inline-flex items-center gap-2 self-start rounded-full border-brand-blue/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                        <ClipboardCheckIcon className="w-4 h-4" />
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 self-start rounded-full border-brand-blue/20 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
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
            {featuredProjects.map((project, index) => {
              const card = (
                <>
                  <div className="relative border-b border-gray-100 bg-gradient-to-r from-white via-brand-beige/35 to-white px-6 py-5 pr-24 dark:border-gray-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                    {project.inProgress && (
                      <div className="absolute top-4 right-4 z-10 animate-bounce-soft">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/50 bg-amber-50/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 shadow-sm backdrop-blur-md dark:border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-300">
                          ✨ In Progress
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col items-start gap-2">
                      <span className="inline-flex min-h-11 w-fit max-w-full items-center justify-center rounded-full border-brand-blue/20 bg-brand-blue/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-center leading-tight text-brand-blue dark:bg-blue-400/10 dark:text-blue-300">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 min-h-[128px]">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold mb-2 text-blue-500 dark:text-blue-400">{project.title}</h3>
                        {project.subtitle && (
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.subtitle}</p>
                        )}
                        <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-brand-blue/5 dark:bg-gray-700 text-brand-blue dark:text-gray-300 px-3 py-1 rounded-full border-brand-blue/20 shadow-cute hover:bg-brand-blue/10 transition-all duration-300"
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
                  <div className="block h-full overflow-hidden rounded-3xl border border-gray-100 bg-white/50 transition-all duration-300 hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out hover:border-brand-blue/20 hover:shadow-[0_18px_45px_rgba(3,73,168,0.10)] dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400/25 dark:hover:shadow-[0_18px_45px_rgba(59,130,246,0.18)]">
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
                activity: "IETE Club",
                organization: "Event Management Team / Overall Coordinator",
                duration: "Nov 2023 - Sep 2024",
                description: [
                  <span>Served as <strong>Overall Coordinator</strong> for a flagship technical event conducted in collaboration with the <strong>Intel oneAPI AI Hackathon</strong>, leading stakeholder communication and event execution for <strong>450+ participants</strong>.</span>,
                  <span>Contributed to the successful planning and coordination of <strong>three additional technical events</strong>.</span>
                ],
                logo: `${assetBase}logos/iete.jpg`
              },
              {
                activity: "The Elite Club",
                organization: "Event Management Team",
                duration: "Oct 2023 - Sep 2024",
                description: [
                  <span>Proposed and executed <strong>business-focused events</strong> promoting <strong>entrepreneurship, leadership, and innovation</strong> among students.</span>,
                  <span>Coordinated event planning, team collaboration, and operational execution to deliver engaging campus experiences.</span>
                ],
                logo: `${assetBase}logos/elite.jpg`
              },
              {
                activity: "ECE Department - Gokulashtami Event",
                organization: "Finance Coordinator",
                duration: "Aug 2024",
                description: [
                  <span>Managed budgeting, resource allocation, and vendor coordination for an event with a budget exceeding <strong>₹56,000</strong>.</span>,
                  <span>Oversaw expense tracking and procurement activities to support successful event execution.</span>
                ],
                logo: `${assetBase}logos/amrita.svg`
              },
              {
                activity: "Google Developers Student Club",
                organization: "Student Core Team Member",
                duration: "Aug 2023 - May 2024",
                description: [
                  <span>Served as the <strong>Student Point of Contact (SPOC)</strong> and led awareness initiatives that attracted <strong>250+ participants</strong> to the club's first major event of the academic year.</span>,
                  <span>Coordinated multiple technical events to strengthen student engagement and community participation.</span>
                ],
                logo: `${assetBase}logos/gdsc.svg`
              },
              {
                activity: "Amrita Vishwa Vidyapeetham",
                organization: "Class Representative",
                duration: "Oct 2021 - Sep 2022",
                description: [
                  <span>Coordinated academic communication and faculty interactions for a class of <strong>65 students</strong> in a fully online environment.</span>,
                  <span>Created a centralized academic resource hub that generated <strong>1,500+ visits</strong> and was later adopted across the department for knowledge sharing and organization.</span>
                ],
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
                className="group bg-white/50 dark:bg-gray-800 p-6 rounded-3xl shadow-cute hover:shadow-cute-hover transition-all duration-300 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out border border-brand-blue/5 dark:border-gray-700 flex items-start gap-4"
              >
                <div className="w-12 h-12 flex-shrink-0">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.organization} logo`}
                      className="w-full h-full object-contain rounded-full border-brand-blue/20"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full border-brand-blue/20 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs">Logo</div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 text-brand-blue dark:text-blue-400">{item.activity}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.organization} | {item.duration}</p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc pl-5 space-y-1.5">
                    {item.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
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
              className="group flex items-center gap-4 p-5 bg-white/50 dark:bg-gray-800 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out border border-brand-blue/5 dark:border-gray-700 min-w-[240px]"
            >
              <div className="bg-brand-blue/10 dark:bg-gray-700 p-3 rounded-3xl group-hover:bg-brand-blue/20 transition-colors">
                <Mail className="w-6 h-6 text-brand-blue dark:text-brand-blue transition-colors" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">Email</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">yoshni2003@gmail.com</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/yoshni-nandha-kishore"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white/50 dark:bg-gray-800 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 ease-in-out border border-brand-blue/5 dark:border-gray-700 min-w-[240px]"
            >
              <div className="bg-brand-blue/10 dark:bg-gray-700 p-3 rounded-3xl group-hover:bg-brand-blue/20 transition-colors">
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

