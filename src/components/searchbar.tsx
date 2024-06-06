'use client';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import { useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function SearchBar({blogsTitle}:any) {
  const [isActive,setisActive]=useState<any>(false)
  return (
    <Command className="rounded-lg border shadow-md">
     
      <CommandInput
       onFocus={() => setisActive(true)} 
       onBlur={() => setisActive(false)}
       placeholder="Type a command or search..." />
      
{ isActive ?   <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">

{
  blogsTitle.map(function(title:string,index:number){
    <CommandItem key={index}>
    <Calendar className="mr-2 h-4 w-4" />
    <span>{title}</span>
  </CommandItem>
  })
}
        

          {/* <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem> */}
        </CommandGroup>
        <CommandSeparator />
        {/* <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup> */}
      </CommandList>   :''}
     
    </Command>
  )
}
