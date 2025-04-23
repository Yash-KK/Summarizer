import { FileText } from "lucide-react";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import PlanBadge from "./plan-badge";
const Header = () => {
  return (
    <nav
      className="flex items-center justify-between py-4 lg:px-8 px-2 mx-auto max-w-screen-xl"
      aria-label="Site Navigation"
    >
      <div className="flex flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="w-5 h-5 text-gray-900" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Summarize
          </span>
        </NavLink>
      </div>

      <div className="lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing" className="mr-2">
          Pricing
        </NavLink>
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Uplaod a PDF</NavLink>
            <PlanBadge />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>
      </div>

      <SignedOut>
        <NavLink href="/sign-in">Sign In</NavLink>
      </SignedOut>
    </nav>
  );
};

export default Header;
