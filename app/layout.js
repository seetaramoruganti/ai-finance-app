import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: "AI Wallet",
  description: "AI powered finance app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          <main className="min-h-screen ">{children}</main>
          {/* footer  */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center">
              <p>Made for Educational Practice 📚 and to lose some time ⏰ </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
