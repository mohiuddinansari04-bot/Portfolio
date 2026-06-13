import React from 'react'

function Cards() {
  const cardsData = [
    {
      id: "1",
      title: "Project 1",
      description: "Description of Project 1",
      imageUrl: "https://via.placeholder.com/150",
      link: ""
    },
    {
      id: "2",
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "https://via.placeholder.com/150",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {cardsData.map((card) => (
          <div key={card.id} className="w-full max-w-sm bg-white rounded-lg shadow-lg  overflow-hidden text-center p-4">
            <img className="w-full h-40 object-cover rounded" src={card.imageUrl} alt={card.title} />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{card.description}</p>
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