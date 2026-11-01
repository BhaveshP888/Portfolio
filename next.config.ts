import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          process.env.RESUME_URL ||
          "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID/view",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
