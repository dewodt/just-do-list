import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function middleware(
  req: NextRequest,
) {
  const cookies = req.cookies.get("Login-JustDoList");
  const reqUrl = req.url;
  if (!cookies) {
    if (reqUrl !== "http://localhost:3000/") {
      return NextResponse.rewrite("http://localhost:3000/")
    }
  } else {
    const pages = ["tasks", "today", "important", "planned", "notes", "about", ]
    if (pages.some(word => reqUrl.includes(word))) {
      return NextResponse.rewrite(reqUrl)
    } else {
      return NextResponse.rewrite("http://localhost:3000/tasks/")
    }
  }
}

export const config = { matcher: "/((?!api|static|.*\\..*|_next).*)" };
