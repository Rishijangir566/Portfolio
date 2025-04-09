import logo from "./assets/logo3.avif";
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

function App() {
  const Name = "JANGIR";
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
            Risabh Jangir
          </h1>
          <h2 className="text-2xl text-[#b3b3b3] mb-6">Fullstack Developer</h2>
          <p className="text-lg mb-8">
            Dynamic MERN Stack Developer with a passion for crafting <br />
            responsive web applications and seamless user experiences.
          </p>
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
                Playing sports
              </li>
              <li className="flex ">
                <FcReadingEbook className="mt-1 text-green-400 mx-2 " /> Reading
              </li>
              <li className="flex ">
                <TfiWrite className="mt-1 text-green-400 mx-2 " /> Writing
              </li>
              <li className="flex ">
                <FcIdea className="mt-1 text-green-400 mx-2 " /> Exploring new
                tech
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <h2 className="text-center text-3xl text-[#00ff88] font-bold mb-12">
          My Skills
        </h2>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <FaHtml5 className="text-green-400 text-6xl " />
            <h3 className="text-xl font-semibold capitalize ">
              Html
            </h3>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <FaCss3Alt className="text-green-400 text-6xl" />
            <h3 className="text-2xl font-semibold capitalize text-center">
              css
            </h3>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <FaBootstrap className="text-green-400 text-6xl" />
            <h3 className="text-xl font-semibold capitalize text-center">
              Bootstrap
            </h3>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <RiTailwindCssFill className="text-green-400 text-6xl" />
            <h3 className="text-xl font-semibold capitalize text-center">
              Tailwind
            </h3>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <RiJavascriptFill className="text-green-400 text-6xl" />
            <h3 className="text-xl font-semibold capitalize"> javascript</h3>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <FaSquareGithub className="text-green-400 text-6xl" />
            <h3 className="text-xl font-semibold capitalize"> github</h3>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <FaReact className="text-green-400 text-6xl" />
            <h3 className="text-xl font-semibold capitalize"> react</h3>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <FaNodeJs className="text-green-400 text-6xl" />
            <h3 className="text-xl font-semibold capitalize"> node.js</h3>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <DiMongodb className="text-green-400 text-6xl" />
            <h3 className="text-xl font-semibold capitalize"> mongodb</h3>
          </div>
          <div className="bg-[#1e1e1e] rounded-lg flex flex-col justify-center items-center h-30 w-60 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#00ff88] group">
            <SiExpress className="text-green-400 text-6xl" />
            <h3 className="text-xl font-semibold capitalize"> express</h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0a0a0a]">
        <h2 className="text-center text-3xl text-[#00ff88] font-bold mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                To-Do-List (Full-stack)
              </h3>
              <p className="mb-4">Description of project </p>
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
              <p className="mb-4">Description of project </p>
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

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Spot-The-Avengers(Full-stack)
              </h3>
              <p className="mb-4">Description of project </p>
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
              <h3 className="text-xl font-bold mb-2">Ecommarce-React</h3>
              <p className="mb-4">Description of project </p>
              <div className="flex gap-4  mt-8">
                <a
                  href="https://ecommerce-with-react-alpha.vercel.app"
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
              <h3 className="text-xl font-bold mb-2">Expense-Traker</h3>
              <p className="mb-4">Description of project </p>
              <div className="flex gap-4  mt-8">
                <a
                  href="https://expense-react-murex.vercel.app"
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
              <p className="mb-4">Description of project </p>
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
      <section id="contact" className="pt-20 px-4">
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
        <div className="flex justify-end gap-6 my-4 mx-20 text-2xl">
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
      <footer className="text-center py-6 bg-[#0a0a0a] text-[#b3b3b3]">
        &copy; 2024 Risabh Jangir. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
