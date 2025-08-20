import Containers from "@/components/Containers";
import { Users, Award, HeartHandshake, Lightbulb } from "lucide-react";

const teamMembers = [
  {
    name: "Akash Rajak",
    role: "Founder & Lead Developer",
    img: "/assets/img/RohanFRajak.jpeg", // Add your team images in public/assets/img/team/
    bio: "Passionate about AI and empowering job seekers with smart interview tools.",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer",
    img: "/assets/img/PriyaSharma.jpeg",
    bio: "Designs intuitive, beautiful interfaces for seamless user experiences.",
  },
  {
    name: "Rahul Verma",
    role: "AI Engineer",
    img: "/assets/img/Rahul.jpeg",
    bio: "Builds intelligent feedback systems to help users grow and succeed.",
  },
];

const values = [
  {
    icon: <Award className="w-8 h-8 text-emerald-500" />,
    title: "Excellence",
    desc: "We strive for the highest standards in everything we build.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-emerald-500" />,
    title: "Empathy",
    desc: "We care deeply about our users and their success.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-emerald-500" />,
    title: "Innovation",
    desc: "We use AI and modern tech to solve real interview challenges.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-gray-100 py-16">
      <Containers>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-700 mb-4">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground">
              We’re on a mission to revolutionize interview preparation with AI-powered insights, real-time feedback, and a supportive community. Our platform helps you practice, improve, and land your dream job.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Users className="w-8 h-8 text-emerald-500" />
              <span className="font-semibold text-emerald-700">1000+ users empowered</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/assets/img/hero.jpg"
              alt="About AI Mock Interview"
              className="w-full max-w-md rounded-2xl shadow-xl border-4 border-emerald-100 object-cover"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-emerald-700 mb-8">
            Our Mission
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            To make interview preparation accessible, personalized, and effective for everyone. We believe in the power of technology to unlock human potential and help you shine in every interview.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-emerald-700 mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors shadow group"
              >
                {value.icon}
                <h3 className="mt-2 font-semibold text-emerald-700">{value.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 text-center">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-emerald-700 mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-100"
                />
                <h3 className="font-bold text-lg text-emerald-700">{member.name}</h3>
                <span className="text-sm text-muted-foreground mb-2">{member.role}</span>
                <p className="text-sm text-center text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </Containers>
    </div>
  );
};

export default AboutPage;

