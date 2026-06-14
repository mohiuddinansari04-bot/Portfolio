import React from 'react'

function Cards() {
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
      description: "Description of Project 3",
      imageUrl: "https://via.placeholder.com/150",
      link: ""
    },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <p className="text-2xl w-3xl ">Here are some of my recent projects created by me using React and modern web technologies:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {cardsData.map((card) => (
          <div key={card.id} className="w-full max-w-sm bg-gray-500 rounded-lg shadow-lg  overflow-hidden text-center p-4">
     
            <h3 className=" text-2xl font-semibold text-white ">{card.title}</h3>
            <p className="mt-5 text-sm text-white">{card.description}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards;