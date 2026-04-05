import "./globals.css";

export const metadata = {
  title: "Swagat Khodkumbhe | Portfolio",
  description: "Full-stack developer | ML enthusiast | Projects, skills, and experience",
  openGraph: {
    title: "Swagat Khodkumbhe Portfolio",
    description: "Explore my projects, skills, and experience",
    url: "https://swagat-portfolio-website.vercel.app/",
    siteName: "Swagat Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
