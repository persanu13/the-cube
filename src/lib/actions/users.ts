"use server";

import prisma from "@/db/prisma";
import { State } from "@/lib/types";
import { RegisterSchema } from "@/lib/schemas/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

export async function registerUser(prevState: State, formData: FormData) {
  const validatedFields = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed",
    };
  }
  const { name, email, password } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (existingUser) {
      return {
        message: "Registration failed",
        errors: {
          email: ["User with this email already exists"],
        },
      };
    }
    const hashedPassword = await hash(password, 10);
    await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to register user.",
      errors: {
        db: ["An unexpected error occurred. Please try again."],
      },
    };
  }
  revalidatePath("/admin/users");
  redirect("/auth");
}

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await prisma.account.findFirst({
      where: {
        userId: userId,
      },
    });
    return account;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};
