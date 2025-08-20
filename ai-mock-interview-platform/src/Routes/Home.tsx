import Containers from "@/components/Containers";
import MarqueImg from "@/components/marquee-img";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ShieldCheck, Brain, Users, BarChart } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    title: "Secure & Private",
    desc: "Your data is protected and never shared. Practice interviews with peace of mind.",
  },
  {
    icon: <Brain className="w-8 h-8 text-emerald-500" />,
    title: "AI-Powered Insights",
    desc: "Get instant feedback and personalized tips to improve your interview skills.",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-500" />,
    title: "Real-World Scenarios",
    desc: "Practice with questions tailored to your role and experience level.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-emerald-500" />,
    title: "Progress Tracking",
    desc: "Monitor your growth and see how you improve over time.",
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col w-full pb-24 bg-gradient-to-br from-white via-emerald-50 to-gray-100 min-h-screen">
      {/* Animated SVG background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Place your SVG or animated background here */}
      </div>
      <Containers>
        {/* Hero Section */}
        <section className="my-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-emerald-700">
              <span className="block text-outline mb-2 animate-fade-in">AI Superpower</span>
              <span className="block text-gray-700 animate-slide-in">A better way to</span>
              <span className="block text-emerald-500 animate-slide-in">improve your interview chances and skills</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground animate-fade-in">
              Boost your interview skills and increase your success rate with AI-driven insights. Discover a smarter way to prepare, practise, and stand out.
            </p>
            <Link to="/generate">
              <Button
                size="lg"
                className="mt-6 shadow-lg bg-gradient-to-r from-emerald-600 to-emerald-400 hover:scale-105 transition-transform duration-200 text-white px-8 py-4 rounded-xl text-lg flex items-center gap-2"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="flex-1 relative group">
            <img
              src="assets/img/hero.jpg"
              alt="Interview Hero"
              className="w-full h-[420px] object-cover rounded-2xl shadow-xl border-4 border-emerald-100 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-6 left-6 px-4 py-2 rounded-lg bg-white/70 backdrop-blur-md shadow-md text-emerald-700 font-semibold animate-fade-in">
              Interviews Copilot&copy;
            </div>
            <div className="hidden md:block absolute bottom-6 right-6 w-80 px-6 py-4 rounded-lg bg-white/80 backdrop-blur-md shadow-lg animate-fade-in">
              <h2 className="text-neutral-800 font-bold text-xl mb-2">Developer</h2>
              <p className="text-sm text-muted-foreground mb-3">
                Practice with real AI-powered questions and get instant feedback.
              </p>
              <Link to="/generate">
                <Button variant="outline" className="w-full hover:bg-emerald-50 transition-colors">
                  Generate <Sparkles className="ml-2 text-emerald-500" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Containers>

      {/* Marquee Section */}
      <div className="w-full my-12">
        <Marquee pauseOnHover className="bg-white/60 py-3 rounded-lg shadow">
          <MarqueImg img="assets/img/logo/firebase.png" />
          <MarqueImg img="assets/img/logo/meet.png" />
          <MarqueImg img="assets/img/logo/zoom.png" />
          <MarqueImg img="assets/img/logo/firebase.png" />
          <MarqueImg img="assets/img/logo/microsoft.png" />
          <MarqueImg img="assets/img/logo/meet.png" />
          <MarqueImg img="assets/img/logo/tailwindcss.png" />
          <MarqueImg img="assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      {/* Features Section */}
      <Containers className="py-12 space-y-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-emerald-700 mb-8 animate-fade-in">
          Unleash your potential with personalized AI insights and targeted interview practice.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-3 flex items-center justify-center">
            <img
              src="/assets/img/office.jpg"
              alt="Office"
              className="w-full max-h-96 rounded-xl object-cover shadow-lg border-2 border-emerald-100 animate-fade-in"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center gap-8 bg-white/80 rounded-xl shadow-lg p-8">
            <p className="text-lg text-muted-foreground animate-fade-in">
              Transform the way you prepare, gain confidence, and boost your chances of landing your dream job. Let AI be your edge in today's competitive job market.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors shadow group"
                >
                  {feature.icon}
                  <h3 className="mt-2 font-semibold text-emerald-700">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/generate" className="w-full">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-400 hover:scale-105 transition-transform duration-200 text-white rounded-xl shadow"
              >
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Containers>
    </div>
  );
};

export default HomePage;
// ...existing code...