# 🌐 Sonarex

**Sonarex** is an AI-powered yield optimizer that creates a smart account for each user and automatically invests deposited stablecoins into the highest-yielding protocols on-chain. This allows users to earn optimal returns on their assets without manual effort.

## 🚀 Features

- ⚙️ **Smart Account Creation** — Each user gets a unique on-chain smart account wallet.
- 🤖 **AI-Powered Investment Agent** — Continuously monitors on-chain APRs and reallocates funds accordingly.
- 🔒 **Secure Architecture** — Assets remain under user-owned smart accounts.
- 📊 **Passive Yield Optimization** — Funds are auto-invested into the best available yield sources.
- 🧠 **Fully On-Chain & Transparent** — All strategies and transactions are verifiable on-chain.

## 🧠 How It Works

```
User
  ↓
Connect Wallet
  ↓
Create Smart Account
  ↓
Deposit Stablecoins
  ↓
AI Agent Monitors Yield Pools
  ↓
Auto-Invests into Highest APR
  ↓
Auto-Reallocates if Better Yield Found
```

## 🧠 What the AI Agent Does

- Gathers real-time APR data via The Graph, Dune Analytics, or a custom indexer.
- Calculates risk-reward ratios using on-chain and off-chain signals.
- Executes on-chain transactions to rebalance and optimize yield.
- (Coming soon) Provides strategy reports and performance insights to users.

## 🛠️ Tech Stack

| Layer         | Technologies                         |
| ------------- | ------------------------------------ |
| Frontend      | Next.js, Tailwind CSS, Framer Motion |
| Wallet        | Wagmi, RainbowKit                    |
| Blockchain    | Solidity, Ethers.js, Foundry         |
| AI Agent      | Custom Agent (Python / Node.js)      |
| Yield Sources | Aave, Yearn, Morpho, Lido, etc.      |
| Indexing      | The Graph, Dune Analytics, Custom    |
| Smart Account | ERC-4337 / Account Abstraction       |

## 📈 Roadmap

- [x] Smart account integration
- [x] Landing page / Launch app UI
- [ ] AI Agent v1 (APR monitoring)
- [ ] Auto-invest into yield protocols
- [ ] Real-time rebalancing logic
- [ ] User dashboard with yield tracking

## 🤝 Contributing

Contributions, ideas and pull requests are welcome!  
Please open an issue to discuss what you want to change.

## 📜 License

MIT License © 2025 [sonarex.xyz](https://sonarex.xyz)
