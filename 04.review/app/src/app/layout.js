import "./globals.css";

export const metadata = {
  title: "Steve Review — SDA Administration & Special Situations Report 2026",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
