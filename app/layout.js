import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Katiyar",
  description: "A skilled full-stack software engineer with expertise in React.js, Next.js, Node.js, Django, and MongoDB. Explore my portfolio to see innovative projects, from web development to competitive coding. Let's create efficient, scalable, and user-friendly solutions together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
