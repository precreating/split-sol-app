# Split.sol

Split.sol is a decentralized application (dApp) built on the Solana blockchain that allows users to split expenses with friends and family. The app is designed to work on both desktop and Solana Mobile (Seeker) devices.

## Features

- Create expense vaults for different groups or purposes
- Add expenses and split them among group members
- Track balances and settle up with friends
- Mobile-first design with Solana Mobile support
- Connect with Phantom wallet or any Solana Mobile wallet

## Tech Stack

- Next.js with App Router
- TailwindCSS
- TypeScript
- Solana Web3.js
- Solana Wallet Adapter
- Solana Mobile Wallet Adapter

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Solana CLI (optional for local development)

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/split.sol.git
cd split.sol
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Create a `.env.local` file based on `.env.example`:

\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Solana Mobile Integration

Split.sol is designed to work seamlessly with Solana Mobile devices. It uses the `@solana-mobile/wallet-adapter-mobile` package to detect and connect to mobile wallets.

The app includes a `dapp-manifest.json` file that follows the [Solana dApp Store requirements](https://docs.solanamobile.com/dapp-store/publishing).

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - Reusable UI components
- `/lib` - Utility functions and wallet setup
- `/programs` - Smart contract placeholder
- `/public` - Static assets
- `/types` - TypeScript type definitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or feedback, please reach out to us at hello@split.sol or join our [Discord community](https://discord.gg/splitsol).
\`\`\`

Let's create a placeholder preview image:
