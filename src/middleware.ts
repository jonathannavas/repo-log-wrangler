import { NextResponse, NextRequest } from "next/server"
import log from "@/utils/log"
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  log.info("modo info, estoy en el middleware url", request.url)
  return NextResponse.next()
}

export const config = {
  matcher: "/",
}
