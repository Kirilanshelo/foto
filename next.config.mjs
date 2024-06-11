/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: "export",  // <=== enables static exports
  images: { unoptimized: true }
  // reactStrictMode: true,
};

export default nextConfig;
