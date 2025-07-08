import type { NextConfig } from "next";
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Add remark/rehype plugins here if needed
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async headers() {
    return [
      {
        source: '/:all*\.(png|jpg|jpeg|svg|webp|ico|woff2|woff|ttf|eot)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  /* config options here */
};

export default withMDX(nextConfig);
