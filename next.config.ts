import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    base: "/social-media-next/",
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
