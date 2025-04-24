import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <FileText className="w-6 h-6 text-rose-500" />
          <span className="font-bold text-lg text-gray-900">Summarize</span>
        </div>

        <p className="text-xs text-gray-600">
          © 2025 Summarize. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
