import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import prisma from "../../../../../prisma/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";

const handler = nextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },

      async authorize(credentials:any) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.username,
          },
        });

        if (user) {
          console.log("control is at prisma user find");
          if (credentials.password === user.password) {
            return {
              name: user.name,
              email: user.email,
            };
          }

          // console.log(user)
        } else {
          return null;
        }
      },
    }),

    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],

  secret: process.env.NEXT_AUTH_SECRETE,
});

export const GET = handler;
export const POST = handler;