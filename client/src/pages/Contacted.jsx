import React from "react";
import Footer from "./Footer";

const Contacted = () => {
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
          {/* Company Info */}
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
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-semibold text-xl">Email ID</h3>
                  <p>internfy.in@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8 text-yellow-500">
              📝 Contact Form
            </h2>

            <form
              method="post"
              action="https://script.google.com/macros/s/AKfycbwe6cod8oND0pQ85sEUDQiKUIoyLLA9fPxiVNGVQ7PUTzMxxBGtoCYAEiE9EpiaGfWU/exec"
              name="contactform"
              id="contact-form"
              className="space-y-6"
            >
              <div>
                <label className="block font-semibold text-lg">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-lg">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  name="whatsapp"
                  required
                  className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-lg">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block font-semibold text-lg">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full mt-1 px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
 

    <Footer/>


    </>
  );
};

export default Contacted;
