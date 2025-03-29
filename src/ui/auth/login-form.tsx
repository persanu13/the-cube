"use client";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import { useActionState } from "react";
import { authenticate } from "@/auth/authenticate";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
  return (
    <form action={formAction}>
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
        {errorMessage && (
          <div
            className="flex items-center gap-1 px-1 mt-1"
            aria-live="polite"
            aria-atomic="true"
          >
            <ExclamationCircleIcon className="h-5 w-5 text-carnation-600" />
            <p className="text-sm font-inter font-light text-carnation-600">
              {errorMessage}
            </p>
          </div>
        )}
        <Button
          className="mt-7"
          text="LOG IN"
          showIcon={false}
          aria-disabled={isPending}
        />
      </div>
    </form>
  );
}
