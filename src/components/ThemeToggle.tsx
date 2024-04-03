"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <Switch onClick={toggleTheme} id="theme-toggle" />
        {/* <Label htmlFor="theme-toggle">{currentTheme}</Label> */}
      </div>
    </>
  );
}
