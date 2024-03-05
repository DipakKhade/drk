import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  console.log(data)
  const user = await prisma.user.findUnique({
    where: {
      email: data.data.email,
    },
  });

  if (user) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(data.data.password, user.password, (err, isValid) => {
        if (err) {
          reject(err);
        }
        if (isValid) {
          resolve(NextResponse.json({success:true, msg: "Login success" }));
        } else {
          resolve(NextResponse.json({success:false, msg: "Invalid credentials" }));
        }
      });
    });
  } else {
    return NextResponse.json({success:false, msg: "Invalid credentials" });
  }
}
