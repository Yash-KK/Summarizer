import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative z-0 flex flex-col items-center justify-center w-full px-4 py-20 sm:py-24 lg:py-32 max-w-7xl mx-auto text-center">
      <div className="mb-6">
        <div className="inline-flex items-center p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <div className="flex items-center px-4 py-1.5 text-sm font-medium bg-white rounded-full transition-colors duration-200 group-hover:bg-gray-50">
            <Sparkles className="h-5 w-5 mr-2 text-rose-600 animate-pulse" />
            <span className="text-sm text-rose-600">Powered by AI</span>
          </div>
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
        Transform PDFs into{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span
            className="absolute inset-0 bg-rose-200/60 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
        summaries
      </h1>

      <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
        Get a beautiful summary reel of the document in seconds.
      </p>

      <Button
        asChild
        variant="default"
        className="rounded-full px-8 sm:px-10 lg:px-12 py-4 text-base sm:text-lg lg:text-xl flex items-center gap-2"
      >
        <Link href="/#pricing">
          <span>Try Summarize</span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </section>
  );
};

export default HeroSection;
