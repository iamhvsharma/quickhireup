import React, { useEffect, useRef } from 'react';

const CompanyLogos = () => {
  const carouselRef = useRef(null);
  const companies = [
    {
      name: "Adobe",
      logo: "https://www.adobe.com/content/dam/cc/icons/adobe_wordmark_red.svg",
    },
    {
      name: "Medium",
      logo: "https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png",
    },
    {
      name: "Coinbase",
      logo: "https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel && window.innerWidth < 768) {
      // Clone items for infinite scroll
      const itemsToClone = 2; // Number of times to clone the items
      const originalItems = Array.from(carousel.children);
      
      // Remove existing clones if any
      carousel.innerHTML = '';
      
      // Add original items
      originalItems.forEach(item => carousel.appendChild(item.cloneNode(true)));
      
      // Clone and append items multiple times
      for (let i = 0; i < itemsToClone; i++) {
        originalItems.forEach(item => {
          carousel.appendChild(item.cloneNode(true));
        });
      }

      let position = 0;
      const speed = 1;
      let animationFrameId;

      const animate = () => {
        position -= speed;
        const firstItemWidth = carousel.children[0].offsetWidth + 32; // Including margin
        const totalWidth = firstItemWidth * companies.length;

        // Reset position when we've scrolled one full set of items
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }

        carousel.style.transform = `translateX(${position}px)`;
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);

      // Pause animation on hover
      carousel.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationFrameId);
      });

      carousel.addEventListener('mouseleave', () => {
        animationFrameId = requestAnimationFrame(animate);
      });

      // Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center rounded-xl mt-6 py-5 w-full">
      {/* Desktop View */}
      <div className="hidden md:flex justify-around items-center w-full">
        {companies.map((company) => (
          <div key={company.name} className="mx-5 transform hover:scale-110 transition-transform duration-300">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile View with Infinite Scroll */}
      <div className="md:hidden w-full overflow-hidden">
        <div 
          ref={carouselRef}
          className="carousel flex space-x-8 py-4" 
          style={{ width: 'max-content' }}
        >
          {companies.map((company) => (
            <div 
              key={company.name} 
              className="flex-shrink-0 h-16 w-40 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          will-change: transform;
          transition: transform 0.3s ease-out;
        }
        .carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CompanyLogos;
