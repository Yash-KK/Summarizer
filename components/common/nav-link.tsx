"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  const pathName = usePathname();
  const isActive = pathName === href || pathName.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500",
        className,
        isActive && "text-red-500"
      )}
    >
      {children}
    </Link>
  );
};
export default NavLink;
