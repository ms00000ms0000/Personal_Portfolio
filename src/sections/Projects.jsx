import { projects } from "../constants/data";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold gradient-text text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
              }}
              transition={{ duration: 0.3 }}
              className="
                glass
                p-8
                rounded-3xl
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-[0_0_35px_rgba(0,229,255,0.3)]
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                View Repository →
              </a>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;