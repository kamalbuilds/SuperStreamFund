// @ts-nocheck
import { celo, celoAlfajores, polygon, polygonMumbai } from "wagmi/chains";
import { configureChains, Chain , Connector  } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { goerli } from "wagmi/chains";
import { createConfig } from "wagmi";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'

export const projectId = "bc20036f3357961ba887b57144d0791e";

const chains = [ goerli, polygon]

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

export const wagmiConfig = createConfig({
  autoConnect: true,
  // @ts-ignore
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)

