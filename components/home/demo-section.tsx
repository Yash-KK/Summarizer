import { Pizza } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="relative w-full bg-white dark:bg-zinc-950">
      <div className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-gray-100 dark:bg-zinc-900 border border-gray-300/40 dark:border-zinc-700/60 shadow-sm">
            <Pizza className="w-6 h-6 text-rose-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white leading-tight max-w-4xl">
            <span className="block">No More Skimming —</span>
            <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
              Get to the Point
            </span>{" "}
            with AI-Powered PDF Summaries
          </h2>

          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* Summary Viewer */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
