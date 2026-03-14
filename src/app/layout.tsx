"use client";

import { useState } from "react";
import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <header>
          <div className="flex items-center justify-between">
            <nav className="hidden lg:block flex">
              <Link href="/">Home</Link>
              <Link href="/tutorials">Tutorials</Link>
              <Link href="/career-journal">Career Journal</Link>
            </nav>
            <div className="lg:hidden">
              <button
                id="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <h1>Olympian Free Press</h1>
          </div>
          {mobileMenuOpen && (
            <nav id="mobile-menu" className="lg:hidden flex flex-col items-center space-y-2 *:px-3 *:py-1 *:m-1 p-3">
              <Link href="/">Home</Link>
              <Link href="/tutorials">Tutorials</Link>
              <Link href="/career-journal">Career Journal</Link>
            </nav>
          )}
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div>
            &copy; {new Date().getFullYear()} Zeus Zaragoza-Gildo. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
