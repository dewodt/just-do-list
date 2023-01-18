import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import url from "url"

export default async function middleware(
  req: NextRequest,
) {
  const [ cookies ] = req.cookies.getAll();
  const reqUrl = req.url;

  // Find homeUrl and subdirectory
  const parsedUrl = url.parse(reqUrl, true);
  const subdirectory = parsedUrl.pathname?.split("/")[1] as string;
  const homeUrl = reqUrl.replace(subdirectory, "")

  if (!cookies) {
    if (subdirectory === "") {
      // If there's no cookie, login.
      return NextResponse.rewrite(homeUrl);
    } else {
      // If there's no cookie and wrong page, 404.
      return NextResponse.rewrite(`${homeUrl}404`);
    }
  } else {
    if (subdirectory === "") {
      // There's cookie and go to login page, redirect to tasks
      return NextResponse.redirect(`${homeUrl}tasks`);
    } // else can go to any page available
  }
}

export const config = { matcher: "/((?!api|static|.*\\..*|_next).*)" };
