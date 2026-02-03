"use client"
import { useState } from "react"
import { Menu } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "./NavLinks";


const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className="lg:hidden">
         <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
               <Button variant="ghost">
                  <Menu className="size-6" />
               </Button>
            </SheetTrigger>
            <SheetContent>
               <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
               </SheetHeader>

               <nav className="px-4">
                  <ul className="flex flex-col gap-4">
                     <SignedIn>
                        <NavLinks isSignedIn
                           closeSidebar={() => setIsOpen(false)}
                        />
                     </SignedIn>

                     <SignedOut>
                        <NavLinks isSignedIn={false}
                           closeSidebar={() => setIsOpen(false)}
                        />
                     </SignedOut>
                  </ul>
               </nav>
            </SheetContent>
         </Sheet>
      </div>
   )
}

export default MobileNav