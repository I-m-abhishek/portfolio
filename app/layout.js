import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Katiyar | Software Engineer & Full-Stack Developer",
  description:
    "Software Engineer specializing in backend development, full-stack applications, and business automation. Building scalable, reliable solutions with Java, Spring Boot, Python, Next.js, and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
