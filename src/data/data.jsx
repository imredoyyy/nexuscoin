import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ShieldHalf,
  BarChart2,
  Server,
  BrainCircuit,
} from "lucide-react";

import {
  Discord,
  Slack,
  Binance,
  WalletConnect,
  Notion,
  Figma,
} from "../SvgComponents/SvgComponents";

export const NavLinks = [
  {
    title: "Company",
    url: "/about",
  },
  {
    title: "Integrations",
    url: "/integrations",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const SocialLinks = [
  {
    icon: <Facebook/>,
    url: "/",
  },
  {
    icon: <Instagram/>,
    url: "/",
  },
  {
    icon: <Twitter/>,
    url: "/",
  },
  {
    icon: <Linkedin/>,
    url: "/",
  },
];

export const ServiceLinks = [
  {
    title: "Market Update",
    url: "/",
  },
  {
    title: "Affiliate",
    url: "/",
  },
  {
    title: "Referral Program",
    url: "/",
  },
  {
    title: "API",
    url: "/",
  },
];

export const CompanyLinks = [
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Careers",
    url: "#",
  },
  {
    title: "Blog",
    url: "#",
  },
];

export const FeaturesData = [
  {
    name: "Advanced Security",
    description: "NexusCoin uses advanced cryptography to protect your data.",
    icon: <ShieldHalf />,
  },
  {
    name: "Real-time Analytics",
    description:
      "We measure real-time data to show you latest analytics possible.",
    icon: <BarChart2 />,
  },
  {
    name: "Cold Wallet",
    description:
      "A cold wallet is offline cryptocurrency wallet, providing greater security against hacking and theft.",
    icon: <Server />,
  },
  {
    name: "AI Automation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    icon: <BrainCircuit />,
  },
];

export const FaqData = [
  {
    ques: "What is cryptocurrency?",
    ans: "Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on decentralized networks based on blockchain technology.",
  },
  {
    ques: "What is a cryptocurrency wallet",
    ans: "A cryptocurrency wallet is a software program that stores public and private keys and interacts with various blockchain networks to enable users to send, receive, and manage their cryptocurrency holdings.",
  },
  {
    ques: "What is the difference between a hot wallet and a cold wallet?",
    ans: "A hot wallet is connected to the internet and is used for frequent transactions, while a cold wallet is offline and used for long-term storage of cryptocurrencies, providing greater security against hacking and theft.",
  },
  {
    ques: "What is the process of mining cryptocurrencies?",
    ans: "Mining is the process of validating transactions and adding them to the blockchain ledger. Miners use powerful computers to solve complex mathematical puzzles, and in return, they are rewarded with newly minted coins and transaction fees.",
  },
];

export const PricingData = [
  {
    label: "Basic",
    priceMonth: 49,
    priceAnnual: 29,
    desc: "Suitable for personal use",
    features: [
      "Realtime trading data",
      "3-months standard support",
      "Trading up to $50k",
      "10GB Disk space",
      "Up to 5 team members",
      "Free Portfolio",
    ],
  },
  {
    label: "Premium",
    priceMonth: 79,
    priceAnnual: 49,
    desc: "Suitable for small business",
    features: [
      "Benefits of Basic tier",
      "6-month standard support",
      "Trading up to $150k",
      "25GB Disk space",
      "Up to 20 team members",
      "Free custom domain",
    ],
  },
  {
    label: "Ultimate",
    priceMonth: 129,
    priceAnnual: 99,
    desc: "Suitable for large business",
    features: [
      "Benefits of Premium tier",
      "1-year premium support",
      "Trading up to $500k",
      "50GB Disk space",
      "Up to 50 team members",
      "No trading fee",
    ],
  },
];

export const Missions = [
  {
    title: "Secure Crypto Solutions",
    desc: "We are on a mission to provide secure and reliable cryptocurrency solutions to our clients.",
  },
  {
    title: "Advancing Decentralization",
    desc: "We are on a mission to advance the decentralization of cryptocurrency.",
  },
  {
    title: "Complete Transparency",
    desc: "Building trust through unwavering transparency in all our practices",
  },
];

export const IntegrationsApp = [
  {
    name: "Discord",
    icon: <Discord />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Slack",
    icon: <Slack />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Binance",
    icon: <Binance />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "WalletConnect",
    icon: <WalletConnect />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Notion",
    icon: <Notion />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Figma",
    icon: <Figma />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
];
