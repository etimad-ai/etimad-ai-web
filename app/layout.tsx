import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const SITE = "https://etimad.ai";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Etimad AI Labs — Enterprise AI Agents, Fine-Tuning & Automation",
    template: "%s · Etimad AI Labs",
  },
  description:
    "Etimad AI Labs builds and deploys AI agents, fine-tuned open-source models, and agentic data pipelines for enterprise automation — on-prem or in your cloud. RAG, fine-tuning, and digital transformation, engineered for trust.",
  keywords: [
    "AI agents",
    "enterprise AI",
    "fine-tuning",
    "open source LLM deployment",
    "RAG",
    "agentic workflows",
    "data pipelines",
    "on-premise AI",
    "digital transformation",
    "Etimad AI Labs",
    "Hyderabad AI company",
  ],
  authors: [{ name: "Etimad AI Labs Private Limited" }],
  openGraph: {
    type: "website",
    url: SITE,
    title: "Etimad AI Labs — Enterprise AI, Engineered for Trust",
    description:
      "AI agents, fine-tuned OSS models, and agentic data pipelines deployed securely for the enterprise.",
    siteName: "Etimad AI Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etimad AI Labs — Enterprise AI, Engineered for Trust",
    description:
      "AI agents, fine-tuned OSS models, and agentic data pipelines deployed securely for the enterprise.",
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.svg`, type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#060709",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
