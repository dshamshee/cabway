"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function NavigationBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "About",
      link: "#about",
    },
    // {
    //   name: "Fleet",
    //   link: "#fleet",
    // },
    // {
    //   name: "Trips",
    //   link: "#bookings-showcase",
    // },
    {
      name: "Booking",
      link: "#booking",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Button
              type="button"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="inline-flex items-center justify-center rounded-full cursor-pointer  bg-background text-foreground transition hover:bg-accent"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            {/* <NavbarButton variant="primary" href="#booking">Book a Cab</NavbarButton> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-border bg-background text-sm font-medium text-foreground transition hover:bg-accent"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
              
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="#booking"
              >
                Book a Cab
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}

      {/* Navbar */}
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <div className="container mx-auto p-8 pt-24">
//       <h1 className="mb-4 text-center text-3xl font-bold">
//         Check the navbar at the top of the container
//       </h1>
//       <p className="mb-10 text-center text-sm text-zinc-500">
//         For demo purpose we have kept the position as{""}
//         <span className="font-medium">Sticky</span>. Keep in mind that this
//         component is <span className="font-medium">fixed</span> and will not
//         move when scrolling.
//       </p>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//         {[
//           {
//             id: 1,
//             title: "The",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 2,
//             title: "First",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 3,
//             title: "Rule",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 4,
//             title: "Of",
//             width: "md:col-span-3",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 5,
//             title: "F",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 6,
//             title: "Club",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 7,
//             title: "Is",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 8,
//             title: "You",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 9,
//             title: "Do NOT TALK about",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 10,
//             title: "F Club",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//         ].map((box) => (
//           <div
//             key={box.id}
//             className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
//           >
//             <h2 className="text-xl font-medium">{box.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
