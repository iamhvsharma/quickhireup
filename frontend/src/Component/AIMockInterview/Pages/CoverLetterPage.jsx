import React, { useState } from 'react';
import { Upload } from 'react-feather';

function CoverLetterPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    // Add generation logic here
    setOutput('Your generated cover letter will appear here...');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Cover Letter Generator
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Input Job Description
            </h2>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Input text here..."
              className="w-full h-48 p-2 border rounded"
            />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Upload Resume
            </h2>
            <div className="p-8 border-dashed border-2 rounded cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center space-y-4">
                <Upload className="h-12 w-12 text-gray-400" />
                <p className="text-sm text-gray-600">Upload your File</p>
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.doc,.docx"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Output
          </h2>
          <textarea
            value={output}
            readOnly
            placeholder="Output will appear here..."
            className="w-full h-96 p-2 border rounded bg-gray-50"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button 
          onClick={handleGenerate}
          className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default CoverLetterPage;

