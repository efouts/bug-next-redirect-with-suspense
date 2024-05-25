/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/page",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
