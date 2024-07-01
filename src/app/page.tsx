'use client';

import { useEffect, useState } from 'react';
import Providers from './providers';
import ThemeSwitch from '@/components/panel/ThemeSwitch';
import Sidebar from '@/components/sidebar/sidebar';
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import RootLayout from './rootLayout';

const inter = Inter({ subsets: ["latin"] });
export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // ou um loader, se preferir
  }

  return (
    <main>
      <RootLayout>
        {children}
      </RootLayout>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Your Name</h1>
            <p>Your expertise</p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}