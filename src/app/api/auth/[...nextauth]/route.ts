import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import prisma from "../../../../../prisma/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = nextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      

      async authorize(credentials:any) : Promise<any> {
        
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.username,
          },
        });

        if (user) {
          //get compare hashed password using bcrypt
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
        clientId: process.env.GOOGLE_CLIENT_ID ||'',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        

      }),
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID || '',
        clientSecret: process.env.GITHUB_CLIENT_SECRETE || '',
       
      })
  ],

  secret: process.env.NEXT_AUTH_SECRETE || 'dipakkhadethisisaewljiqwu',
});

export const GET = handler;
export const POST = handler;
