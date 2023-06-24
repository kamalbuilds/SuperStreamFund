import { ArcanaConnector } from "@arcana/auth-wagmi";
import { celo, celoAlfajores, polygon, polygonMumbai } from "wagmi/chains";
import { configureChains, Chain , Connector , createClient, goerli } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
export const connector = (chains: Chain[]) => {
  return new ArcanaConnector({
    chains,
    options: {
      appId: `9e0c6715d9ea7aab73535c8c359d8b45ac2587bc`,
    },
  });
};

const { chains, provider } = configureChains(
  [polygon, polygonMumbai , goerli , celoAlfajores , celo],
  [publicProvider()]
);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({ chains }),
  ],
  provider,
});
