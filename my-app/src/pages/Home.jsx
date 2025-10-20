import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { CheckCircle, Code2, FileCode, Braces, Atom, Smartphone, Paintbrush, Layout, Plug, GitBranch, UploadCloud, Mail, MapPin, Phone, Send, Menu, X, Music
} from "lucide-react";


const FloatingTechIcons = () => {
  const techIcons = [
    { icon: "⚛️", name: "React", delay: 0 },
    { icon: "📱", name: "React Native", delay: 0.5 },
    { icon: "🎨", name: "Tailwind", delay: 1 },
    { icon: "💻", name: "JavaScript", delay: 1.5 },
    { icon: "🔧", name: "Git", delay: 2 },
    { icon: "🌐", name: "HTML/CSS", delay: 2.5 }
  ];

  const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5zo49c2", 
        "template_qpv92tb",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "aFg7zCFUdjhmRT3Q_" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus(" Message sent successfully! I’ll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setFormStatus("Something went wrong. Please try again later.");
        }
        )
    .finally(() => {
      setIsLoading(false);
      setTimeout(() => setFormStatus(""), 4000);
    } );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {techIcons.map((tech, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-10"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
          }}
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            ],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: tech.delay,
            ease: "linear"
          }}
        >
          {tech.icon}
        </motion.div>
      ))}
    </div>
  );
};

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message sent successfully! I'll get back to you soon.");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormStatus("");
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white font-sans relative overflow-x-hidden">
      <FloatingTechIcons />
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-4 bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-lg mb-8 sticky top-4 z-50 shadow-[0_0_25px_rgba(255,255,255,0.05)] mx-4">
        <h1 className="font-bold text-2xl text-white tracking-wide">
          DaniEL.Dev
        </h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {["Home", "About", "Projects", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-400 font-semibold transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-4 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg p-6 z-50 md:hidden"
        >
          <ul className="flex flex-col space-y-4 text-white">
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-400 font-semibold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center md:items-start justify-between min-h-screen px-6 md:px-16 relative z-10"
      >
        <div className="flex-1 text-left pt-20">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm <br />
            <span className="text-gray-400">Akinremi Daniel</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 font-semibold max-w-2xl mt-4"
          >
            Frontend Developer • Tech Enthusiast • Jazz Musician
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-200 text-lg leading-relaxed max-w-xl mt-4"
          >
            I create seamless, elegant, and efficient digital experiences. My
            approach blends precision, minimalism, and functionality — every line
            of code is crafted to perform and impress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <a 
              href="#contact"
              className="bg-white rounded-xl hover:bg-black hover:text-white border-2 border-white transition-all duration-300 px-6 py-3 text-black font-semibold shadow-lg w-full sm:w-40 text-center"
            >
              Book a Call
            </a>

            <div className="inline-flex items-center justify-center bg-black text-white font-medium px-5 py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-600 w-full sm:w-auto">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for new project
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex space-x-6 mt-8"
          >
            <a
              href="https://github.com/akindan01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-gray-400 transition"
            >
              <GitBranch />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-gray-400 transition"
            >
              <Code2 />
            </a>
            <a
              href="https://twitter.com/AkinremiDaniel2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-gray-400 transition"
            >
              <Mail />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 md:px-16 text-left relative z-10">
        <div className="max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">About</h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            I'm a <span className="text-white font-bold">Frontend Developer</span>{" "}
            with <span className="text-white font-bold">2 years of experience</span>{" "}
            crafting clean, responsive, and user-focused web applications. My tech
            journey started from a simple motivation to create and quickly grew into
            a passion for building digital experiences that solve problems and bring
            ideas to life.
            <br />
            <br />
            I enjoy turning ideas into intuitive interfaces that people love to
            interact with. I believe great products come from a mix of technical
            skill and creativity. My experiences span across responsive interfaces,
            authentication, real-time data, and production-ready deployments.
            <br />
            <br />
            Outside coding, I'm a Gospel Jazz Brass Musician with 5 years of
            experience performing and creating soundscapes. Music fuels my
            creativity and adds rhythm to how I solve problems in tech.
          </p>

          {/* Why Work With Me */}
          <div className="mt-12 max-w-3xl">
            <h2 className="text-white font-bold text-xl mb-4">Why Work With Me?</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Passion-Driven",
                  text: "I bring energy, creativity, and genuine enthusiasm to every project.",
                },
                {
                  title: "User-Focused",
                  text: "I prioritize clean, accessible, and responsive designs.",
                },
                {
                  title: "Problem-Solver",
                  text: "I enjoy breaking down complex problems into elegant solutions.",
                },
                {
                  title: "Collaborative",
                  text: "I value clear communication, feedback, and teamwork.",
                },
                {
                  title: "Growth-Oriented",
                  text: "I continuously learn and explore new technologies.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 border border-gray-600 rounded-xl px-4 py-3 
                             hover:bg-gray-800 hover:scale-[1.02] hover:shadow-lg 
                             transition duration-300 ease-in-out"
                >
                  <CheckCircle className="text-green-400" size={20} />
                  <p>
                    <span className="text-white font-bold">{item.title}:</span>{" "}
                    <span className="text-gray-300">{item.text}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mt-20">
            <h2 className="text-white font-bold text-4xl mb-2">Skills & Expertise</h2>
            <p className="text-gray-300 mb-10">
              Technical Proficiencies in Frontend Development
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] rounded-xl shadow-lg shadow-gray-800 p-8 flex-1 min-w-[260px] hover:scale-105 transition-transform"
              >
                <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
                  <Code2 className="text-gray-400" size={28} /> Frontend Development
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <FileCode className="text-gray-400" size={18} /> HTML &amp; CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <Braces className="text-gray-400" size={18} /> JavaScript (ES6+)
                  </li>
                  <li className="flex items-center gap-2">
                    <Atom className="text-gray-400" size={18} /> React.js
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="text-gray-400" size={18} /> React Native
                  </li>
                  <li className="flex items-center gap-2">
                    <Paintbrush className="text-gray-400" size={18} /> Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <Layout className="text-gray-400" size={18} /> Material UI
                  </li>
                  <li className="flex items-center gap-2">
                    <Layout className="text-gray-400" size={18} /> Responsive Design
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] rounded-xl shadow-lg shadow-gray-800 p-8 flex-1 min-w-[260px] hover:scale-105 transition-transform"
              >
                <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
                  <Plug className="text-gray-400" size={28} /> Tools &amp; More
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Plug className="text-gray-400" size={18} /> API Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <GitBranch className="text-gray-400" size={18} /> Git &amp; Version Control
                  </li>
                  <li className="flex items-center gap-2">
                    <UploadCloud className="text-gray-400" size={18} /> Deployment
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-20 px-6 md:px-16 bg-gradient-to-b from-black via-gray-900 to-black relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-left"
        >
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-10 max-w-3xl"
          >
            Each project blends creativity, functionality, and precision — reflecting my
            passion for building impactful digital experiences.
          </motion.p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Poetry Collection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-800 shadow-lg h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                <FileCode size={80} className="text-gray-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-2xl font-bold text-white mb-2">Poetry Collection</h3>
                <p className="text-gray-300 text-sm mb-4">
                  A serene poetry portfolio showcasing expressive verses with elegant
                  typography and emotion-driven minimal design.
                </p>
                <a
                  href="https://piecebackwriter.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  View Project
                </a>
              </div>
            </motion.div>

            {/* BuildMe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-800 shadow-lg h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-900/30 to-red-900/30 flex items-center justify-center">
                <Layout size={80} className="text-gray-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold text-gray-300 mb-2">
                  BuildMe – Real Estate
                </h3>
                <p className="text-gray-500 text-sm mb-3">Currently in development</p>
                <div className="h-2 w-20 bg-gray-700 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Portfolio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-800 shadow-lg h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-green-900/30 to-teal-900/30 flex items-center justify-center">
                <Code2 size={80} className="text-gray-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold text-gray-300 mb-2">Portfolio Revamp</h3>
                <p className="text-gray-500 text-sm mb-3">Work in progress...</p>
                <div className="h-2 w-20 bg-gray-700 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* HCIH SECTION */}
      <section className="py-20 px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6 text-white">
            How Can I Help You?
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            I offer a range of services to help bring your digital vision to life.
            From responsive web apps to seamless user experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="text-blue-400" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                Web Development
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Building responsive, high-performance websites and web applications
                using modern technologies like React, Tailwind CSS, and more.
              </p>
            </motion.div>

    
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-green-400" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                Mobile Development
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Creating cross-platform mobile applications with React Native,
                delivering smooth experiences on both iOS and Android.
              </p>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-amber-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                Music & Events
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Available for Gospel Jazz performances, weddings, corporate events,
                and special occasions. 5+ years of professional saxophone experience.
              </p>
            </motion.div>
          </div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg"
            >
              Let's Discuss Your Project
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-white text-center">
            Let's Work Together
          </h1>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities,
            creative ideas, or partnerships.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition">
                <Mail className="text-gray-400 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">oluwajomiloju2650@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition">
                <MapPin className="text-gray-400 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition">
                <Phone className="text-gray-400 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+234 916 310 5473</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={!isLoading ? { scale: 1.05 } : {}}
                whileTap={!isLoading ? { scale: 0.95 } : {}}
                disabled={isLoading}
              >
                {isLoading ? (
                 <span className="flex items-center gap-2">
                 <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></span>
                  Sending...
                </span>
                ) : (
                <>
                <Send size={20} />
                Send Message
                </>
              )}
              </motion.button>

              {formStatus && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center mt-4"
                >
                  {formStatus}
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-16 border-t border-gray-800 text-center relative z-10">
        <p className="text-gray-400">
          © 2024 Akinremi Daniel. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with React, Tailwind CSS, and Framer Motion
        </p>
      </footer>
    </div>
  );
}

export default Home;
