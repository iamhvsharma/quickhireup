import React, { useEffect, useRef } from 'react';

const cards = [
  { gradient: "from-purple-600 to-pink-500" },
  { gradient: "from-purple-900 to-purple-800" },
  { gradient: "from-yellow-500 to-amber-500" },
  { gradient: "from-blue-500 to-cyan-500" },
  { gradient: "from-green-500 to-emerald-500" }
];

export default function InfiniteScrollCards() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollContent = container.querySelector('.scroll-content');
    const clone = scrollContent.cloneNode(true);
    container.appendChild(clone);

    let animationId;
    let lastTime = 0;
    const speed = 0.05; // Pixels per millisecond

    const animate = (currentTime) => {
      if (lastTime === 0) {
        lastTime = currentTime;
      }
      const deltaTime = currentTime - lastTime;
      
      if (container.scrollLeft >= scrollContent.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += speed * deltaTime;
      }
      
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pauseAnimation = () => cancelAnimationFrame(animationId);
    const resumeAnimation = () => {
      cancelAnimationFrame(animationId);
      lastTime = 0;
      animationId = requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left white shadow overlay */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#FBFAFD] to-transparent z-20 pointer-events-none" />
      
      {/* Right white shadow overlay */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FBFAFD] to-transparent z-20 pointer-events-none" />
      
      {/* Scrolling container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-hidden"
      >
        <div className="flex scroll-content">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-[400px] h-[250px] m-4 rounded-xl overflow-hidden
                transform transition-all duration-300 hover:scale-105
                bg-gradient-to-br ${card.gradient} shadow-lg hover:shadow-xl`}
            >
              <img 
                src={`/placeholder.svg?height=250&width=400&text=Image ${index + 1}`} 
                alt={`Placeholder ${index + 1}`}
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

