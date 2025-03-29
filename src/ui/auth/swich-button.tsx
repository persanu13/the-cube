"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button";

export function SwichButton({
  tab,
  text,
}: {
  tab: "login" | "register";
  text: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleClick() {
    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <Button
      onClick={handleClick}
      className="mt-7"
      variant="secondary"
      text={text}
    />
  );
}
