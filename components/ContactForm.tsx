"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qx3d9wv",
        "template_y9bjcfr",
        {
          name: name,
          email: email,
          message: message,
        },
        "_DIA2rb2mFzLhwmob"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-4 flex flex-col gap-4"
    >
      <label htmlFor="name" className="text-sm font-semibold">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded px-4 py-2 bg-white"
        required
      />

      <label htmlFor="email" className="text-sm font-semibold">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded px-4 py-2 bg-white"
        required
      />

      <label htmlFor="message" className="text-sm font-semibold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="w-full border border-gray-300 rounded px-4 py-2 resize-vertical bg-white"
        required
      />

      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 shadow-md"
      >
        Send Message
      </button>

      {status && <p className="text-sm text-green-600">{status}</p>}
    </form>
  );
}
