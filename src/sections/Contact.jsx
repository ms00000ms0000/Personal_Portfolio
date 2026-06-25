import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { socialLinks } from "../constants/data";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="glass p-10 rounded-3xl max-w-4xl w-full">

        <h2 className="text-5xl font-bold gradient-text text-center mb-10">
          Contact Me
        </h2>

        <p className="text-center text-gray-300 mb-10">
          Interested in AI, Data Science or Analytics projects?
          Let's connect and build something impactful.
        </p>

        <div className="flex justify-center gap-8 text-4xl">

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 transition duration-300 hover:scale-125"/>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 transition duration-300 hover:scale-125"/>
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:text-cyan-400 transition duration-300 hover:scale-125"/>
         </a>

          <a href={socialLinks.email}>
            <FaEnvelope className="hover:text-cyan-400 transition duration-300 hover:scale-125" />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;