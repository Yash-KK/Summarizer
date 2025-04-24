import { Pizza } from "lucide-react";
import { MotionH3 } from "../common/motion-wrapper";
import SummaryView from "../summaries/summary_viewer";
import { DEMO_SUMMARY } from "@/utils/constants";

const DemoSection = () => {
  console.log(DEMO_SUMMARY);
  return (
    <section className="relative w-full bg-white">
      <div className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-yellow-200 via-pink-300 to-rose-400 shadow-md animate-spin-slow">
            <Pizza className="w-6 h-6 text-rose-600" />
          </div>

          <MotionH3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 max-w-4xl"
          >
            <span className="block">Tired of Endless Scrolling?</span>
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Let AI Slice Through the Fluff 🍕
            </span>
          </MotionH3>

          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6 mt-4">
            <SummaryView summary={DEMO_SUMMARY} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
