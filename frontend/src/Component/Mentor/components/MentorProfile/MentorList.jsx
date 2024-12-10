import React, { useState, useMemo, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import MentorCard from './MentorCard';

// Dummy data for mentors
const mentorsData = [
    {
      id: 1,
      date: '19 Feb, 2023',
      company: 'Google',
      title: 'Senior Data Scientist',
      skills: ['Data Analysis', 'Machine Learning', 'R', 'Python', 'Statistics'],
      rate: 290,
      location: 'California, CA',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      date: '20 Feb, 2023',
      company: 'Microsoft',
      title: 'ML Engineer',
      skills: ['TensorFlow', 'PyTorch', 'Python', 'Deep Learning'],
      rate: 250,
      location: 'Remote',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      date: '15 Mar, 2023',
      company: 'Amazon',
      title: 'Data Engineer',
      skills: ['SQL', 'Big Data', 'ETL', 'Python', 'AWS'],
      rate: 270,
      location: 'Seattle, WA',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      date: '25 Mar, 2023',
      company: 'Facebook',
      title: 'AI Research Scientist',
      skills: ['Computer Vision', 'Natural Language Processing', 'Python', 'PyTorch'],
      rate: 320,
      location: 'Menlo Park, CA',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 5,
      date: '10 Apr, 2023',
      company: 'Tesla',
      title: 'Robotics Engineer',
      skills: ['ROS', 'Python', 'C++', 'Robotics', 'AI'],
      rate: 310,
      location: 'Palo Alto, CA',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 6,
      date: '18 Apr, 2023',
      company: 'Netflix',
      title: 'Data Visualization Specialist',
      skills: ['Tableau', 'Power BI', 'Data Storytelling', 'Python', 'D3.js'],
      rate: 280,
      location: 'Los Gatos, CA',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      id: 7,
      date: '5 May, 2023',
      company: 'Apple',
      title: 'iOS Developer',
      skills: ['Swift', 'Objective-C', 'UI/UX Design', 'Xcode', 'Core Data'],
      rate: 240,
      location: 'Cupertino, CA',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      id: 8,
      date: '12 May, 2023',
      company: 'IBM',
      title: 'Cloud Architect',
      skills: ['Cloud Computing', 'Kubernetes', 'Docker', 'AWS', 'Azure'],
      rate: 300,
      location: 'Remote',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
      id: 9,
      date: '22 May, 2023',
      company: 'Adobe',
      title: 'Product Manager',
      skills: ['Agile', 'Scrum', 'Stakeholder Management', 'Wireframing', 'UX Research'],
      rate: 260,
      location: 'San Jose, CA',
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      id: 10,
      date: '30 May, 2023',
      company: 'LinkedIn',
      title: 'Backend Developer',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TypeScript'],
      rate: 250,
      location: 'Sunnyvale, CA',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
  ];
  
  

const MentorList = () => {
  const [savedMentors, setSavedMentors] = useState(() => {
    const saved = localStorage.getItem('savedMentors');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  
  const [searchTerms, setSearchTerms] = useState({
    keyword: '',
    location: '',
  });
  
  const [selectedSkills, setSelectedSkills] = useState(new Set());
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  useEffect(() => {
    localStorage.setItem('savedMentors', JSON.stringify([...savedMentors]));
  }, [savedMentors]);

  const allSkills = ['Data Analysis', 'Machine Learning', 'Python', 'Statistics', 'R', 'TensorFlow', 'Deep Learning'];

  const handleSaveMentor = (mentorId) => {
    setSavedMentors(prev => {
      const newSaved = new Set(prev);
      if (newSaved.has(mentorId)) {
        newSaved.delete(mentorId);
      } else {
        newSaved.add(mentorId);
      }
      return newSaved;
    });
  };

  const filteredMentors = useMemo(() => {
    return mentorsData.filter(mentor => {
      const keywordMatch = !searchTerms.keyword || 
        mentor.title.toLowerCase().includes(searchTerms.keyword.toLowerCase()) ||
        mentor.company.toLowerCase().includes(searchTerms.keyword.toLowerCase());

      const locationMatch = !searchTerms.location ||
        mentor.location.toLowerCase().includes(searchTerms.location.toLowerCase());

      const skillsMatch = selectedSkills.size === 0 ||
        mentor.skills.some(skill => selectedSkills.has(skill));

      const savedMatch = !showSavedOnly || savedMentors.has(mentor.id);

      return keywordMatch && locationMatch && skillsMatch && savedMatch;
    });
  }, [searchTerms, selectedSkills, savedMentors, showSavedOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="bg-gray-100 p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-6">Find Your Mentor</h1>
        <div className="flex gap-2 bg-white p-2 rounded-lg shadow-sm">
          <div className="flex items-center flex-1 px-4 border-r">
            <BiSearch className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by role or company"
              className="w-full outline-none"
              value={searchTerms.keyword}
              onChange={(e) => setSearchTerms(prev => ({...prev, keyword: e.target.value}))}
            />
          </div>
          <div className="flex items-center flex-1 px-4">
            <IoLocationOutline className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Add location"
              className="w-full outline-none"
              value={searchTerms.location}
              onChange={(e) => setSearchTerms(prev => ({...prev, location: e.target.value}))}
            />
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-4">
            <div className="mb-6">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg mb-4 ${
                  showSavedOnly ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setShowSavedOnly(!showSavedOnly)}
              >
                {showSavedOnly ? <BsBookmarkFill /> : <BsBookmark />}
                <span>Saved Mentors ({savedMentors.size})</span>
              </button>
              
              <h3 className="font-medium mb-3">Skills</h3>
              <div className="space-y-2">
                {allSkills.map(skill => (
                  <label key={skill} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedSkills.has(skill)}
                      onChange={() => {
                        setSelectedSkills(prev => {
                          const newSkills = new Set(prev);
                          if (newSkills.has(skill)) {
                            newSkills.delete(skill);
                          } else {
                            newSkills.add(skill);
                          }
                          return newSkills;
                        });
                      }}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>{skill}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                {...mentor}
                isSaved={savedMentors.has(mentor.id)}
                onSave={() => handleSaveMentor(mentor.id)}
              />
            ))}
          </div>
          
          {filteredMentors.length === 0 && (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No mentors found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorList;