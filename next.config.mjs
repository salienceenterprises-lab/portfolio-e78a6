
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/portfolio-e78a6', // This ensures CSS/JS paths include the repo name
};
export default nextConfig;
