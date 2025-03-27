import Logo from "@/components/logo";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className=" flex flex-col min-h-screen bg-black justify-center items-center ">
      <div className="flex flex-col w-[320px] px-5 py-6 bg-white">
        <h1>Ceva</h1>
        <Logo type="full" size="md" />
      </div>
    </div>
  );
}
