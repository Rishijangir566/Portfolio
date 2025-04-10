import logo from "./assets/logo3.avif";
import rishi from "./assets/rishi2.png";
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
  FaTwitter,
} from "react-icons/fa6";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
<BiLogoMongodb />;
import { FaEnvelope, FaPhoneAlt, } from "react-icons/fa";


function App() {
  const Name = "RISHABH";
  const experiences = [
    {
      company: "FSL Learning.",
      role: "Full Stack Developer Intern",
      duration: "Aug 2024 - Present",
      description:
        "Worked on developing responsive web applications using React.js, Tailwind CSS, and integrated APIs to enhance user experience."
    },
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  return (
    <div className="font-sans text-white bg-[#121212]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/90 backdrop-blur-md z-50">
        <div className="text-2xl font-bold text-[#00ff88] flex ">
          <img className="h-12 " src={logo} alt="" />
          <h2 className="mt-2 text-blue-600 flex space-x-1">
            {Name.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0,
                  ease: "easeInOut",
                  delay: index * 0.1, // delay increases per letter
                }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#home" className="hover:text-[#00ff88]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#00ff88]">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#00ff88]">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#00ff88]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#00ff88]">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-4 "
      >
        <div className="mt-16">
          <h1 className="text-5xl md:text-6xl text-[#00ff88] font-bold mb-4">
            Rishabh Jangir
          </h1>
          <img className="h-30 w-30 my-8 rounded-full mx-auto" src={rishi} alt="" />
          <h2 className="text-2xl text-[#b3b3b3] mb-2">I'm a Frontend Developer</h2>
          <p className=" mb-8 ">
          I’m focused on building responsive front-end web applications integrating back-end technologies.          </p>
          <div className="flex justify-center gap-4 flex-wrap ">
            <a
              href="#contact"
              className="bg-[#00ff88] text-black font-bold py-2  px-4 rounded hover:-translate-y-1 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-[#00ff88] text-[#00ff88] py-2 px-4 rounded hover:-translate-y-1 transition-all"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0a0a0a] px-4">
        <h2 className="text-center text-3xl text-[#00ff88] font-bold mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="mb-6">
            Hey, I’m Rishabh — a web developer who enjoys blending creativity
            with logic to build seamless digital experiences. Coming from a
            background rooted in analytical thinking and process optimization, I
            bring a problem-solving approach to every project I take on. I
            specialize in full-stack development using the MERN stack and
            Next.js, creating fast, scalable, and user-friendly web
            applications. Whether it’s crafting intuitive frontends or setting
            up robust backend architectures, I’m all about writing clean,
            efficient code that gets the job done.
          </p>
          <div className="mt-8">
            <h4 className="text-xl mb-4 font-semibold">
              When I'm not coding, you can find me:
            </h4>
            <ul className="space-y-2">
              <li className="flex ">
                <FaPersonRunning className="mt-1 text-green-400 mx-2 " />{" "}
                Playing cricket with friends and enjoying the outdoors
              </li>
              <li className="flex ">
                <FcReadingEbook className="mt-1 text-green-400 mx-2 " /> Reading about general knowledge
              </li>
              <li className="flex ">
                <FcIdea className="mt-1 text-green-400 mx-2 " /> I absolutely love Exploring new!
                tech
              </li>
              <li className="flex ">
                <TfiWrite className="mt-1 text-green-400 mx-2 " /> Writing
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exprince Section */}
      <section id="experience" className="w-full  text-slate-200 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold text-center text-[#00ff88] inline-block mb-10">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#1f2937] p-6 rounded-xl shadow-md hover:shadow-cyan-400/20 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400">{exp.role} @ {exp.company}</h3>
              <p className="text-sm text-slate-400 mb-2">{exp.duration}</p>
              <p className="text-slate-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0a0a0a]">
  <h2 className="text-center text-3xl text-[#00ff88] font-bold mb-12">
    My Skills
  </h2>
  <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
    {[
      { icon: <FaHtml5 />, name: "Html" },
      { icon: <FaCss3Alt />, name: "Css" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <RiTailwindCssFill />, name: "Tailwind" },
      { icon: <RiJavascriptFill />, name: "JavaScript" },
      { icon: <FaSquareGithub />, name: "GitHub" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <DiMongodb />, name: "MongoDB" },
      { icon: <SiExpress />, name: "Express" },
    ].map((skill, idx) => (
      <div
        key={idx}
        className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-32 w-full sm:w-60 mx-auto transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88]"
      >
        <div className="text-green-400 text-6xl">{skill.icon}</div>
        <h3 className="text-xl font-semibold capitalize mt-2">{skill.name}</h3>
      </div>
    ))}
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 ">
        <h2 className="text-center text-3xl text-[#00ff88] font-bold mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                To-Do-List (Full-stack)
              </h3>
              <p className="mb-4">A full-stack productivity app built using MongoDB, Express, React, and Node.js. Users can add, edit, and delete tasks with a responsive UI and real-time updates. </p>
              <div className="flex gap-4  mt-8">
                <a
                  href="https://todolist-fullstack-1-i2zm.onrender.com"
                  className="btn small py-2 px-4 bg-[#00ff88] text-black rounded"
                >
                  View
                </a>
                <a
                  href="https://github.com/Rishijangir566"
                  className="btn small py-2 px-4 border border-[#00ff88] text-[#00ff88] rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Basic Details Form (Full-stack)
              </h3>
              <p className="mb-4">The Basic Detail Form is collect user details like name, email, phone number, and address. It showcases clean layout structure, form validation, and an intuitive UI.

