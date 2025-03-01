/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**", // Allows all domains (use with caution)
            },
          ],
    }
};

export default nextConfig;
