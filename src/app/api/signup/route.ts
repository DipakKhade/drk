import { NextRequest, NextResponse } from "next/server";
import zod from "zod";
import jwt from "jsonwebtoken";
import prisma from "../../../../prisma/db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    const userValidation = zod.object({
      name: zod.string(),
      email: zod.string().email(),
      password: zod.string().min(6),
    });

    const validData = userValidation.safeParse(data.data);
    // console.log(validData)
    // console.log(data)
    if (validData.success) {
      const hashedPassword = await bcrypt.hash(validData.data.password, 10);
      // const token=jwt.sign(validData.data,process.env.JWT_SECRETE)
      const TokenData = {
        name: validData.data.name,
        email: validData.data.email,
        password: hashedPassword,
      };
      const Token = jwt.sign(TokenData, "thisisisamnfsdnkdshkhds");

      const user = await prisma.user.create({
        data: {
          name: validData.data.name,
          email: validData.data.email,
          password: hashedPassword,
          token: Token,
        },
      });

      return NextResponse.json({
        succes: true,
        user,
        Token,
        username: validData.data.name,
      });
    }

    return NextResponse.json({ message: "enter valid details" });
  } catch (error) {
    return;
  }
}
