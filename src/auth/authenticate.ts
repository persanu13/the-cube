"use server";

import { signIn } from "@/auth/auth";
import { signOut } from "@/auth/auth";
import { AuthError } from "next-auth";

export async function githubAuth() {
  await signIn("github");
}

export async function logOut() {
  await signOut();
}
