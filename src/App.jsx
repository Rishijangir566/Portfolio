import logo from "./assets/logo3.avif";
import rishi from "./assets/rishi2.png";
import cls1 from "./assets/cls1.jpg";
import cls2 from "./assets/cls2.jpg";
import cls3 from "./assets/cls3.jpg";
import cls4 from "./assets/cls4.jpg";
import cls5 from "./assets/cls5.jpg";
import { motion } from "framer-motion";
import { FcReadingEbook } from "react-icons/fc";
import { TfiWrite } from "react-icons/tfi";
import { FcIdea } from "react-icons/fc";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import {
  FaPersonRunning,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSquareGithub,
  FaNodeJs,
  FaReact,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
<BiLogoMongodb />;
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import avenger from "./assets/avenger.gif";
import avengerImg from "./assets/avenger2.jpg";
import card from "./assets/Flipcard.gif";
import cardImg from "./assets/card.jpg";
import formImg from "./assets/formImg.jpg";
import form from "./assets/form.gif";
import note from "./assets/note.gif";
import noteimg from "./assets/noteimg.jpg";
import aria from "./assets/aria.jpg";
import arias from "./assets/aria.gif";
import ecommarce from "./assets/ecommarce.png";
import ecom from "./assets/ecom.gif";
import gym from "./assets/gym.png";
import gyms from "./assets/gyms.gif";

function App() {
  const Name = "RISHABH";
  const [isOpen, setIsOpen] = useState(false);
  const experiences = [
    {
      company: "FSL Learning.",
      role: "Full Stack Developer Intern",
      duration: "Aug 2024 - Present",
      description:
        "Worked on developing responsive and interactive web applications using React.js and Tailwind CSS.Integrated and consumed RESTful APIs to dynamically render content and improve user engagement.Built reusable components and implemented state management using React Hooks and Context API.Focused on performance optimization, cross-browser compatibility, and mobile-first design principles.",
    },
  ];

  const projects = [
    
    {
  title: "Aria Website Beta",
  description:
    "A clean and modern personal portfolio built with pure HTML, CSS, and JavaScript. Features smooth scrolling, animated sections, and a responsive layout to showcase skills and projects.",
  Tech: ["HTML", "CSS", "JavaScript"],
  link: "https://aria-website-beta.vercel.app/",
  image: aria, // Replace with your actual image import
  preview: arias, // Replace with actual preview/image variable
},
{
  title: "Gym Website",
  description:
    "A sleek and responsive fitness website designed using HTML, CSS, and JavaScript. Features animated hero sections, smooth navigation, membership plans, and a contact form — perfect for promoting a modern gym or fitness center.",
  Tech: ["HTML", "CSS", "JavaScript"],
  link: "https://gym-website-sooty-nine.vercel.app/",
  image: gym, // replace with your actual import
  preview: gyms, // optional preview image or gif
}
,
    {
      title: "Note-Making App",
      description:
        "A minimal and user-friendly note-making app that lets you quickly create, edit, and organize your notes.",
      Tech: ["HTML", "CSS", "JavaScript", "ReactJs", "Tailwind-CSS"],
      link: "https://add-note-sigma.vercel.app/",
      image: noteimg,
      preview: note,
    },

    {
  title: "Full E-commerce Website",
  description:
    "A complete e-commerce web application featuring product listings, dynamic filtering, cart functionality, user authentication, and an admin dashboard. Built with a modern tech stack to deliver a seamless shopping experience and efficient backend management.",
  Tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Redux"],
  link: "https://ecommercefullstack-front.onrender.com/",
  image: ecommarce, // replace with your actual import
  preview: ecom // optional preview image or demo gif
}
,
    {
      title: "Spot-the-avenger",
      description:
        "Spot the Avengers is an interactive web-based game where users are challenged to find hidden Avengers characters within an image.",
      Tech: ["HTML", "CSS", "JavaScript", "ReactJs", "Tailwind-CSS"],
      link: "https://spot-the-avengers-ht6a.vercel.app/",
      image: avengerImg,
      preview: avenger,
    },
    {
      title: "Basic Detail Form",
      description:
        "Basic Detail Form is a full-stack app for collecting and storing user details securely in MongoDB via a structured form.",
      Tech: ["ReactJs", "Tailwind-CSS", "Mongo Db", "Express", "NodeJs"],
      link: "https://basic-detail-form.onrender.com",
      image: formImg,
      preview: form,
    },
    {
      title: "Memory Game",
      description:
        "A sleek and responsive memory card game designed to challenge your focus and sharpen your memory.",
      Tech: ["HTML", "CSS", "JavaScript", "Tailwind-CSS"],
      link: "https://rishijangir566.github.io/flip-card/",
      image: cardImg,
      preview: card,
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-white bg-[#121212]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 px-6 md:px-12 border-b shadow-[0_0_25px_4px_rgba(29,78,216,0.4)] border-white/70 flex justify-between items-center py-4 transition-all duration-300 ${
    scrolled
      ? "bg-white/20 backdrop-blur-md shadow-xl "
      : "bg-transparent"
  }`}
      >
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3 text-white font-bold text-2xl">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-white shadow-md object-cover hover:shadow-[0_0_15px_#00fff7] transition duration-300"
          />

          <div className="flex text-cyan-300 drop-shadow-md">
            {Name.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  repeatDelay: 0,
                  ease: "easeInOut",
                  delay: index * 0.08,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-white font-medium tracking-wide text-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition"
              >
                <span className="group-hover:text-cyan-300 transition">
                  {item}
                </span>
                <span className="block h-[2px] max-w-0 group-hover:max-w-full bg-cyan-400 transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Dropdown Menu */}
        <ul
          className={`md:hidden absolute top-20 left-0 w-full backdrop-blur-md bg-white/10 border-t border-white/20 text-white flex flex-col items-center space-y-6 py-6 transition-all duration-300 ease-in-out z-40 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-cyan-300 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-center px-4 text-white"
      >
        <div className="mt-20 max-w-3xl w-full">
          <p className="text-lg text-cyan-400 mb-2 tracking-wide animate-pulse">
            Hey, my name is
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-md">
            RISHABH JANGIR
          </h1>
          <img
            src={rishi}
            alt="Rishabh"
            className="h-32 w-32 mx-auto rounded-full border-4 border-cyan-500 shadow-lg transition-transform hover:scale-105"
          />
          <h2 className="text-2xl md:text-3xl mt-6 font-semibold text-white/90">
            I'm a <span className="text-cyan-400">Frontend Developer</span>
          </h2>
          <p className="text-white/70 mt-4 mb-8 leading-relaxed px-4">
            I focus on crafting responsive, performant web applications with
            elegant UI and seamless backend integration.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-2 px-6 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/Myresume.pdf"
              target="_blank"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-2 px-6 rounded-lg transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
      >
        <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 tracking-wider">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-white/80">
          <p className="mb-8">
            Hey, I’m{" "}
            <span className="text-cyan-400 font-semibold">Rishabh</span> — a
            developer who loves merging creativity with logic to build clean and
            immersive web applications. With a foundation in problem-solving and
            optimization, I specialize in full-stack development using the{" "}
            <span className="text-cyan-400 font-medium">MERN</span> stack and{" "}
            <span className="text-cyan-400 font-medium">Next.js</span>. Whether
            it’s building dynamic UIs or scaling backend APIs, I strive for
            elegant, high-performance code.
          </p>

          <div className="mt-10">
            <h4 className="text-2xl font-semibold mb-6 text-cyan-300">
              When I’m not coding, you’ll find me:
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPersonRunning className="text-cyan-400 text-xl mt-1" />
                <span>
                  Playing cricket with friends and enjoying the outdoors
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FcReadingEbook className="text-xl mt-1" />
                <span>Reading about general knowledge and current affairs</span>
              </li>
              <li className="flex items-start space-x-3">
                <FcIdea className="text-xl mt-1" />
                <span>Exploring new tech and tinkering with side projects</span>
              </li>
              <li className="flex items-start space-x-3">
                <TfiWrite className="text-cyan-400 text-xl mt-1" />
                <span>
                  Writing about what I learn — sometimes blogs, sometimes code
                  snippets
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exprince Section */}
      <section
        id="experience"
        className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
      >
        <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 tracking-wider">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1e293b] border border-cyan-700/30 rounded-xl p-6 shadow-md hover:shadow-cyan-500/10 transition"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-1">
                {exp.role}{" "}
                <span className="text-white/70">@ {exp.company}</span>
              </h3>
              <p className="text-sm text-white/50 mb-4">{exp.duration}</p>
              <p className="text-white/80 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex justify-center flex-wrap gap-4 mt-6">
                {[cls1, cls2, cls3, cls4, cls5].map((src, idx) => (
                  <div
                    key={idx}
                    className="h-20 w-20 rounded-full border-2 border-cyan-400 overflow-hidden transform hover:scale-105 transition duration-500"
                  >
                    <img
                      src={src}
                      alt={`tech-${idx}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Projects Section */}
      <section
        id="projects"
        className="w-full py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="pb-12 text-center">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider">
              Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-[#1e293b] rounded-xl p-5 shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative w-full h-52 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.Tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs border border-cyan-400 text-white px-2 py-1 rounded-full hover:bg-cyan-400 hover:text-black transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-sm border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b]  text-white"
      >
        <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 tracking-wider">
          My Skills
        </h2>

        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <FaBootstrap />, name: "Bootstrap" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <RiJavascriptFill />, name: "JavaScript" },
            { icon: <FaSquareGithub />, name: "GitHub" },
            { icon: <FaReact />, name: "React" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <DiMongodb />, name: "MongoDB" },
            { icon: <SiExpress />, name: "Express.js" },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="relative group bg-[#1e293b] rounded-xl p-6 flex flex-col items-center justify-center shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400 animate-pulse group-hover:animate-none transition-all duration-300 pointer-events-none"></div>

              <div className="text-cyan-400 text-5xl group-hover:animate-bounce mb-3">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold capitalize text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b]  text-white"
      >
        <h2 className="text-center text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-400 tracking-wider">
          Let's Connect
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Drop a message and
          let's build something awesome together!
        </p>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl shadow-lg">
          <form
            action="https://formspree.io/f/movezrop"
            method="POST"
            className="space-y-8"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#00ff88]"
                placeholder="Your Name"
              />
              <label className="absolute top-3 left-0 text-gray-400 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#00ff88]">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#00ff88]"
                placeholder="Your Email"
              />
              <label className="absolute top-3 left-0 text-gray-400 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#00ff88]">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#00ff88]"
                placeholder="Your Message"
              ></textarea>
              <label className="absolute top-3 left-0 text-gray-400 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#00ff88]">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00ff88] to-cyan-500 text-black font-semibold py-3 rounded-xl shadow-md hover:shadow-[0_0_20px_#00ff88] transition-all"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg text-white/80">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#00ff88]" />
              <a
                href="mailto:rishijangirjr@gmail.com"
                className="hover:text-[#00ff88] transition"
              >
                rishijangirjr@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#00ff88]" />
              <a
                href="tel:+919772336350"
                className="hover:text-[#00ff88] transition"
              >
                +91 97723 36350
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6 text-3xl">
            <a
              href="https://github.com/Rishijangir566"
              target="_blank"
              className="hover:text-[#00ff88] transition"
            >
              <FaSquareGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rishab-jangir-306a7926b/"
              target="_blank"
              className="hover:text-[#00ff88] transition"
            >
              <FaLinkedin className="text-blue-500" />
            </a>
            <a
              href="https://wa.me/919772336350"
              target="_blank"
              className="hover:text-[#00ff88] transition"
            >
              <FaSquareWhatsapp className="text-green-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-[#b3b3b3] bg-gradient-to-b from-[#0f172a] to-[#1e293b] ">
        &copy; 2025 Risabh Jangir. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
