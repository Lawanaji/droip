import { ArrowRight, Play } from "lucide-react";
import { CustomCard } from "../../components/ui/card";

const HeroSection = () => {
  return (
    <main className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-3xl bg-secondary p-4 mb-6">
              No-Code WordPress Site Builder
            </div>
            <h1 className="text-6xl font-bold leading-tight">
              Break Limits.
              <br />
              Build{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                Anything
              </span>
              .
              <br />
              No Code Needed.
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Droip is a no-code, drag-and-drop WordPress builder that
              simplifies website creation with powerful capabilities.
            </p>
          </div>
          <div>
            <CustomCard className="w-100 h-50 flex items-center justify-center">
              <p>
                Droip is a no-code, drag-and-drop WordPress builder that
                simplifies website creation with powerful capabilities.
              </p>
            </CustomCard>
            <div className="mt-10 flex items-center gap-4">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-purple-700 transition-colors">
                Get started with Droip <ArrowRight className="w-4 h-4" />
              </button>
              <button className="text-purple-600 flex items-center gap-2 hover:text-purple-700">
                Watch Intro <Play className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
