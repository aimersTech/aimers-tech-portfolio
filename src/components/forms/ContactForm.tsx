"use client"
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Send,
} from "lucide-react";

const ContactForm = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Generative AI Development",
    "MVP",
    "Rapid Prototyping",
    "UX Research",
    "Visual Design",
    "Cloud",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            You need a <span className="text-cyan-400">partner</span>.
            <br />
            <span className="text-cyan-400">We&apos;re </span>here to help.
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Ready to start your next project? We&apos;d love to hear from you. Let&apos;s
            discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Form */}
          <div>
            {/* ✅ Underline heading */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-white relative inline-block">
              Send us a message
              <span className="block h-[1px] bg-white mt-1"></span>
            </h2>

            <div className="space-y-6 mb-12">
              {/* Name Field */}
              <div>
                <label className="block text-white text-base mb-3">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 bg-gray-900 text-white rounded-lg border border-gray-700 
                           focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400
                           transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white text-base mb-3">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email..."
                  className="w-full px-4 py-4 bg-gray-900 text-white rounded-lg border border-gray-700 
                           focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400
                           transition-all duration-200"
                />
              </div>

              {/* Project Field */}
              <div>
                <label className="block text-white text-base mb-3">Project</label>
                <textarea
                  placeholder="Tell us about your project"
                  rows={6}
                  className="w-full px-4 py-4 bg-gray-900 text-white rounded-lg border border-gray-700 
                           focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400
                           transition-all duration-200 resize-none"
                />
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-8">
              {/* ✅ Underline heading */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white relative inline-block">
                What can we help you with?
                <span className="block h-[1px] bg-white mt-1"></span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-4 py-3 h-14 w-full rounded-lg text-sm sm:text-base font-medium transition-all duration-200 flex items-center justify-center text-center
                      ${
                        selectedServices.includes(service)
                          ? "bg-cyan-400 text-black border border-cyan-400"
                          : "bg-transparent text-white border border-gray-600 hover:border-gray-500"
                      }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Send Button */}
            <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-medium py-4 px-6 rounded-lg 
                             transition-all duration-200 flex items-center justify-center gap-2">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </div>

          {/* Right Side - Contact Info */}
          <div>
            {/* ✅ Underline heading */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-white relative inline-block">
              Contact Information
              <span className="block h-[1px] bg-white mt-1"></span>
            </h2>

            <div className="space-y-4 mb-12">
              {/* Email */}
              <div className="flex items-center gap-4 p-6 bg-gray-900 rounded-xl border border-gray-700">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <Mail className="text-cyan-400 h-5 w-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">aimers.tech.global@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-6 bg-gray-900 rounded-xl border border-gray-700">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <Phone className="text-cyan-400 h-5 w-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+8801780159656</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 p-6 bg-gray-900 rounded-xl border border-gray-700">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <MapPin className="text-cyan-400 h-5 w-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400">
                    Khagan Bazar, Ashulia, Savar, Dhaka
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
                Follow Us On
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61578696980378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-400 
                           transition-all duration-200 hover:bg-gray-800"
                >
                  <Facebook className="text-cyan-400 h-5 w-5" />
                </a>

                <a
                  href="https://www.instagram.com/aimers.tech.global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-400 
                           transition-all duration-200 hover:bg-gray-800"
                >
                  <Instagram className="text-cyan-400 h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/company/aimers-tech-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-400 
                           transition-all duration-200 hover:bg-gray-800"
                >
                  <Linkedin className="text-cyan-400 h-5 w-5" />
                </a>

                <a
                  href="https://www.youtube.com/@aimers.tech.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-400 
                           transition-all duration-200 hover:bg-gray-800"
                >
                  <Youtube className="text-cyan-400 h-5 w-5" />
                </a>

                <a
                  href="https://x.com/aimerstech_dd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-400 
                           transition-all duration-200 hover:bg-gray-800"
                >
                  <Twitter className="text-cyan-400 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 bg-gray-900 rounded-xl border border-gray-700">
              <h4 className="text-white font-semibold text-lg mb-2">
                Ready to get started?
              </h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Schedule a free consultation to discuss your project requirements
                and get a personalized quote.
              </p>
              <button className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 
                               hover:bg-cyan-400 hover:text-black font-medium py-3 px-6 rounded-lg 
                               transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
