import prisma from "@/db/prisma";
import { LoginSchema } from "@/lib/schemas/auth";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validateData = LoginSchema.safeParse(credentials);
        if (!validateData.success) return null;
        const { email, password } = validateData.data;

        const user = await prisma.user.findFirst({
          where: { email: email },
        });
        if (!user || !user.password || !user.email) return null;

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return null;
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
