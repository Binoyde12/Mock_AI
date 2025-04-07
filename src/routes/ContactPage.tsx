import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