Features: </p>
              <div className="flex gap-4  mt-8">
                <a
                  href="https://basic-detail-form.onrender.com"
                  className="btn small py-2 px-4 bg-[#00ff88] text-black rounded"
                >
                  View
                </a>
                <a
                  href="https://github.com/Rishijangir566"
                  className="btn small py-2 px-4 border border-[#00ff88] text-[#00ff88] rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 ">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Spot-The-Avengers(Full-stack)
              </h3>
              <p className="mb-4">Spot The Avengers" is a fun and interactive game where players test their observation skills by identifying hidden Avengers characters in an image.  </p>
              <div className="flex gap-4  mt-8">
                <a
                  href="https://spot-the-avengers-ht6a.vercel.app"
                  className="btn small py-2 px-4 bg-[#00ff88] text-black rounded"
                >
                  View
                </a>
                <a
                  href="https://github.com/Rishijangir566"
                  className="btn small py-2 px-4 border border-[#00ff88] text-[#00ff88] rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

         
         

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Memory-Game</h3>
              <p className="mb-4">A sleek and responsive memory card game designed to challenge your focus and sharpen your memory.</p>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://rishijangir566.github.io/flip-card/"
                  className="btn small py-2 px-4 bg-[#00ff88] text-black rounded"
                >
                  View
                </a>
                <a
                  href="https://github.com/Rishijangir566"
                  className="btn small py-2 px-4 border border-[#00ff88] text-[#00ff88] rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact"  className="pt-20 px-4 bg-[#0a0a0a]">
        <h2 className="text-center text-3xl text-[#00ff88] font-bold mb-12">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-[#1e1e1e] text-white rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-[#1e1e1e] text-white rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-[#1e1e1e] text-white rounded h-36 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#00ff88] text-black font-bold py-2 px-6 rounded hover:-translate-y-1 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex justify-end gap-6 py-4 mx-20 text-2xl">
          <div >
          <div className="text-sm flex ">
          <FaEnvelope className="text-cyan-400  mt-1" />
          <a href="mailto:rishijangirjr@gmail.com" className="hover:text-cyan-400 pl-2">rishijangirjr@gmail.com</a>
          </div>
          <div className="text-sm flex ">
          <FaPhoneAlt className="text-cyan-400 mt-1 " />
          <a href="tel:+919772336350" className="hover:text-cyan-400  pl-2">+919772336350</a>
          </div>
          </div>
          <a
            href="https://github.com/Rishijangir566"
            className="hover:text-[#00ff88]"
          >
            <FaSquareGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/rishab-jangir"
            className="hover:text-[#00ff88]"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="#" className="hover:text-[#00ff88]">
            <FaTwitter className="text-3xl" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-[#b3b3b3]">
        &copy; 2024 Risabh Jangir. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
