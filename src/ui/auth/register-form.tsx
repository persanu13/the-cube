"use client";

import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import { useActionState } from "react";

export default function RegisterForm() {
  return (
    <form>
      <div className="flex flex-col mt-3">
        <div className="flex flex-col gap-2">
          <AuthInput
            name="name"
            label="Name"
            placeholder="Enter your name"
            icon="user"
            required={true}
            type="text"
          />
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
            placeholder="Enter your password"
            icon="key"
            required={true}
            type="password"
          />
          <AuthInput
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm your password"
            icon="key"
            required={true}
            type="password"
          />
        </div>
        <Button className="mt-7" text="CREATE ACCOUNT" showIcon={false} />
      </div>
    </form>
  );
}
