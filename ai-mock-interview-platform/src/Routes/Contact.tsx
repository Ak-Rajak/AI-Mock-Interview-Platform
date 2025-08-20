import Containers from "@/components/Containers";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const socials = [
  { href: "https://facebook.com", icon: <Facebook className="text-blue-500" /> },
  { href: "https://twitter.com", icon: <Twitter className="text-blue-400" /> },
  { href: "https://instagram.com", icon: <Instagram className="text-pink-500" /> },
  { href: "https://linkedin.com", icon: <Linkedin className="text-blue-700" /> },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add your API call here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-gray-100 py-16">
      <Containers>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Reach out for support, feedback, or partnership opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-500" />
                <span>support@ai-mock-interview.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-500" />
                <span>123 AI Street, Tech City, 12345</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Contact Form */}
          <form
            className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-emerald-700 mb-2">Send a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-xl shadow hover:scale-105 transition-transform"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </Button>
            {submitted && (
              <p className="text-emerald-600 font-medium mt-2">Thank you for reaching out! We'll get back to you soon.</p>
            )}
          </form>
        </div>
      </Containers>
    </div>
  );
};

export default ContactPage;