"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import React from "react";

const navigationItems = [
  { href: "/card", label: "Card" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/reviews", label: "Reviews" },
  { href: "/support", label: "Support" },
  { href: "/app", label: "App" },
  { href: "/who-we-are", label: "Who we are" },
];

function Header() {
  return (
    <div className="flex justify-between items-center h-20">
      <div className="px-6">Aven Logo</div>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:flex justify-center items-center h-16">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-4 py-2 hover:underline text-md"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button - Visible only on mobile */}
      <div className="md:hidden px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Aven</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              {navigationItems.map((item) => (
                <div>
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-6 py-3 text-md hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                  <Separator className="mt-3 mx-4" />
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="/signin"
                  className="px-6 text-md hover:bg-gray-100 rounded-md transition-colors block"
                >
                  Sign In
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sign In - Hidden on mobile */}
      <div className="hidden md:block px-6">Sign In</div>
    </div>
  );
}

export default Header;
