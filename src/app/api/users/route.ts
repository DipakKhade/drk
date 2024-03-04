import { NextRequest ,NextResponse} from "next/server";
import zod from 'zod';
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'


interface userData{
    name :string,
    email:string,
    password:string
}

const prisma=new PrismaClient({log:['query',"info","error"]})

export async function POST(req: NextRequest, res: NextResponse){
    const data = await req.json()
    const userValidation=zod.object({
        name:zod.string(),
        email:zod.string().email(),
        password:zod.string().min(6)
    })
    
    const validData=userValidation.safeParse(data)
    
    if(validData.success){
    const hashedPassword= await bcrypt.hash(validData.data.password,10)

 const user=await prisma.user.create({
   data:{
    name:validData.data.name,
    email:validData.data.password,
    password:hashedPassword
   }
 })
    console.log(user)
// const token=jwt.sign(validData.data,process.env.JWT_SECRETE)
const token=jwt.sign(validData.data,'thisisisamnfsdnkdshkhds')
return NextResponse.json({token})
}

    return NextResponse.json({message:'enter valid details'})

}