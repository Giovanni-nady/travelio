

import "./globals.css";
import Navbar from './../components/Navbar';
import Footer from "./../components/Footer.jsx";


export const metadata = {
  title: "Travelio",
  description: "Travelio travel anywhere anytime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
