import type { NextConfig } from "next";

const nextConfig: NextConfig = {
//    experimental: {
//         reactCompiler: true,
//         ppr: 'incremental'
//     },
images:{
    remotePatterns: [
        {
            protocol: "https",
            hostname: "images.pexels.com"
        }
    ]
}
};

export default nextConfig;
