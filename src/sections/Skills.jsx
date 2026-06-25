import { motion } from "framer-motion";
import { skills } from "../constants/data";

function Skills() {
  return (
    <section
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-bold gradient-text mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
              }}
              className="glass p-6 rounded-2xl text-center"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;