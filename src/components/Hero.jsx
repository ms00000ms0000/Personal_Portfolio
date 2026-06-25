import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { personalInfo } from "../constants/data";
import AISphere from "../canvas/AISphere";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold mb-4 leading-tight">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl md:text-3xl gradient-text mb-6">
            <Typewriter
              words={personalInfo.roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>

          <p className="text-gray-300 leading-8 mb-8">
            Transforming Data Into Intelligent Solutions.
            Building AI, Machine Learning, Deep Learning and
            Data Analytics solutions for real-world problems.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
            >
              Download Resume
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500/20 transition"
            >
              GitHub
            </a>

          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-[400px] h-[450px]">

            <div className="absolute inset-0">
              <AISphere />
            </div>

            <img
              src={personalInfo.image}
              alt="profile"
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[280px]
                h-[380px]
                object-cover
                rounded-3xl
                border
                border-cyan-400
                shadow-[0_0_40px_rgba(0,229,255,0.4)]
              "
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;