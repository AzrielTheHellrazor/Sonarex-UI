import Link from "next/link";
import { Logo } from "../brand/Logo";

export const Footer = () => {
  return (
    <footer className="py-8 bg-sonarex-navy border-t border-gray-800">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Logo variant="minimalist" />
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sonarex. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
