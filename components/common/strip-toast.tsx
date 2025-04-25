"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function StripeToast() {
  useEffect(() => {
    toast.info(
      <>
        <div>🚧 Stripe integration is still in progress.</div>
        <div className="text-sm mt-1">
          Use <code>username: yashkharche</code> &nbsp;
          <code>password: hcajersey1949</code>
        </div>
      </>,
      {
        duration: 10000,
        position: "top-right",
      }
    );
  }, []);

  return null;
}
