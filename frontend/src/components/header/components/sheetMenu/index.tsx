'use client';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

export default function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger><Menu className='text-[#313131] md:hidden size-7' /></SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
