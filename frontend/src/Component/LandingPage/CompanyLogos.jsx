import React from 'react';

const CompanyLogos = () => {
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

  return (
    <div className="flex flex-col itmes-center rounded-xl mt-6 py-5 w-full overflow-x-auto">
      <div className='text-sm font-medium text-gray-600 w-2/3 mx-auto text-center mb-8'>
      </div>
      <div className="flex justify-around items-center mt-9 min-w-max">
        {companies.map((company) => (
          <div key={company.name} className="mx-5">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
