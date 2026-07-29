import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Create sigma chart" });
}

// this functions handles POST requests to the /api/sigma-chart endpoint
export async function POST(request: Request) {
  const res = await request.json();
  res.token = "dummy_token_ABC123";
  return NextResponse.json({ res });
}
