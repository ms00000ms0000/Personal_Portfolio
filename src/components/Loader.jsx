import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[999]">

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
          className="text-5xl font-bold gradient-text"
        >
          MS
        </motion.h1>

        <div className="mt-6 w-64 h-2 bg-gray-800 rounded-full overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
            }}
            className="h-full bg-cyan-400"
          />

        </div>

      </div>

    </div>
  );
}

export default Loader;