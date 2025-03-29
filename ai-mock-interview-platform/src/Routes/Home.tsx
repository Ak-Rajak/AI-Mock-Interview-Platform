import Containers from "@/components/Containers";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee"

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Containers>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className=" text-outline font-extrabold md:text-8xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold">
              - A better way to
            </span>
            <br />
            improve your interview chances and skills
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Boost your interview skills and increase you success rate with
            AI-driven insights. Discover a smarter way to prepare, practise, and
            stand out.
          </p>
        </div>

        {/* Image section */}
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="assets/img/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Inteviews Copilot&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold ">
              Developer
            </h2>
            <p className="text-sm text-neutarl-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <Button className="mt-3">
              Generate <Sparkles/>
            </Button>
          </div>
        </div>
      </Containers>

      {/* margquee section */}
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <img src="" alt="Marquee Image" className="h-12 w-12 object-contain mx-2" />
        </Marquee>
      </div>
    </div>
  );
};

export default HomePage;
