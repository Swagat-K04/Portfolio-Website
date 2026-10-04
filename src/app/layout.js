import "./globals.css";

export const metadata = {
  title: "Swagat Khodkumbhe | Software Engineer (Systems & FinTech)",
  description:
    "Software Engineer at Pine Labs specializing in ISO 8583 payment rails, C++20 high-throughput memory engines, and real-time Kafka distributed pipelines. IIIT Nagpur CSE (CGPA 8.60).",
  openGraph: {
    title: "Swagat Khodkumbhe | Software Engineer",
    description:
      "Engineering low-latency payment rails, C++20 memory engines, and real-time distributed systems.",
    url: "https://swagat-portfolio-website.vercel.app/",
    siteName: "Swagat Khodkumbhe Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
