import { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";

import { Theme } from "@radix-ui/themes";

import { MainProvider } from "./providers";
export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Trial Project for Issue Tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <MainProvider>
            <div>
              <Navbar />
              <div className="px-2">{children}</div>
            </div>
          </MainProvider>
        </Theme>
      </body>
    </html>
  );
}
