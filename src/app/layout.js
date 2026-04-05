import "./globals.css";

export const metadata = {
  title: "Swagat Khodkumbhe | Software Engineer",
  description: "Backend systems, distributed infrastructure, real-time ML pipelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
