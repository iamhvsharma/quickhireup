// src/components/UserProfileCard.js
import React, { useState, useEffect } from "react";

function UserProfileCard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = {
        name: "Mahendra Kumawat",
        location: "Hyderabad",
        phone: "9024306866",
        email: "codingwork404@gmail.com",
        links: [
          { text: "Add Gender", url: "#" },
          { text: "Add birthday", url: "#" },
        ],
      };

      setUserData(data);
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-7xl p-8 shadow-md rounded-lg flex items-center">
      
      <div className="flex flex-col w-auto">
        <h2 className="text-2xl font-semibold mb-2">{userData.name}</h2>
        <div className="flex justify-between border-t border-gray-300 pt-2 space-x-8">
          <div>
            <p className="text-gray-600">{userData.location}</p>
            {userData.links.map((link, index) => (
              <a key={index} href={link.url} className="text-blue-500 block">
                {link.text}
              </a>
            ))}
          </div>
          <div>
            <p className="text-gray-600">
              <span>{userData.phone}</span> <a href="#" className="text-blue-500">Verify</a>
            </p>
            <p className="text-gray-600">
              <span>{userData.email}</span> <span className="text-green-500">✔</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;