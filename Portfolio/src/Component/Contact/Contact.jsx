import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section className="w-full px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto bg-[#161616] border border-[#252525] rounded-3xl p-10 md:p-14">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Get In Touch
            </h1>

            <p className="text-gray-300 mt-6 max-w-md leading-8">
              Currently open for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs tracking-[3px] text-white mb-2">
                  NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-[#2a2a2a] rounded-lg p-4 text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[3px] text-white mb-2">
                  EMAIL
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-[#2a2a2a] rounded-lg p-4 text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[3px] text-white mb-2">
                  MESSAGE
                </label>

                <textarea
                  rows="5"
                  placeholder="How can I help you?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-[#2a2a2a] rounded-lg p-4 text-white outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-4 border border-[#E8D5B5] text-[#E8D5B5] rounded-full hover:bg-[#E8D5B5] hover:text-black transition"
              >
                Let's Talk →
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="md:pl-10 flex flex-col justify-center">
            <div>
              <h3 className="text-xs tracking-[3px] text-white mb-4">
                DIRECT CONTACT
              </h3>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center text-white">
                  <FaEnvelope size={20} />
                </div>

                <p className="text-white">shaikhmubashirahmed123@gmail.com</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xs tracking-[3px] text-white mb-4">
                SOCIAL PROFILES
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/Mubashir-85"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                    <FaGithub size={20} />
                  </div>
                  GitHub Profile
                </a>

                <a
                  href="https://www.linkedin.com/in/-mubashir-shaikh-/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                    <FaLinkedin size={20} />
                  </div>
                  LinkedIn Network
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;