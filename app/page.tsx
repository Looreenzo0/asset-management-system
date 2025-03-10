"use client";

import { useEffect, useState } from "react";
import AppHeader from "./AppHeader/AppHeader";
import { Card } from "@/components/ui/card";
import AppTable from "./AppTable/AppTable";
import { useTheme } from "next-themes";
import { DeleteDialog } from "./DeleteDialog";
import React from "react";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-50";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`poppins p-2 ${bgColor} w-full min-h-screen`}>
      <Card className="flex flex-col shadow-lg border-none p-4">
        <DeleteDialog />
        <AppHeader />
        <AppTable />
      </Card>
    </div>
  );
}
