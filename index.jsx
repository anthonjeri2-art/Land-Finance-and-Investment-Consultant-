import { useState } from "react";

export default function HomePage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello, my name is ${form.name}. Phone: ${form.phone}. Message: ${form.message}`;
    const whatsappURL = `https://wa.me/254740117438?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-24 px-6 text-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Luxury Real Estate & Investment Consultancy</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">
          Land investment, finance structuring, and wealth advisory.
        </p>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          We help clients invest in land and real estate with strategic financial guidance.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white shadow">Land Investment</div>
            <div className="p-4 bg-white shadow">Finance Structuring</div>
            <div className="p-4 bg-white shadow">Consultancy</div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center">Contact</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border" />
            <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border" />
            <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full p-2 border" />
            <button className="w-full bg-black text-white py-2">Send via WhatsApp</button>
          </form>
        </div>
      </section>
    </main>
  );
}
