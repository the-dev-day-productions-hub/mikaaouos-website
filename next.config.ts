import type { NextConfig } from "next";
import { webpack }  from "next/dist/compiled/webpack/webpack";

const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config) => {
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /^zlib-sync$/ }),
        new webpack.IgnorePlugin({ resourceRegExp: /^bufferutil$/ }),
    )

    turbopack: {
      
    }
    return config
  },
};

export default nextConfig;
