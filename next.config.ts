import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    base: "/friendsbook/",
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
