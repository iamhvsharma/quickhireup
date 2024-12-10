import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-gray-50 flex justify-center items-center  border-t">
      <div className="container py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/placeholder.svg"
                alt="Mentee Logo"
                width={32}
                height={32}
              />
              <span className="font-semibold">Mentee</span>
            </Link>
            <p className="text-sm text-gray-500">
              Your path to professional growth and success
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About the Course</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link to="#">Reviews</Link>
              </li>
              <li>
                <Link to="#">Success stories</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About the Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-500 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Mentee. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms</Link>
              <Link to="#">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
