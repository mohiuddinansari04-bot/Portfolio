import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-[#1C1B1B] text-[#E8D5B5] py-8 px-6 md:px-14">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          {/* Left Side */}
          <div>
            <h2 className="text-xl md:text-3xl font-serif font-bold">
              Portfolio.
            </h2>

            <p className="text-sm mt-3 text-[#D6C7AD]">
              © 2026 Developer Portfolio. All rights reserved.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex gap-8 md:gap-12 text-sm">
            <a
              href="https://github.com/Mubashir-85"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/-mubashir-shaikh-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com/Mubashi01793199"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;