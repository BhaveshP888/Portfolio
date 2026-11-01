import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const resumeUrl =
    process.env.RESUME_URL ||
    process.env.NEXT_PUBLIC_RESUME_URL ||
    "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID/view";

  return NextResponse.redirect(resumeUrl, { status: 307 });
}
