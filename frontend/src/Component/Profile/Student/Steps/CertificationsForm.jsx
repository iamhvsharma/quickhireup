import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CertificationsForm = ({ onNext, onBack }) => {
  const [certificates, setCertificates] = useState([{ name: '', issuer: '', date: '' }]);

  const addCertificate = () => {
    setCertificates([...certificates, { name: '', issuer: '', date: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Certifications</h1>
        <p className="text-slate-600">
          Add your relevant certifications and achievements
        </p>
      </div>

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
        {certificates.map((cert, index) => (
          <div key={index} className="space-y-4 p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Certificate {index + 1}</h3>
              {index > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCertificates(certificates.filter((_, i) => i !== index))}
                >
                  Remove
                </Button>
              )}
            </div>

            <div>
              <Label>Certificate Name*</Label>
              <Input placeholder="e.g., AWS Solutions Architect" />
            </div>

            <div>
              <Label>Issuing Organization*</Label>
              <Input placeholder="e.g., Amazon Web Services" />
            </div>

            <div>
              <Label>Date Earned*</Label>
              <Input type="date" />
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={addCertificate}
        >
          Add Certificate
        </Button>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default CertificationsForm; 