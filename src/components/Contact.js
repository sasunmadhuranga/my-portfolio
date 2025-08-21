"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    <section id="contact" className="bg-gradient-to-r from-gray-800 via-slate-800 to-indigo-950 py-16 px-8 md:px-20 lg:px-40">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl text-gray-100 font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-gray-100">
          Have a project or job opportunity? Let’s connect!
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white/20 rounded-2xl p-6 shadow-lg space-y-6"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 text-gray-100 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 text-gray-100 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 text-gray-100 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-green-100 text-green-700 p-6 rounded-lg shadow-md">
            ✅ Thanks for reaching out! I’ll get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
}
