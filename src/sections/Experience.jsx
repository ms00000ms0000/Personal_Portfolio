import { experiences } from "../constants/data";

function Experience() {
  return (
    <section
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-center text-5xl font-bold gradient-text mb-16">
          Experience
        </h2>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass p-8 rounded-3xl mb-8"
          >
            <h3 className="text-2xl font-bold">
              {exp.role}
            </h3>

            <p className="text-cyan-400">
              {exp.company}
            </p>

            <p className="text-gray-400">
              {exp.duration}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;