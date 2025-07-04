import React from "react";
import {
  FaLinkedin,
  FaYoutubeSquare,
  FaTelegram,
  FaWhatsapp,
  FaInstagramSquare,
} from "react-icons/fa";
import term from "../assets/docs/t&c.pdf";

function Company() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8" role="navigation" aria-label="Company Navigation">
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
          <a href="/about" className="hover:text-white hover:pl-2 transition-all duration-300">
            About Us
          </a>
        </li>
        <li>
          <a href="/internship" className="hover:text-white hover:pl-2 transition-all duration-300">
            Courses
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:pl-2 transition-all duration-300"
          >
            Affiliate Program
          </a>
        </li>
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8" role="navigation" aria-label="Services Navigation">
      <h4 className="text-xl font-semibold mb-6 relative after:block after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-[2px] after:bg-pink-500">
        Our Services
      </h4>
      <ul className="space-y-3 text-gray-400">
        <li>
          <a href="/internship-roadmap" className="hover:text-white hover:pl-2 transition-all duration-300">
            Internship Roadmap
          </a>
        </li>
        <li>
          <a href="/internship" className="hover:text-white hover:pl-2 transition-all duration-300">
            Internship Program
          </a>
        </li>
        <li>
          <a href="/internship" className="hover:text-white hover:pl-2 transition-all duration-300">
            Web Development
          </a>
        </li>
        <li>
          <a href="/internship" className="hover:text-white hover:pl-2 transition-all duration-300">
            App Development
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:pl-2 transition-all duration-300"
          >
            Online Courses
          </a>
        </li>
      </ul>
    </div>
  );
}

function QuickList() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8" role="navigation" aria-label="Quick Links Navigation">
      <h4 className="text-xl font-semibold mb-6 relative after:block after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-[2px] after:bg-pink-500">
        Quick Links
      </h4>
      <ul className="space-y-3 text-gray-400">
        <li>
          <a href="/privacy-policy" className="hover:text-white hover:pl-2 transition-all duration-300">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href={term} className="hover:text-white hover:pl-2 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="https://wa.me/918757614978" className="hover:text-white hover:pl-2 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            Live Chat
          </a>
        </li>
        <li>
          <a href="https://wa.me/918757614978" className="hover:text-white hover:pl-2 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8" aria-label="Social Media Links">
      <h4 className="text-xl font-semibold mb-6 relative after:block after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-[2px] after:bg-pink-500">
        Follow Us
      </h4>
      <div className="flex space-x-4 flex-wrap">
        <a
          href="https://www.linkedin.com/company/107644723/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:bg-red-600 p-2 rounded-full transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/internfy.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:bg-red-600 p-2 rounded-full transition"
        >
          <FaInstagramSquare size={30} />
        </a>
        <a
          href="https://www.youtube.com/@Internfy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:bg-red-600 p-2 rounded-full transition"
        >
          <FaYoutubeSquare size={30} />
        </a>
        <a
          href="https://t.me/+dfBaEcU0eNJjNTVl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="hover:bg-red-600 p-2 rounded-full transition"
        >
          <FaTelegram size={30} />
        </a>
        <a
          href="https://wa.me/918757614978"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:bg-red-600 p-2 rounded-full transition"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <Company />
          <Services />
          <QuickList />
          <SocialMedia />
        </div>
        <p className="text-center text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Internfy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
