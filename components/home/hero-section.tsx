import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionSection,
  MotionSpan,
} from "../common/motion-wrapper";
import {
  buttonVariants,
  containerVariants,
  itemVariants,
} from "@/utils/constants";

const HeroSection = () => {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-0 flex flex-col items-center justify-center w-full px-4 py-20 sm:py-24 lg:py-32 max-w-7xl mx-auto text-center"
    >
      <MotionDiv variants={itemVariants} className="mb-6">
        <div className="inline-flex items-center p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-yellow-300 via-pink-400 to-rose-500 animate-gradient-x group shadow-md">
          <div className="flex items-center px-4 py-1.5 text-sm font-medium bg-white rounded-full transition-colors duration-200 group-hover:bg-gray-100">
            <Sparkles className="h-5 w-5 mr-2 text-pink-500 animate-bounce" />
            <span className="text-sm text-pink-600">AI Magic Inside</span>
          </div>
        </div>
      </MotionDiv>

      <MotionH1
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4"
      >
        Instantly turn{" "}
        <span className="relative inline-block">
          <MotionSpan
            whileHover={buttonVariants}
            className="relative z-10 px-2 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent"
          >
            bulky PDFs
          </MotionSpan>
        </span>{" "}
        into stunning summaries
      </MotionH1>

      <MotionH2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
        Create visually rich summaries in seconds – perfect for sharing, studying, or saving time.
      </MotionH2>

      <Button
        asChild
        variant="default"
        className="rounded-full px-8 sm:px-10 lg:px-12 py-4 text-base sm:text-lg lg:text-xl flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-lg hover:from-pink-600 hover:to-yellow-600 transition"
      >
        <Link href="/#pricing">
          <span>Try It Out</span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </MotionSection>
  );
};

export default HeroSection;
