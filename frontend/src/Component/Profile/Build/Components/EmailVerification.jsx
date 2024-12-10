"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProgressSteps } from "./ProgressSteps";
import { useState } from 'react';
import { Mail } from "lucide-react";
import { useScrollTop } from '../../../../hooks/useScrollTop';
import { useNavigate } from 'react-router-dom';

export default function EmailVerification({ onBack }) {
  useScrollTop();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCompleteRegistration = () => {
    navigate('/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto mb-10 mt-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Verify your email</h1>
          <p className="text-slate-600 text-lg">
            One last step! Let us send you a code to verify your email address.
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-md border border-gray-100">
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 text-base"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 max-w-[300px] mx-auto">
              <p className="text-sm text-slate-600">
                Click the button below to receive a verification code by email
              </p>
              <button 
                className="w-full px-4 py-2.5 text-sm font-semibold text-white rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-sm"
              >
                Send me a Verification Code
              </button>
            </div>

            <div className="space-y">
              <Input
                className="max-w-[300px] mx-auto text-center text-lg tracking-wider"
                placeholder="Enter verification code"
              />
              <p className="text-sm text-slate-500">
                Didn't get a code? <span className="text-green-600 hover:text-green-700 cursor-pointer">Click here to resend</span>
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-8 gap-4">
            <button
              onClick={onBack}
              className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Back
            </button>
            <button
              onClick={handleCompleteRegistration}
              className="flex-1 px-4 py-2.5 text-sm font-semibold text-white rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-sm"
            >
              Complete Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
