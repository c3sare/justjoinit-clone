import "./globals.css";
import Navigation from "./components/Navigation";
import Providers from "../providers";

export const metadata = {
  title: "Just Join IT: #1 Job Board for tech industry in Europe",
  description: "#1 Job Board for tech industry in Europe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
