/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === "1"
        ? { source: "/((?!maintenance).*)", destination: "/maintenance", permanent: false }
        : null,
    ].filter(Boolean);
  },
  images: {
    domains: [
      // NFT Assets
      'lh3.googleusercontent.com',
      'storage.opensea.io',
      'ipfs.io',
      'openseauserdata.com',
      'i.seadn.io' // OpenSea
    ]
  }
}