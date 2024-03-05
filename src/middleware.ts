import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { headers } from 'next/headers'
import axios from 'axios'


export const config = {
  matcher: '/blogs/:path*',
}

export async function middleware(req: NextRequest) {
//   const headersList = headers()
//   const Token=headersList.get('token')


//   if (!Token) {
//     return NextResponse.redirect(new URL('/blogs', req.url));
//   }


//   console.log(Token)
// console.log('control is here')

//  const user= await axios.post('/api/user?token=${Token.jwtToken}',{
//     data:Token
//   })

//   if (user.data) {
//     return NextResponse.redirect(new URL('/explore', req.url));
//   }


// return NextResponse.redirect(new URL('/', req.url))
return;
}
 
