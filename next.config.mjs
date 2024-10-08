/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    basePath: 'portfolio',
    assetPrefix: 'portfolio/',
};

export default nextConfig;
