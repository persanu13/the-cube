"use server";

import { signIn } from "@/auth/auth";
import { signOut } from "@/auth/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        case "AccessDenied":
          return "Please verified your email!";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function githubAuth() {
  try {
    await signIn("github");
  } catch (error) {
    if (error instanceof AuthError) {
      return "Github log in failed";
    }
    throw error;
  }
}

export async function logOut() {
  await signOut({ redirectTo: "/auth" });
}
