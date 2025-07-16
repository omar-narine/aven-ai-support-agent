"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center h-16">
      <div>Aven Logo</div>
      <div className="flex justify-center items-center h-16">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/card"
                className="px-4 py-2 hover:underline"
              >
                Card
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/how-it-works"
                className="px-4 py-2 hover:underline"
              >
                How it works
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/reviews"
                className="px-4 py-2 hover:underline"
              >
                Reviews
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/support"
                className="px-4 py-2 hover:underline"
              >
                Support
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/app"
                className="px-4 py-2 hover:underline"
              >
                App
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/who-we-are"
                className="px-4 py-2 hover:underline"
              >
                Who we are
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>Sign In</div>
    </div>
  );
}

export default Header;
