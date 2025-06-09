import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../axios/AxiosInstance";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Inside handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("contact", formData);

      if (response.status === 200) {
        toast.success("Your message has been sent!");

        // Clear the form
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          phone: "",
          message: "",
        });

        // Redirect after a short delay to allow toast to show
        setTimeout(() => {
          window.location.href = "/";
        }, 2500); // 2.5 seconds
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
    }
  };
  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl w-full lg:w-1/2">
      <h2 className="text-3xl font-bold mb-8 text-yellow-500">
        📝 Contact Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold text-lg">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block font-semibold text-lg">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block font-semibold text-lg">WhatsApp Number</label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block font-semibold text-lg">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block font-semibold text-lg">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function CompnayInfo(){
  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl w-full lg:w-1/2">
    <h2 className="text-3xl font-bold mb-8 text-yellow-500">
      📘 More Information
    </h2>
    <ul className="space-y-6 text-lg">
      <li className="flex items-start gap-3">
        <span className="text-2xl">📍</span>
        <div>
          <h3 className="font-semibold text-xl">Address</h3>
          <p>Patna, Bihar, India</p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-2xl">📞</span>
        <div>
          <h3 className="font-semibold text-xl">Contact Number</h3>
          <p>+91 8102668655</p>
        </div>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-2xl">✉</span>
        <div>
          <h3 className="font-semibold text-xl">Email ID</h3>
          <p>internfy.in@gmail.com</p>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default function Contact() {

  return (
    <>
      <section
        id="contacts"
        className="py-20 bg-gradient-to-br from-yellow-100 via-yellow-50 to-white text-gray-800"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-16">
            <span className="text-yellow-500">Internfy</span> Contact Us
          </h1>

          <div className="flex flex-col lg:flex-row gap-10">
            <CompnayInfo />
            <ContactForm  />
          </div>
        </div>
      </section>
    </>
  );
}
