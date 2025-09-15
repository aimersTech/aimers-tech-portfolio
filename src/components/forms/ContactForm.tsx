import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-start">
        <h1 className="text-5xl font-bold ">
          You need a <span className="text-[#1DE5DB]">partner</span>.
          <br />
          We’re here to help.
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base">
          Ready to start your next project? We’d love to hear from you. Let’s
          discuss how we can bring your ideas to life.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full mt-10 gap-8 lg:gap-10">
        {/* Left Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Send us a message
          </h2>
          <div className="space-y-4">
            {/* Name */}
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 focus-within:border-cyan-500 transition">
              <label className="block text-gray-400 mb-2 text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 bg-transparent text-sm sm:text-base text-white
                           border border-transparent rounded-md
                           focus:border-cyan-200 focus:ring-1 focus:ring-cyan-200
                           outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 focus-within:border-cyan-500 transition">
              <label className="block text-gray-400 mb-2 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email..."
                className="w-full p-2 bg-transparent text-sm sm:text-base text-white
                           border border-transparent rounded-md
                           focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                           outline-none transition"
              />
            </div>

            {/* Project */}
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 focus-within:border-cyan-500 transition">
              <label className="block text-gray-400 mb-2 text-sm sm:text-base">
                Project
              </label>
              <textarea
                placeholder="Tell us about your project..."
                className="w-full p-2 bg-transparent text-sm sm:text-base text-white
                           border border-transparent rounded-md
                           focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                           outline-none transition h-24 sm:h-32"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <button
                type="button"
                className="bg-cyan-500 text-white p-2 rounded hover:bg-cyan-600 text-sm sm:text-base transition-colors w-full hover:cursor-pointer"
              >
                Send Message
              </button>
            </div>

            {/* Service Buttons */}
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">
              What can we help you with?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Web Development",
                "App Development",
                "UI/UX Design",
                "Generative AI Development",
                "MVP",
                "Rapid Prototyping",
                "UX Research",
                "Visual Design",
                "Cloud",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 text-xs sm:text-sm transition-colors hover:cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Contact Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex items-center">
              <Mail className="text-cyan-400 mr-3 h-5 w-5" />
              <span className="text-sm sm:text-base">
                aimers.tech.global@gmail.com
              </span>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex items-center">
              <Phone className="text-cyan-400 mr-3 h-5 w-5" />
              <span className="text-sm sm:text-base">+8801780159656</span>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex items-center">
              <MapPin className="text-cyan-400 mr-3 h-5 w-5" />
              <span className="text-sm sm:text-base">
                Khagan Bazar, Ashulia, Savar, Dhaka
              </span>
            </div>
          </div>

          {/* Social Links */}
          <h2 className="text-xl font-semibold mt-8 mb-4 text-white">
            Follow Us On
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61578696980378"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-cyan-400 h-6 w-6 hover:text-cyan-300 cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-cyan-400 h-6 w-6 hover:text-cyan-300 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/aimers.tech.global/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-cyan-400 h-6 w-6 hover:text-cyan-300 cursor-pointer" />
            </a>
            <a
              href="https://x.com/aimerstech_dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-cyan-400 h-6 w-6 hover:text-cyan-300 cursor-pointer" />
            </a>
            <a
              href="https://www.youtube.com/@aimers.tech.global"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="text-cyan-400 h-6 w-6 hover:text-cyan-300 cursor-pointer" />
            </a>
          </div>

          {/* CTA Box */}
          <div className="mt-8 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm sm:text-base">
              Ready to get started?
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              Schedule a free consultation to discuss your project requirements
              and get a personalized quote.
            </p>
            <button
              type="button"
              className="mt-2 bg-cyan-500 text-white p-2 rounded hover:bg-cyan-600 w-full text-sm sm:text-base transition-colors hover:cursor-pointer"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
