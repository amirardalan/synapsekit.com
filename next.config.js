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
  dangerouslyAllowSVG: true,
  images: {
    protocol: "https",
    hostname: "**",
    pathname: "**/.*/**",
    domains: [
      'i.seadn.io',
      'lh3.googleusercontent.com',
      'storage.opensea.io',
      'ipfs.io',
      'openseauserdata.com',
      'highlight-creator-assets.highlight.xyz',
      'media.niftygateway.com',
      'raw.seadn.io',
      'homesick.s3.fr-par.scw.cloud',
      '*.arweave.net',
      '**.arweave.net',
      'arweave.net',
      'de24j2qkfeupm6t56o6vqtookmw7ptu2tk5tsj5uwml4sjtizoba.arweave.net',
      'gfgscjwrdjmssz3ab3dhjjjlrpomkiscyqytac4eyakfqk32k2sq.arweave.net',
      'z6lrmn4iq4lk3mgb2qf55kezcmerjaiquz5vt4mzemyxrrc4od5q.arweave.net',
      'metadata.ens.domains',
      'omnimorphs.mypinata.cloud',
      'data.nftify.network'
    ]
  }
}