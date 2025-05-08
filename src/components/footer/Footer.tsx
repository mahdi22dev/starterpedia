import Link from "next/link";
import { FaHome, FaBook, FaShieldAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-orange-600 text-white">
      <Card className="bg-transparent shadow-none border-none">
        <CardContent className="container mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
          {/* Top Section: Logo and Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
                Starterpedia
              </h1>
              <p className="text-sm mt-1 text-white/80 max-w-xs mx-auto md:mx-0">
                Your go-to resource for all things starter kits.
              </p>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium">
              <li className="flex items-center gap-2 transition-opacity hover:opacity-90">
                <FaHome />
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2 transition-opacity hover:opacity-90">
                <FaBook />
                <Link href="/resources" className="hover:underline">
                  Resources
                </Link>
              </li>
              <li className="flex items-center gap-2 transition-opacity hover:opacity-90">
                <FaShieldAlt />
                <Link
                  href="https://www.termsfeed.com/live/9e4f92ff-1d04-420b-9f8b-b21de1affb5f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Privacy Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <Separator className="bg-white/30" />

          {/* Bottom Section: Copyright */}
          <div className="text-center text-xs text-white/70">
            &copy; 2024 Starterpedia.com. All rights reserved.
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
