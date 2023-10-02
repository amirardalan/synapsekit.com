# [synapsekit.com](https://synapsekit.com)

An NFT Gallery built with Next.js and OpenSea. Designed, built, and maintained by [@amirardalan](https://github.com/amirardalan)

### Built with:

[Next.js](https://github.com/vercel/next.js/)  
[Emotion](https://github.com/emotion-js/emotion)  
[OpenSea](https://docs.opensea.io/reference/api-overview)  
[SWR](https://swr.vercel.app/)  
[react-swipeable](https://github.com/FormidableLabs/react-swipeable)

---

## Local Development: 

1. Create an `.env` file for local environment variables. Start with the Site URL and updating updating your timezone:

```
# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# OpenSea
OPENSEA_API_KEY=your_api_key_here
OPENSEA_WALLET_ADDRESS=your_wallet_address_here
```
Add additional local environment variables as needed. Create a version of this for your staging and production environments as needed, these are usually stored on your server.

2. Install depencies by running `yarn`

3. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

Optionally, create a local copy of a production build. (useful for testing `generateSitemap.mjs` configuration):

```bash
yarn build
```
#### Obtaining an OpenSea API Key
- Note: It is no longer a manual request process. You can generate an API Key in the `Developer` section of your profile.
- [OpenSea Documentation](https://docs.opensea.io/reference/api-keys)

## Testing

- [Jest](jestjs.io/) is configured in `jest.config.ts` and included in the `package.json` build script.
- [React Testing Library](https://github.com/testing-library/react-testing-library) is included in `jest.setup.ts`.
- Verbose test suites will be run and logged at build time.

Run Jest manually:  
`yarn test`
