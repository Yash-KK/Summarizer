"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function StripeToast() {
  useEffect(() => {
    toast.info(
      <div className="text-white">
        <div className="text-lg font-semibold mb-1">🚧 Stripe Integration</div>
        <div className="text-sm">
          Still in progress. You can use:
          <div className="mt-2 space-y-1">
            <div>
              <span className="font-medium text-gray-300">Username:</span>{" "}
              <code className="bg-gray-800 px-1 py-0.5 rounded text-gray-100">
                yashkharche
              </code>
            </div>
            <div>
              <span className="font-medium text-gray-300">Password:</span>{" "}
              <code className="bg-gray-800 px-1 py-0.5 rounded text-gray-100">
                hcajersey1949
              </code>
            </div>
          </div>
        </div>
      </div>,
      {
        duration: 7000,
        position: "bottom-right",
        style: {
          background: "#1f2937",
          border: "1px solid #374151",
          color: "#f9fafb",
        },
      }
    );
  }, []);

  return null;
}
