import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextRequest, NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: config.env.imageKit.publicKey,
  privateKey: config.env.imageKit.privateKey,
  urlEndpoint: config.env.imageKit.urlEndpoint,
});

export async function GET(request: NextRequest) {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
