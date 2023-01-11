import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(
  req: NextRequest,
) {
  const [ cookies ] = req.cookies.getAll();
  const reqUrl = req.url;
  if (!cookies) {
    if (reqUrl === "http://localhost:3000/") {
      // If there's no cookie, login.
      return NextResponse.rewrite("http://localhost:3000/");
    } else {
      // If there's no cookie and wrong page, 404.
      return NextResponse.rewrite("http://localhost:3000/404");
    }
  } else {
    if (reqUrl === "http://localhost:3000/") {
      // There's cookie and go to login page, redirect to tasks
      return NextResponse.redirect("http://localhost:3000/tasks");
    } // else can go to any page available
  }
}

export const config = { matcher: "/((?!api|static|.*\\..*|_next).*)" };
