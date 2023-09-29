"use client";
import { Content, Sidebar } from "@/components";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [open, setOpen] = useState(true);
  return (
    <main className="flex ">
      {/* sidebar */}

      <Sidebar />
      {/* main body */}
      <div className="flex-1">
        <Content />
      </div>
    </main>
  );
}
