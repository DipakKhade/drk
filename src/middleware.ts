import { headers } from 'next/headers'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



export function middleware(request: NextRequest) {
  console.log('control is in the middleware')
  // const headersList = headers()
  // const referer = headersList.get('token')
  // console.log(referer)
  // return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: '/blogs/:path*',
}