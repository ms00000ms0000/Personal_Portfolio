import { certifications } from "../constants/data";
import { motion } from "framer-motion";

function Certifications() {
  return (
    <section className="py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl text-center gradient-text font-bold mb-16">
          Certifications
        </h2>

        {certifications.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.04,
              rotateX: 3,
              rotateY: 3,
            }}
            transition={{ duration: 0.3 }}
            className="
              glass
              p-6
              rounded-2xl
              mb-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]
            "
          >
            {item}
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Certifications;