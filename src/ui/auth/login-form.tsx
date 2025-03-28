"use client";

import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import { useActionState } from "react";

export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <AuthInput
            name="email"
            label="Email"
            placeholder="Enter your email address"
            icon="at"
            required={true}
            type="email"
          />
          <AuthInput
            name="password"
            label="Password"
            placeholder="Enter password"
            icon="key"
            required={true}
            type="password"
          />
        </div>
        <Button className="mt-7" text="LOG IN" showIcon={false} />
      </div>
    </form>
  );
}
