import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  const [positions, setPositions] = useState([]);

  const mentorImages = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
    'https://randomuser.me/api/portraits/women/6.jpg',
    'https://randomuser.me/api/portraits/men/7.jpg',
    'https://randomuser.me/api/portraits/women/8.jpg',
  ];

  const generateNewPosition = () => ({
    left: Math.random() * 80 + 10,
    top: Math.random() * 60 + 20,
  });

  useEffect(() => {
    // Initialize positions
    setPositions(Array(15).fill(null).map(generateNewPosition));

    // Update positions every 200ms
    const interval = setInterval(() => {
      setPositions(prevPositions => 
        prevPositions.map(pos => ({
          left: pos.left + (Math.random() - 0.5) * 2,
          top: pos.top + (Math.random() - 0.5) * 2,
        }))
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center justify-center mt-20 relative min-h-[600px] overflow-hidden">
      <div className="container flex flex-col items-center text-center z-10 relative">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Welcome to <span className="text-blue-600">Mentee</span> - your path
          <br />
          to the best version of yourself
        </h1>
        <p className="mt-4 text-gray-500 max-w-[600px]">
          Connect with experienced mentors who will guide you through your professional journey
        </p>
        <div className="flex gap-4 mt-8">
          <Button size="lg" onClick={() => navigate('/mentors')}>
            Find a mentor
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/become-mentor')}>
            Become a mentor
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {positions.map((position, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 rounded-full overflow-hidden transition-all duration-200 ease-linear"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
          >
            <img
              src={mentorImages[i % mentorImages.length]}
              alt={`Mentor ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
