import {
  handleCheckoutSessionCompleted,
  handleSubscriptionDeleted,
} from "@/lib/payments";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: NextRequest) => {
  const payload = await req.text();

  const sig = req.headers.get("stripe-signature");
  let event;

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  try {
    event = stripe.webhooks.constructEvent(payload, sig!, endpointSecret);
    switch (event.type) {
      case "checkout.session.completed":
        console.log("CHECKOUT SESSION COMPLETED -> BEGIN");
        const sessionId = event.data.object.id;
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
          expand: ["line_items"],
        });
        console.log("CHECKOUT SESSION COMPLETED -> END");
        await handleCheckoutSessionCompleted({ session, stripe });
        break;

      case "customer.subscription.deleted":
        console.log("DELETED: CUSTOMER SUBSCRIPTION DELETED");
        const subscriptionId = event.data.object.id;

        await handleSubscriptionDeleted({ subscriptionId, stripe });
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err) {
    console.log("err: ", err);
    return NextResponse.json(
      { error: "Failed to trigger web hook", err },
      { status: 400 }
    );
  }
  return NextResponse.json({
    status: "success",
  });
};
