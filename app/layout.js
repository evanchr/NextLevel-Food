import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Des plats délicieux, partagés par une communauté d'amateurs de cuisine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
