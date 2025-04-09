// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonarex - The Future of On-chain Intelligence",
  description:
    "Navigate the blockchain ecosystem with precision. Sonarex provides advanced analytics and insights for informed on-chain decision making.",
  keywords: "blockchain, analytics, crypto, onchain, intelligence, data",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        {/* Header Navigation */}
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <span className="font-mono text-xl font-bold">
                  sonarex<span className="text-cyan-400">.</span>
                  <span className="text-cyan-400">xyz</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  href="/research"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Research
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Contact
                </Link>
              </nav>

              {/* Get Early Access Button */}
              <div className="hidden md:flex">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-cyan-900/20 transition-all">
                  Get Early Access
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  className="text-gray-400 hover:text-white focus:outline-none"
                  aria-label="Open menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Normally this would be controlled by state */}
          {/* <div className="md:hidden bg-gray-900 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md">
                About
              </Link>
              <Link href="/products" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md">
                Products
              </Link>
              <Link href="/research" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md">
                Research
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md">
                Contact
              </Link>
              <div className="px-3 py-2">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Get Early Access
                </button>
              </div>
            </div>
          </div> */}
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="flex items-center">
                  <span className="font-mono text-xl font-bold">
                    sonarex<span className="text-cyan-400">.</span>
                    <span className="text-cyan-400">xyz</span>
                  </span>
                </Link>
                <p className="mt-4 text-gray-400 text-sm max-w-md">
                  Navigate the blockchain ecosystem with precision. Advanced
                  analytics and insights for informed on-chain decision making.
                </p>
                <div className="mt-6 flex space-x-6">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="sr-only">Discord</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.39.77-.532 1.152a14.566 14.566 0 0 0-4.334 0 10.04 10.04 0 0 0-.532-1.152.077.077 0 0 0-.079-.036A16.83 16.83 0 0 0 3.692 4.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .03.055c1.969 1.427 3.878 2.295 5.743 2.875a.077.077 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a10.98 10.98 0 0 1-1.552-.73.075.075 0 0 1-.008-.125c.104-.077.208-.158.308-.238a.075.075 0 0 1 .078-.011c3.928 1.78 8.18 1.78 12.062 0a.075.075 0 0 1 .079.012c.1.08.205.16.309.237a.075.075 0 0 1-.006.127c-.5.282-1.022.521-1.553.729a.077.077 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028c1.879-.578 3.788-1.446 5.757-2.873a.077.077 0 0 0 .032-.055c.5-5.094-.853-9.524-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.068-2.157-2.376 0-1.309.956-2.377 2.157-2.377 1.21 0 2.176 1.077 2.157 2.377 0 1.308-.956 2.376-2.157 2.376zm7.975 0c-1.183 0-2.157-1.068-2.157-2.376 0-1.309.955-2.377 2.157-2.377 1.21 0 2.176 1.077 2.157 2.377 0 1.308-.946 2.376-2.157 2.376z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-sm font-bold text-white tracking-wider uppercase">
                  Products
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Signals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      API
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </div>

              {/* More Links */}
              <div>
                <h3 className="text-sm font-bold text-white tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2025 Sonarex. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <button className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </button>
                <span className="mx-2 text-gray-600">|</span>
                <button className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
