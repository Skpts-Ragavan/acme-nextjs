/** @type {import('next').NextConfig} */
// import * as fs from 'fs';

const nextConfig = {
    // experimental:{
    //     ppr: 'incremental',
    // },
    // httpsAgent: {
    //     ca: fs.readFileSync('./ssl.cer')
    // },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
