import React from 'react'

function Cardspage() {
  const cardsData = [
    {
      id: "1",
      title: "Smart-Trip",
      description: "Developed a responsive travel booking website using React, JavaScript, and Tailwind CSS, featuring destination exploration, interactive UI components, and a seamless user experience.",
      link: ""
    },
    {
      id: "2",
      title: "SocialApp",
      description: "Social App is a responsive social media platform built using React and modern web technologies, allowing users to create posts, interact with content, and enjoy a smooth and engaging user experience.",
      link: ""
    },
    {
      id: "3",
      title: "Project 3",
      description: "Example project description for Project 3. This project demonstrates the use of React and Tailwind CSS to create a responsive and visually appealing web application.",
      imageUrl: "https://via.placeholder.com/150",
      link: ""
    },
  ]
  return (
    <div id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">My Projects</h1>
      <p className="text-xl text-slate-300 mx-auto max-w-3xl text-center">Here are some of my frontend projects showcasing my skills and creativity.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 justify-items-center">
        {cardsData.map((card) => (
          <div key={card.id} className="w-full max-w-sm rounded-3xl border border-slate-700 bg-slate-900/95 shadow-2xl shadow-slate-950/40 overflow-hidden text-center p-6">
            <h3 className="text-2xl font-semibold text-red-200">{card.title}</h3>
            <p className="mt-5 text-base leading-7 text-slate-300">{card.description}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-red-400">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cardspage;