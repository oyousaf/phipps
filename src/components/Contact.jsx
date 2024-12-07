"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidUKPhone = (phone) => /^0[1-9]\d{9}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    if (!isValidUKPhone(phone)) {
      setStatus("Please enter a valid UK phone number.");
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-20 px-6" id="contact">
      <motion.div
        className="max-w-4xl mx-auto bg-beige shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-teal text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          We’d love to hear from you. Fill out the form below, and we’ll get
          back to you as soon as possible!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 text-teal">
          {[
            {
              id: "name",
              type: "text",
              placeholder: "Name",
            },
            {
              id: "email",
              type: "email",
              placeholder: "Email",
            },
            {
              id: "phone",
              type: "text",
              placeholder: "Contact number",
            },
          ].map(({ label, id, type, placeholder }) => (
            <div key={id} className="flex flex-col">
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-teal focus:outline-none"
              />
            </div>
          ))}
          <div className="flex flex-col">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Message..."
              className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-teal focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#0a3a3a] hover:bg-teal text-beige hover:text-white rounded-lg focus:ring-4 focus:ring-teal focus:outline-none transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-center font-medium ${
              status.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
