import { achievements } from "../constants/data";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        <h2
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            text-center
            gradient-text
            font-bold
            mb-16
            leading-tight
            break-words
          "
        >
          Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotateX: 5,
                rotateY: 5,
              }}
              transition={{ duration: 0.3 }}
              className="
                glass
                p-8
                rounded-3xl
                text-center
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-[0_0_35px_rgba(0,229,255,0.3)]
              "
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-4">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;