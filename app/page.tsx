"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Code2, Database, Server, GitBranch, Terminal, Blocks, Mail, Github, Linkedin, Rocket, Shield, Zap, Cloud, CheckCircle, AlertCircle, Video, Mic } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-[#2d2520] z-50 animate-slide-in">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#d4a574]">techie.lady()</h1>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-[#a0826d] hover:text-[#d4a574] hover:scale-110 transition-all duration-200">About</a>
            <a href="#experience" className="text-[#a0826d] hover:text-[#d4a574] hover:scale-110 transition-all duration-200">Experience</a>
            <a href="#projects" className="text-[#a0826d] hover:text-[#d4a574] hover:scale-110 transition-all duration-200">Projects</a>
            <a href="#speaking" className="text-[#a0826d] hover:text-[#d4a574] hover:scale-110 transition-all duration-200">Speaking</a>
            <a href="#contact" className="text-[#a0826d] hover:text-[#d4a574] hover:scale-110 transition-all duration-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 animate-float">
            <Code2 className="text-[#8b6f47]" size={60} />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
            <Server className="text-[#8b6f47]" size={50} />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '2s'}}>
            <Database className="text-[#8b6f47]" size={40} />
          </div>
          <div className="absolute top-60 right-1/4 animate-float" style={{animationDelay: '3s'}}>
            <GitBranch className="text-[#8b6f47]" size={45} />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`grid md:grid-cols-[2fr,1fr] gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold text-[#d4a574] animate-fade-in flex items-center gap-4">
                <Server className="inline-block" size={60} />
                Ifeoluwa Oluwafemi
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#8b6f47]">Backend Engineer</h3>
              <p className="text-xl md:text-2xl text-[#8b6f47] max-w-2xl flex items-center gap-3">
                <Cloud className="flex-shrink-0" size={28} />
                Designing and developing high-volume, low-latency enterprise applications
              </p>
              <div className="flex gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-[#8b6f47] text-black font-semibold rounded-lg hover:bg-[#a0826d] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail size={20} />
                  Get in Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 border border-[#8b6f47] text-[#d4a574] font-semibold rounded-lg hover:bg-[#1a1512] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Rocket size={20} />
                  View Work
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="hidden md:block">
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b6f47] via-[#d4a574] to-[#8b6f47] rounded-3xl animate-pulse-slow"></div>
                <div className="absolute inset-1 bg-[#0a0a0a] rounded-3xl overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                    <Image 
                      src="/profile.jpg" 
                      alt="Ifeoluwa Oluwafemi" 
                      width={320} 
                      height={320}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-[#8b6f47] rounded-full p-3 animate-float shadow-lg shadow-[#8b6f47]/50">
                  <Database className="text-black" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#d4a574] rounded-full p-3 animate-float shadow-lg shadow-[#d4a574]/50" style={{animationDelay: '1.5s'}}>
                  <Server className="text-black" size={24} />
                </div>
                <div className="absolute top-1/2 -right-4 bg-[#a0826d] rounded-full p-3 animate-float shadow-lg shadow-[#a0826d]/50" style={{animationDelay: '0.8s'}}>
                  <Code2 className="text-black" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-black to-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-default">
              <div className="flex justify-center mb-2">
                <Server className="text-[#d4a574] group-hover:scale-125 transition-transform duration-300" size={36} />
              </div>
              <div className="text-3xl font-bold text-[#d4a574]">6+</div>
              <div className="text-[#a0826d] text-sm">Years Experience</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="flex justify-center mb-2">
                <Rocket className="text-[#d4a574] group-hover:scale-125 transition-transform duration-300" size={36} />
              </div>
              <div className="text-3xl font-bold text-[#d4a574]">5</div>
              <div className="text-[#a0826d] text-sm">Companies</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="flex justify-center mb-2">
                <Code2 className="text-[#d4a574] group-hover:scale-125 transition-transform duration-300" size={36} />
              </div>
              <div className="text-3xl font-bold text-[#d4a574]">100+</div>
              <div className="text-[#a0826d] text-sm">Projects</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="flex justify-center mb-2">
                <Database className="text-[#d4a574] group-hover:scale-125 transition-transform duration-300" size={36} />
              </div>
              <div className="text-3xl font-bold text-[#d4a574]">1K+</div>
              <div className="text-[#a0826d] text-sm">Followers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-[#d4a574]" size={36} />
            <h3 className="text-4xl font-bold text-[#d4a574]">About Me</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 relative">
              {/* Decorative corner element */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-[#8b6f47] opacity-30"></div>
              <div className="flex items-start gap-3">
                <Server className="text-[#8b6f47] mt-1 flex-shrink-0" size={24} />
                <p className="text-[#a0826d] text-lg leading-relaxed">
                  I'm a backend engineer with clear knowledge of software development life cycles. 
                  Inquisitive, energetic, and skilled in Design Thinking, with a strong foundation in logic 
                  and cross-platform coding.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Database className="text-[#8b6f47] mt-1 flex-shrink-0" size={24} />
                <p className="text-[#a0826d] text-lg leading-relaxed">
                  An enthusiastic team player and deep creative thinker, experienced in designing and 
                  developing high-volume, low-latency enterprise applications for fin-tech, health-tech, 
                  and retail sectors.
                </p>
              </div>
            </div>
            <div className="space-y-4 relative">
              {/* Decorative corner element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-r-2 border-t-2 border-[#8b6f47] opacity-30"></div>
              <div className="flex items-center gap-2 mb-4">
                <Blocks className="text-[#8b6f47]" size={28} />
                <h4 className="text-2xl font-semibold text-[#d4a574]">Core Skills</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Java', icon: '☕' },
                  { name: 'JavaScript', icon: '⚡' },
                  { name: 'Node.js', icon: '⬢' },
                  { name: 'Spring Boot', icon: '🍃' },
                  { name: 'Kotlin', icon: '🔷' },
                  { name: 'NestJS', icon: '🐈' },
                  { name: 'MongoDB', icon: '🍃' },
                  { name: 'PostgreSQL', icon: '🐘' },
                  { name: 'MySQL', icon: '🐬' },
                  { name: 'MSSQL', icon: '📊' },
                  { name: 'REST APIs', icon: '🔌' },
                  { name: 'Microservices', icon: '🔷' },
                  { name: 'Docker', icon: '🐳' },
                  { name: 'Azure DevOps', icon: '☁️' },
                  { name: 'GitHub', icon: '💻' },
                  { name: 'Agile', icon: '🔄' }
                ].map((skill) => (
                  <span key={skill.name} className="px-4 py-2 bg-[#1a1512] border border-[#2d2520] text-[#a0826d] rounded-lg text-sm hover:border-[#8b6f47] hover:scale-110 transition-all duration-200 cursor-default flex items-center gap-2">
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GitBranch className="text-[#d4a574]" size={36} />
            <h3 className="text-4xl font-bold text-[#d4a574]">Experience</h3>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-[#8b6f47] pl-6 space-y-2 hover:border-[#d4a574] transition-colors duration-300 relative group">
              {/* Animated dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#8b6f47] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <h4 className="text-2xl font-semibold text-[#d4a574]">Backend Engineer</h4>
              <p className="text-[#8b6f47]">PaveHQ • Apr 2023 - Present</p>
              <ul className="list-disc list-inside text-[#a0826d] space-y-2 mt-4">
                <li>Building scalable backend systems using Java and Spring Boot</li>
                <li>Designing and implementing enterprise applications</li>
                <li>Working remotely with distributed teams</li>
              </ul>
            </div>
            <div className="border-l-2 border-[#8b6f47] pl-6 space-y-2 hover:border-[#d4a574] transition-colors duration-300 relative group">
              {/* Animated dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#8b6f47] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <h4 className="text-2xl font-semibold text-[#d4a574]">Back-end Engineer</h4>
              <p className="text-[#8b6f47]">Enyata • Mar 2022 - Dec 2024</p>
              <ul className="list-disc list-inside text-[#a0826d] space-y-2 mt-4">
                <li>Collaborated with designers, product owners, and engineers to build software products</li>
                <li>Built applications using JavaScript/Java with NestJS and Spring Boot frameworks</li>
                <li>Worked on diverse projects in fin-tech, health-tech, and retail sectors</li>
                <li>Utilized agile development tools like Azure DevOps and GitHub</li>
              </ul>
            </div>
            <div className="border-l-2 border-[#8b6f47] pl-6 space-y-2 hover:border-[#d4a574] transition-colors duration-300 relative group">
              {/* Animated dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#8b6f47] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <h4 className="text-2xl font-semibold text-[#d4a574]">Back End Developer</h4>
              <p className="text-[#8b6f47]">Onhova • Oct 2020 - Mar 2022</p>
              <ul className="list-disc list-inside text-[#a0826d] space-y-2 mt-4">
                <li>Built inventory and procurement management system</li>
                <li>Worked with Java, MongoDB, and Spring Boot</li>
                <li>Connected wholesale and retail distributors through platform</li>
                <li>Enhanced stock replenishment practices for small businesses</li>
              </ul>
            </div>
            <div className="border-l-2 border-[#8b6f47] pl-6 space-y-2 hover:border-[#d4a574] transition-colors duration-300 relative group">
              {/* Animated dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#8b6f47] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <h4 className="text-2xl font-semibold text-[#d4a574]">Back End Engineer</h4>
              <p className="text-[#8b6f47]">Integrated Software Services LTD. • Feb 2021 - Oct 2021</p>
              <ul className="list-disc list-inside text-[#a0826d] space-y-2 mt-4">
                <li>Followed SDLC process using Confluence and Jira for collaboration</li>
                <li>Worked with Java, MSSQL, Liferay, MongoDB, Vaadin, MySQL</li>
                <li>Built REST and SOAP web services</li>
                <li>Worked on credit bureau and NIBSS (Nigeria Inter-Bank Settlement System) web services</li>
              </ul>
            </div>
            <div className="border-l-2 border-[#8b6f47] pl-6 space-y-2 hover:border-[#d4a574] transition-colors duration-300 relative group">
              {/* Animated dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#8b6f47] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <h4 className="text-2xl font-semibold text-[#d4a574]">Backend Developer</h4>
              <p className="text-[#8b6f47]">Semicolon • Sep 2019 - Oct 2020</p>
              <ul className="list-disc list-inside text-[#a0826d] space-y-2 mt-4">
                <li>Started backend development journey with Java</li>
                <li>Built foundational skills in server-side programming</li>
                <li>Learned software development best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Rocket className="text-[#d4a574]" size={36} />
            <h3 className="text-4xl font-bold text-[#d4a574]">Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1512] border border-[#2d2520] rounded-lg p-6 hover:border-[#8b6f47] hover:scale-105 hover:shadow-lg hover:shadow-[#8b6f47]/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Database className="text-[#d4a574]" size={28} />
                <h4 className="text-2xl font-semibold text-[#d4a574]">Inventory Management System</h4>
              </div>
              <p className="text-[#a0826d] mb-4">
                Built procurement platform connecting wholesale and retail distributors, enabling price discovery 
                and seamless stock replenishment for small businesses
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">☕ Java</span>
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🍃 Spring Boot</span>
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🍃 MongoDB</span>
              </div>
            </div>
            
            <div className="bg-[#1a1512] border border-[#2d2520] rounded-lg p-6 hover:border-[#8b6f47] hover:scale-105 hover:shadow-lg hover:shadow-[#8b6f47]/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Server className="text-[#d4a574]" size={28} />
                <h4 className="text-2xl font-semibold text-[#d4a574]">Banking Web Services</h4>
              </div>
              <p className="text-[#a0826d] mb-4">
                Developed credit bureau and NIBSS (Nigeria Inter-Bank Settlement System) web services 
                using REST and SOAP protocols
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">☕ Java</span>
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">📊 MSSQL</span>
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🔌 REST/SOAP</span>
              </div>
            </div>
            
            <div className="bg-[#1a1512] border border-[#2d2520] rounded-lg p-6 hover:border-[#8b6f47] hover:scale-105 hover:shadow-lg hover:shadow-[#8b6f47]/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-[#d4a574]" size={28} />
                <h4 className="text-2xl font-semibold text-[#d4a574]">Enterprise Applications</h4>
              </div>
              <p className="text-[#a0826d] mb-4">
                Designed high-volume, low-latency applications for fin-tech, health-tech, and retail 
                sectors using microservices architecture
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">⚡ JavaScript</span>
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🐈 NestJS</span>
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">☁️ Azure</span>
              </div>
            </div>
            
            <div className="bg-[#1a1512] border border-[#2d2520] rounded-lg p-6 hover:border-[#8b6f47] hover:scale-105 hover:shadow-lg hover:shadow-[#8b6f47]/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-[#d4a574]" size={28} />
                <h4 className="text-2xl font-semibold text-[#d4a574]">WTM Ethiopia Workshop</h4>
              </div>
              <p className="text-[#a0826d] mb-4">
                Led workshop on Backend Development with Node.js and Express.js for Women Techmakers Ethiopia, 
                teaching RESTful APIs and best practices
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">⬢ Node.js</span>
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🔌 Express.js</span>
                <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">📚 Teaching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Mic className="text-[#d4a574]" size={36} />
            <h3 className="text-4xl font-bold text-[#d4a574]">Speaking</h3>
          </div>
          <p className="text-[#a0826d] text-lg mb-12 max-w-3xl">
            I'm passionate about sharing knowledge and empowering the next generation of developers. 
            Here are some of my speaking engagements and workshops.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-[#1a1512] border border-[#2d2520] rounded-lg overflow-hidden hover:border-[#8b6f47] transition-all duration-300 group">
              <div className="relative aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rT3_qBXA9rc"
                  title="Backend Web Development with Ifeoluwa Oluwafemi"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Video className="text-[#d4a574]" size={20} />
                  <h4 className="text-xl font-semibold text-[#d4a574]">Backend Web Development</h4>
                </div>
                <p className="text-[#a0826d] mb-4">
                  WTM Ethiopia Workshop - Introduction to Backend Development with Node.js and Express.js
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">⬢ Node.js</span>
                  <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🔌 Express.js</span>
                  <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🎓 Workshop</span>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-[#1a1512] border border-[#2d2520] rounded-lg overflow-hidden hover:border-[#8b6f47] transition-all duration-300 group">
              <div className="relative aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JmpR_rSz0fs"
                  title="Backend Development Session"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Video className="text-[#d4a574]" size={20} />
                  <h4 className="text-xl font-semibold text-[#d4a574]">Introduction to Backend</h4>
                </div>
                <p className="text-[#a0826d] mb-4">
                  Women Techmakers Ethiopia - Teaching backend fundamentals and best practices
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">💡 Teaching</span>
                  <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🎤 Speaking</span>
                  <span className="px-3 py-1 bg-[#0d0d0d] text-[#8b6f47] rounded text-sm">🌍 WTM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="text-[#d4a574]" size={36} />
            <h3 className="text-4xl font-bold text-[#d4a574]">Get In Touch</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-[#a0826d] text-lg">
                I'm always interested in hearing about new opportunities, collaborations, or connecting 
                with fellow engineers. Whether it's about backend architecture, teaching opportunities, 
                or innovative projects - let's talk!
              </p>
              <div className="space-y-4">
                <a href="mailto:o.ifeoluwah@gmail.com" className="flex items-center gap-3 text-[#d4a574] hover:text-[#8b6f47] hover:translate-x-2 transition-all duration-300 group">
                  <Mail className="group-hover:rotate-12 transition-transform" size={24} />
                  <span>o.ifeoluwah@gmail.com</span>
                </a>
                <a href="https://github.com/Ifeoluwa5983" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#d4a574] hover:text-[#8b6f47] hover:translate-x-2 transition-all duration-300 group">
                  <Github className="group-hover:rotate-12 transition-transform" size={24} />
                  <span>github.com/Ifeoluwa5983</span>
                </a>
                <a href="https://www.linkedin.com/in/ifeoluwa-oluwafemi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#d4a574] hover:text-[#8b6f47] hover:translate-x-2 transition-all duration-300 group">
                  <Linkedin className="group-hover:rotate-12 transition-transform" size={24} />
                  <span>linkedin.com/in/ifeoluwa-oluwafemi</span>
                </a>
              </div>
            </div>
            <div className="bg-[#0d0d0d] border border-[#2d2520] rounded-lg p-8 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8b6f47]/10 to-transparent rounded-bl-full"></div>
              
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="text-[#d4a574]" size={24} />
                <h4 className="text-xl font-semibold text-[#d4a574]">Quick Contact</h4>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full px-4 py-3 bg-[#1a1512] border border-[#2d2520] rounded-lg text-[#d4a574] placeholder-[#6b5d52] focus:outline-none focus:border-[#8b6f47] transition-colors"
                />
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  className="w-full px-4 py-3 bg-[#1a1512] border border-[#2d2520] rounded-lg text-[#d4a574] placeholder-[#6b5d52] focus:outline-none focus:border-[#8b6f47] transition-colors"
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-[#1a1512] border border-[#2d2520] rounded-lg text-[#d4a574] placeholder-[#6b5d52] focus:outline-none focus:border-[#8b6f47] transition-colors"
                />
                
                {/* Status Messages */}
                {formStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-900/20 border border-green-800 rounded-lg p-3">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-900/20 border border-red-800 rounded-lg p-3">
                    <AlertCircle size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full px-6 py-3 bg-[#8b6f47] text-black font-semibold rounded-lg hover:bg-[#a0826d] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      {/*<Send size={20} />*/}
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#2d2520] bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-[#6b5d52]">
              <Terminal size={20} />
              <p>© 2026 Ifeoluwa Oluwafemi</p>
            </div>
            <div className="flex items-center gap-4">
              <Code2 className="text-[#6b5d52] hover:text-[#8b6f47] transition-colors" size={20} />
              <span className="text-[#6b5d52]">Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
