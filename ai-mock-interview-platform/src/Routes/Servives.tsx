import Containers from "@/components/Containers";
import { Button } from "@/components/ui/button";
import { Briefcase, BookOpen, Users, Sparkles } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
    title: "Interview Preparation",
    desc: "Practice with AI-generated questions, real-time feedback, and mock interviews tailored to your role.",
    link: "/services/interview-prep",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
    title: "Resume Building",
    desc: "Get expert tips and AI-powered suggestions to craft a standout resume for your dream job.",
    link: "/services/resume-building",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-500" />,
    title: "Career Coaching",
    desc: "Connect with experienced mentors for personalized career guidance and interview strategies.",
    link: "/services/career-coaching",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-gray-100 py-16">
      <Containers>
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-700 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock your full potential with our suite of AI-powered career services. Whether you’re preparing for interviews, building your resume, or seeking expert coaching, we’re here to help you succeed.
          </p>
        </section>

        {/* Service Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow group"
            >
              {service.icon}
              <h3 className="mt-4 font-bold text-xl text-emerald-700">{service.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-6 text-center">{service.desc}</p>
              <Link to={service.link} className="w-full">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full hover:bg-emerald-50 transition-colors"
                >
                  Learn More <Sparkles className="ml-2 text-emerald-500" />
                </Button>
              </Link>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center mt-12">
          <h2 className="text-2xl md:text-4xl font-bold text-emerald-700 mb-4">
            Ready to boost your career?
          </h2>
          <Link to="/generate">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-xl shadow hover:scale-105 transition-transform"
            >
              Get Started
            </Button>
          </Link>
        </section>
      </Containers>
    </div>
  );
};

export default ServicesPage;