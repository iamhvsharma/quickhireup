import React from 'react';

const cards = [
  { gradient: "from-purple-600 to-pink-500" },
  { gradient: "from-purple-900 to-purple-800" },
  { gradient: "from-yellow-500 to-amber-500" },
  { gradient: "from-blue-500 to-cyan-500" },
  { gradient: "from-green-500 to-emerald-500" }
];

export default function InfiniteScrollCards() {
  // Double the cards array to ensure smooth infinite loop
  const doubledCards = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left white shadow overlay */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#FBFAFD] to-transparent z-20 pointer-events-none" />
      
      {/* Right white shadow overlay */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FBFAFD] to-transparent z-20 pointer-events-none" />
      
      {/* Scrolling container */}
      <div className="flex overflow-hidden">
        <div className="flex animate-scroll hover:pause">
          {doubledCards.map((card, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-[400px] h-[250px] m-4 rounded-xl overflow-hidden
                transform transition-all duration-300 hover:scale-105
                bg-gradient-to-br ${card.gradient} shadow-lg hover:shadow-xl`}
            >
              <img 
                src={`/placeholder.svg?height=250&width=400&text=Image ${(index % cards.length) + 1}`} 
                alt={`Placeholder ${(index % cards.length) + 1}`}
                className="w-full h-full object-cover"
              />
              {/* White overlay on hover */}
              <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

