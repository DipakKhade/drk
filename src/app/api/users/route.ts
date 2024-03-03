import { NextRequest ,NextResponse} from "next/server";
import zod from 'zod';
import jwt from 'jsonwebtoken'

interface userData{
    name :string,
    email:string,
    password:string
}
export async function POST(req: NextRequest, res: NextResponse){
    //sending token to user
    const data = await req.json()
    // console.log(data)
const userValidation=zod.object({
    name:zod.string(),
    email:zod.string().email(),
    password:zod.string().min(6)
})

const validData=userValidation.safeParse(data.data)
// console.log(validData)

if(validData.success){
    const token=jwt.sign(validData.data,'thisisisamnfsdnkdshkhds')
    return NextResponse.json({token})
}

    return NextResponse.json({message:'enter valid details'})

}