"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setError(false);
    }

    if (!response.ok) {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <div className="w-full md:w-2/3 shadow-md rounded-lg animate-fadeInUp">
      {success ? (
        <div className="text-center text-green-500 border border-green-500 py-8 rounded-lg bg-green-950">
          Thank you! Your message has been sent.
          <br />
          We will come back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-normal text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name..."
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-normal text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email..."
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-normal text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-black py-2 px-4 rounded-md shadow hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 transform transition-transform duration-300 ease-in-out hover:scale-100"
          >
            Send Message
          </button>
          {error && (
            <p className="text-red-600 py-4 text-center">
              Something went wrong, please try again!
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
