import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Create sigma chart" });
}


export async function POST(request: Request) {
  const res = await request.json()
  return NextResponse.json({ res })
}
