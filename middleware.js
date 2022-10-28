/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse} from "next/server"





export async function middleware(request) {
  if (request.headers.get("user-agent").match(/(iPhone|iPod|iPad|Android|BlackBerry)/) &&
  !request.nextUrl.pathname.startsWith('/mobile')) {

    return NextResponse.redirect(new URL('/mobile', request.url))

  } else if (!request.headers.get("user-agent").match(/(iPhone|iPod|iPad|Android|BlackBerry)/) &&
  request.nextUrl.pathname.startsWith('/mobile')) {

    return NextResponse.redirect(new URL('/', request.url))

  } else {

    return

  }
}

export const config = {
  matcher: ["/", "/about", "/mobile"],
}