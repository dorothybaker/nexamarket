"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="font-semibold text-3xl md:text-4xl">
            Nexa<span className="text-primary">Market</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, id) => (
            <div key={id}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-primary"
                    : "text-gray-600 transition duration-100 hover:text-primary"
                } text-lg font-semibold uppercase`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            onClick={() => handleCartClick()}
            variant={"outline"}
            className="flex flex-col gap-y-1 h-12 w-12 sm:h-16 sm:w-16 md:w-20 md:h-17 rounded-none"
          >
            <ShoppingBag />
            <span className="text-xs font-semibold hidden sm:block text-gray-500">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
