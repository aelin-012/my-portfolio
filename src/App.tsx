import { useState, useEffect } from 'react';
import { Github, Mail, FileText, ExternalLink, Heart, Coffee, Clock, Sparkles, Star, Users, Zap, Moon, Sun, Linkedin, BarChart, ClipboardCheckIcon, Presentation, UserPlus, MessageSquare, Search, Lightbulb, RefreshCw, Eye, Trophy } from 'lucide-react';
import { MdInsights } from "react-icons/md";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }

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

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'co-curriculars', label: 'Co-Curriculars' },
    { id: 'contact', label: 'Contact' },
  ];

  const technicalSkillsCategories = [
    {
      "category": "Scripting & Query Languages",
      "skills": [
        { "name": "Python", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { "name": "R", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
        { "name": "SQL", "logo": "/my-portfolio/logos/sql.png" }
      ],
    },
    
    {
      category: 'Data Visualization Tools',
      skills: [
        { name: 'Tableau', logo: '/my-portfolio/logos/tableau.svg' },
        { name: 'Power BI', logo: '/my-portfolio/logos/power bi.svg' },
      ],
    },
    {
      category: 'Database Tools',
      skills: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'BigQuery Sandbox', logo: '/my-portfolio/logos/bigquery.svg' },
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
      category: 'Productivity Tools',
      "skills": [
    { "name": "Microsoft Excel", "logo": "/my-portfolio/logos/excel.png" },
    { "name": "Google Sheets", "logo": "/my-portfolio/logos/sheets.svg" },
    { "name": "Microsoft Office", "logo": "/my-portfolio/logos/office.svg" },
    { "name": "Google Workspace", "logo": "/my-portfolio/logos/google.svg" }
  ],
}
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300`}>
      <nav className="fixed top-0 left-0 right-0 z-50 floating-nav bg-white/80 dark:bg-gray-900/80 shadow-lg transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-black dark:hover:text-white
                    ${activeSection === item.id ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-[100vh] flex items-center justify-center gradient-bg relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="/my-portfolio/images/profile.jpg" 
                  alt="Your Name"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-6xl font-bold mb-4 gradient-text">Yoshni Nandha Kishore</h1>
              <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6">Data Analyst & Insights Developer</p>
              
              <div className="flex justify-center md:justify-start items-center gap-4 mb-8">
                <a 
                  href="mailto:yoshni2003@gmail.com"
                  className="group relative bg-white dark:bg-gray-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 via-red-300 via-yellow-300 to-green-300 dark:from-blue-400 dark:via-red-400 dark:via-yellow-400 dark:to-green-400 opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-md"
                  ></div>
                  <img 
                    src="/my-portfolio/logos/google.svg" 
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
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-900 dark:to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
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
                <a href="#contact" className="group bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                  Contact Me
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="/my-portfolio/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group border-2 border-black dark:border-white px-8 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                >
                  Resume
                  <FileText className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text tracking-tight">About Me</h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm relative overflow-hidden transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg font-light">
                👋 Hi there! I'm an aspiring data analyst with a passion for turning raw data into meaningful insights. 
                With a strong foundation in data analysis, problem-solving, and visualization, I love uncovering patterns that drive smarter decision-making. 
                Beyond numbers, I'm also a management enthusiast who thrives on organization and leadership.
                <br /><br />
                When I’m not diving into datasets, you’ll find me reading a good book, listening to music and podcasts, or binge-watching movies and series. 
                I also love experimenting in the kitchen—always with a cup of coffee in hand! ☕📊✨
                <br /><br />
                Let’s connect and make data work its magic!
              </p>
              <div className="flex justify-center gap-10">
                <div className="flex flex-col items-center group">
                  <BarChart className="w-8 h-8 mb-2 animate-float text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" style={{ animationDelay: '0.2s' }} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data-Driven</span>
                </div>
                <div className="flex flex-col items-center group">
                  <ClipboardCheckIcon className="w-8 h-8 mb-2 animate-float text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" style={{ animationDelay: '0.4s' }} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Organized</span>
                </div>
                <div className="flex flex-col items-center group">
                  <Coffee className="w-8 h-8 mb-2 animate-float text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" style={{ animationDelay: '0.6s' }} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Coffee Lover</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto my-16 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-full p-2">
              <Sparkles className="w-5 h-5 text-yellow-400 dark:text-yellow-500 animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12 gradient-text tracking-tight">Education</h2>
          
          <div id="education" className="max-w-4xl mx-auto space-y-6">
            {[
              {
                degree: "Bachelor of Technology",
                duration: "Oct 2021 - June 2025",
                field: "Electronics and Communication Engineering",
                institution: "Amrita Vishwa Vidyapeetham",
                location: "Coimbatore",
                score: "CGPA: 7.23"
              }
            ].map((edu, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">{edu.degree}</h3>
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
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto my-16 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-full p-2">
              <Zap className="w-5 h-5 text-yellow-400 dark:text-yellow-500 animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12 gradient-text tracking-tight">Experience</h2>

          <div id="experience" className="max-w-4xl mx-auto space-y-6">
            {[
              {
                role: "Student Intern",
                company: "Hirotec India Private Limited",
                duration: "June 2024",
                location: "Coimbatore",
                description: "Gained hands-on experience in SQL and explored key concepts of software development. Strengthened programming skills while working in a professional environment."
              }
            ].map((exp, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{exp.company} • {exp.duration}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{exp.location}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 gradient-bg transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="skill-card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <MdInsights className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              <div className="space-y-8">
                {technicalSkillsCategories.map((category, index) => (
                  <div key={category.category}>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">{category.category}</h4>
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
            </div>
            <div className="skill-card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="space-y-6">
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
                  <div key={skill.name} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <skill.icon className="w-5 h-5 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold mb-1">{skill.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto my-16 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-full p-2">
              <Star className="w-5 h-5 text-yellow-400 dark:text-yellow-500 animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12 gradient-text tracking-tight">Certifications</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Google Data Analytics Professional Certificate",
                link: "https://drive.google.com/file/d/1oGMQ9_n3aeOqa4330LHuudzhssFmujdo/view", // Add your link here
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
                status: "Ongoing",
                description: "Currently pursuing skills in business intelligence."
              }
            ].map((cert, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-2">{cert.description}</p>
                  <div className="flex items-center gap-2">
                    <a 
                      href={cert.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      {cert.link ? "View Certificate" : "Link to be added"}
                    </a>
                    {cert.status === "Completed" ? (
                      <span className="flex items-center gap-1 text-green-500 text-sm">
                        <ClipboardCheckIcon className="w-4 h-4" /> Completed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-yellow-500 text-sm">
                        <ClipboardCheckIcon className="w-4 h-4" /> Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Case Studies Portfolio",
                description: "Data-driven business insights using Excel, SQL, R, and Tableau",
                image: "/my-portfolio/images/Case Studies Portfolio.webp",
                techStack: ["Excel", "SQL", "R", "Tableau"],
                link: "https://yoshni-portfolio.blogspot.com/search/label/case-studies" 
              },
              {
                title: "Career Application Insight Tracker",
                description: "Data-driven insights and dashboards to optimize job applications and interview success.",
                image: "/my-portfolio/images/Career Application Insight Tracker.webp",
                techStack: ["Excel", "SQL", "R", "Tableau"],
                link: "https://yoshni-portfolio.blogspot.com/2025/03/career-application-insight-tracker.html" 
              },
              {
                title: "Automated IoT-Enabled Women’s Safety System with Real-Time Monitoring",
                description: "IoT-enabled women's safety detection with Arduino and machine learning.",
                image: "/my-portfolio/images/iot.webp",
                techStack: ["Python", "IoT", "ML", "Hardware Model"],
              }
            ].map((project, index) => (
              <div key={index} className="project-card group relative">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700"
                  >
                    <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-3 rounded-full group-hover:animate-bounce group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="block relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700 cursor-default">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-3 py-1 rounded-full shadow-sm hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="co-curriculars" className="py-24 gradient-bg transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text tracking-tight">Co-Curriculars</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                activity: "Class Representative",
                organization: "Amrita Vishwa Vidyapeetham",
                duration: "Oct 2021 - Sep 2022",
                description: "Strategically facilitated communication between students and faculty, and coordinated academic schedules & events.",
                logo: "/my-portfolio/logos/amrita.svg"
              },
              {
                activity: "GDSC - Student Core Team",
                organization: "Google Developer Student Club",
                duration: "Aug 2023 - May 2024",
                description: "Designed & delivered targeted resources, workshops, and networking for technical skill development and career growth.",
                logo: "/my-portfolio/logos/gdsc.svg"
              },
              {
                activity: "The Elite Club",
                organization: "Amrita Vishwa Vidyapeetham",
                duration: "Oct 2023 - Sep 2024",
                description: "Organized workshops & events to instill entrepreneurship and leadership, empowering students with business ideation.",
                logo: "/my-portfolio/logos/elite.jpg"
              },
              {
                activity: "IETE Club",
                organization: "Institution of Electronics and Telecommunication Engineers",
                duration: "Nov 2023 - Sep 2024",
                description: "Conducted workshops and events, coordinated a major workshop with oneAPI Intel AI Hackathon.",
                logo: "/my-portfolio/logos/iete.jpg"
              },
              {
                activity: "Finance Coordinator - Gokulastami Event, ECE Dept",
                organization: "Amrita Vishwa Vidyapeetham",
                duration: "Aug 2024",
                description: "Optimized budget allocation using advanced Excel analytics for financial compliance and efficiency.",
                logo: "/my-portfolio/logos/amrita.svg"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex items-start gap-4"
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
                  <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">{item.activity}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.organization} • {item.duration}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 gradient-bg transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 gradient-text tracking-wide">Get in Touch</h2>
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:yoshni2003@gmail.com" 
              className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100 dark:border-gray-700 w-full sm:w-auto"
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-pink-500 transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Email</h3>
                <span className="text-gray-600 dark:text-gray-400 text-xs whitespace-nowrap">yoshni2003@gmail.com</span>
              </div>
            </a>
            <a 
              href="https://github.com/aelin-012" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100 dark:border-gray-700 w-full sm:w-auto"
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-500 transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200">GitHub</h3>
                <span className="text-gray-600 dark:text-gray-400 text-xs whitespace-nowrap">github.com/aelin-012</span>
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/yoshni-nandha-kishore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100 dark:border-gray-700 w-full sm:w-auto"
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200">LinkedIn</h3>
                <span className="text-gray-600 dark:text-gray-400 text-xs whitespace-nowrap">linkedin.com/in/yoshni-nandha-kishore</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
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