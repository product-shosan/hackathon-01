import {NextResponse} from "next/dist/server/web/spec-extension/response";

export async function GET() {
  return NextResponse.json({ is_occupied: Date.now() % 20000 < 10000 });
}