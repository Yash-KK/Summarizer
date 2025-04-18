import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Save Hours of Reading Time?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Transform lengthy documents into clear, actionable insights with
              our AI-powered summarizer.
            </p>
          </div>

          <div className="flex flex-col min-[400px]:flex-row gap-4">
            <Link href="#pricing" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 text-white transition-all duration-300"
              >
                Get Started{" "}
                <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
