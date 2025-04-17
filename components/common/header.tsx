import { FileText } from "lucide-react";
import NavLink from "./nav-link";

const Header = () => {
  const isLoggedIn = false;

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

      <ul className="hidden lg:flex gap-8 items-center list-none">
        <li>
          <NavLink href="/#pricing" className="hover:underline">
            Pricing
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink href="/dashboard" className="hover:underline">
              Your Summaries
            </NavLink>
          </li>
        )}
      </ul>

      <div className="flex flex-1 justify-end">
        {isLoggedIn ? (
          <NavLink href="/dashboard" className="hover:underline">
            Dashboard
          </NavLink>
        ) : (
          <NavLink href="/sign-in" className="hover:underline">
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
