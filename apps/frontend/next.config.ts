import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   transpilePackages: ["@myorg/ui", "antd", "@ant-design/icons"],
};

export default nextConfig;
