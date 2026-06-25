import { motion } from "framer-motion";
import { aboutText } from "../constants/data";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl glass p-10 rounded-3xl"
      >
        <h2 className="text-5xl font-bold gradient-text mb-8">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-9">
          {aboutText}
        </p>
      </motion.div>
    </section>
  );
}

export default About;