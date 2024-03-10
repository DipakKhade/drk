import { NextRequest } from "next/server";
import prisma from "../../../../prisma/db";

export async function POST(req: NextRequest) {
  const mail = await req.json();
  console.log(mail);
  try {
    await prisma.newslatter.create({
      data: {
        email: mail.data,
      },
    });

    return Response.json({ succes: true });
  } catch (error) {
    return Response.json({ error });
  }
}
