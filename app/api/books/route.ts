import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
) {
  console.log(JSON.stringify(req))
  const currentUnixtime = Date.now();
  const currentDatetime = new Date(currentUnixtime);
  const currentUtcString = currentDatetime.toUTCString();

  const searchParams = req.nextUrl.searchParams
  const bookId = searchParams.get('bookId')
  if (bookId == null) {
    return NextResponse.json({ 
      timestamp: currentUtcString,
      error: "Bad Request",
      message: "query parameter `bookId` is not found.",
      path: req.nextUrl.pathname,
    },
    {status: 400})
  }
  const res = NextResponse.json({message: `bookId=${bookId}`})
  return res
}
