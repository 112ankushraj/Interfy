import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaYoutubeSquare, FaTelegram, FaWhatsapp } from 'react-icons/fa';
// import Resume from '../../assets/docs/resume.pdf'
  import term from '../assets/docs/t&c.pdf'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-xl font-semibold mb-6 relative after:block after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-[2px] after:bg-pink-500">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-white hover:pl-2 transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="about" className="hover:text-white hover:pl-2 transition-all duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="internship" className="hover:text-white hover:pl-2 transition-all duration-300">
                  Courses
                </a>
              </li>
              <li>
                <a href="https://forms.gle/s9TW7Tqi3tAQLCu78" className="hover:text-white hover:pl-2 transition-all duration-300">
                 Affiliate Program
                </a>
              </li>
            </ul>
          </div>


          {/* Our services */}

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-xl font-semibold mb-6 relative after:block after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-[2px] after:bg-pink-500">
              Our Services
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="" className="hover:text-white hover:pl-2 transition-all duration-300">
                  Internship Roadmap
                </a>
              </li>
              <li>
                <a href="internship" className="hover:text-white hover:pl-2 transition-all duration-300">
                  Internship Program
                </a>
              </li>
              <li>
                <a href="internship" className="hover:text-white hover:pl-2 transition-all duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="internship" className="hover:text-white hover:pl-2 transition-all duration-300">
                 App Development
                </a>
              </li>
              <li>
                <a href="https://forms.gle/s9TW7Tqi3tAQLCu78" className="hover:text-white hover:pl-2 transition-all duration-300">
                 Online Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-xl font-semibold mb-6 relative after:block after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-[2px] after:bg-pink-500">
              Quick Link
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="" className="hover:text-white hover:pl-2 transition-all duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={term} className="hover:text-white hover:pl-2 transition-all duration-300">
                  Term & Conditions
                </a>

               
              </li>
              <li>
                <a href="" className="hover:text-white hover:pl-2 transition-all duration-300">
                 Live Chat
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white hover:pl-2 transition-all duration-300">
                 FAQ
                </a>
              </li>
            </ul>
          </div>


          {/* Social Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-xl font-semibold mb-6 relative after:block after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-[2px] after:bg-pink-500">
              Follow Us
            </h4>
            <div className="flex space-x-4 flex-wrap">
              <a href="https://www.linkedin.com/company/codealpha" className="hover:bg-red-600 p-2 rounded-full transition">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.linkedin.com/company/codealpha" className="hover:bg-red-600 p-2 rounded-full transition">
                <FaTwitterSquare size={30} />
              </a>
              <a href="#" className="hover:bg-red-600 p-2 rounded-full transition">
                <FaYoutubeSquare size={30} />
              </a>
              <a href="https://t.me/CodeAlphaOfficial" className="hover:bg-red-600 p-2 rounded-full transition">
                <FaTelegram size={30} />
              </a>
              <a href="https://wa.me/codealpha" className="hover:bg-red-600 p-2 rounded-full transition">
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-10">&copy; {new Date().getFullYear()} Internfy. All rights reserved.</p>
      </div>
    </footer>
  );
}
