"use client";
import clsx from "clsx";
import { useState } from "react";
import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function AuthPage() {
  const [swich, setSwich] = useState(false);
  const swichFunction = () => {
    setSwich(!swich!);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" bg-blue-600 flex flex-col items-center py-4 transition duration-1000">
        <div className="h-30"></div>
        <div className={clsx(`h-40`, { hidden: swich })}></div>
        <Button
          text="ClickMe"
          className="w-50"
          onClick={swichFunction}
        ></Button>
      </div>
      <div className="bg-green-700  flex flex-col items-center py-4 transition duration-1000">
        <div className="h-30"></div>
        <div className={clsx(`h-60`, { hidden: !swich })}></div>
        <Button
          text="ClickMe"
          className="w-50"
          onClick={swichFunction}
        ></Button>
      </div>
    </div>
  );
}
