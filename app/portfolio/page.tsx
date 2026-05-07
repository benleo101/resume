import type { Metadata } from "next";
import PortfolioShowcase from "./components/PortfolioShowcase";

export const metadata: Metadata = {
  title: "Portfolio | KoronaMo Resume",
  description: "Selected portfolio slides and project showcase",
};

export default function PortfolioPage() {
  return <PortfolioShowcase />;
}
