import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  title: "Gyatscript",
  description: " gyatscript is a modern programming language that brings TikTok culture to coding. Built with ❤️ and memes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
