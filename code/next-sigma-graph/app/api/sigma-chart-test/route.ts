/**
 * This route is used to get general GET and POST requests
 */
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Create sigma chart" });
}

// this functions handles POST requests to the /api/sigma-chart endpoint
export async function POST(request: Request) {
  const res = await request.json();
  res.token = "dummy_token_ABC123"; // here we are simply updating the token property of our request object
  return NextResponse.json( res ); // return the updated request object
}
