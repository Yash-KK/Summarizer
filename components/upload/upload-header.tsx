import { Sparkles } from "lucide-react";

const UploadHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <div className="mb-6">
        <div className="inline-flex items-center p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <div className="flex items-center px-4 py-1.5 text-sm font-medium bg-white rounded-full transition-colors duration-200 group-hover:bg-gray-50">
            <Sparkles className="h-5 w-5 mr-2 text-rose-600 animate-pulse" />
            <span className="text-sm text-rose-600">
              AI-Enhanced Document Insights
            </span>
          </div>
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
        Summarize Your{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">PDFs</span>
          <span
            className="absolute inset-0 bg-rose-200/60 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
        in Seconds
      </h1>

      <div className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
        <p>
          Upload any PDF and instantly get a clean, easy-to-read summary—
          powered by AI and optimized for clarity.
        </p>
      </div>
    </div>
  );
};

export default UploadHeader;
