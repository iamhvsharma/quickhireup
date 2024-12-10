import React, { useState } from 'react';
import UserProfileCard from './UserProfileCard';

const UserDashboard = () => {
  const [profileData, setProfileData] = useState({
    careerPreferences: {
      jobType: '',
      availability: '',
      location: '',
    },
    education: [],
    keySkills: '',
    languages: '',
    accomplishments: [],
    competitiveExams: '',
    employment: '',
    academicAchievements: '',
    resume: null,
  });

  const handleAdd = (section, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [section]: value,
    }));
  };

  return (
    <div className="profile-view-edit">
      <UserProfileCard />

      <div className="quick-links">
        <h3>Quick links</h3>
        <ul>
          <li>Preference <span>Add</span></li>
          <li>Education</li>
          <li>Key skills</li>
          <li>Languages</li>
          <li>Internships</li>
          <li>Projects</li>
          <li>Profile summary <span>Add</span></li>
          <li>Accomplishments</li>
          <li>Competitive exams</li>
          <li>Employment</li>
          <li>Academic achievements</li>
          <li>Resume</li>
        </ul>
      </div>

      <div className="profile-sections">
        <div className="section">
          <h4>Your career preferences</h4>
          <p>Preferred job type: {profileData.careerPreferences.jobType || 'Add desired job type'}</p>
          <p>Availability to work: {profileData.careerPreferences.availability || 'Add work availability'}</p>
          <p>Preferred location: {profileData.careerPreferences.location || 'Add preferred work location'}</p>
        </div>

        <div className="section">
          <h4>Education</h4>
          {profileData.education.length > 0 ? (
            profileData.education.map((edu, index) => <p key={index}>{edu}</p>)
          ) : (
            <p>Add Education Details</p>
          )}
        </div>

        <div className="section">
          <h4>Key skills</h4>
          <p>{profileData.keySkills || 'Talk about your technical skills, software, or tools you know'}</p>
        </div>

        <div className="section">
          <h4>Languages</h4>
          <p>{profileData.languages || 'Talk about the languages that you can speak, read, or write'}</p>
        </div>

        <div className="section">
          <h4>Accomplishments</h4>
          {profileData.accomplishments.length > 0 ? (
            profileData.accomplishments.map((acc, index) => <p key={index}>{acc}</p>)
          ) : (
            <p>Add Accomplishments</p>
          )}
        </div>

        <div className="section">
          <h4>Competitive exams</h4>
          <p>{profileData.competitiveExams || 'Talk about any competitive exam that you appeared for and the rank received'}</p>
        </div>

        <div className="section">
          <h4>Employment</h4>
          <p>{profileData.employment || 'Talk about the company you worked at, your designation, and describe what all you did there'}</p>
        </div>

        <div className="section">
          <h4>Academic achievements</h4>
          <p>{profileData.academicAchievements || 'Talk about any academic achievement whether in college or school that deserves a mention'}</p>
        </div>

        <div className="section">
          <h4>Resume</h4>
          {profileData.resume ? (
            <p>Resume uploaded</p>
          ) : (
            <p>Your resume is the first impression you make on potential employers. Craft it carefully to secure your desired job or internship.</p>
          )}
          <button onClick={() => handleAdd('resume', 'Uploaded')}>Upload resume</button>
          <p>Don't have a resume yet? <span>Create resume</span></p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;