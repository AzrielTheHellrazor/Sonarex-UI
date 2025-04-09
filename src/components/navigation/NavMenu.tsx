import Link from "next/link";

export const NavMenu = () => {
  return (
    <nav className="flex items-center space-x-8">
      <Link href="#features" className="text-gray-300 hover:text-white">
        Features
      </Link>
      <Link href="#how-it-works" className="text-gray-300 hover:text-white">
        How It Works
      </Link>
      <Link href="#benefits" className="text-gray-300 hover:text-white">
        Benefits
      </Link>
      <Link href="#waitlist" className="text-gray-300 hover:text-white">
        Join Waitlist
      </Link>
    </nav>
  );
};
