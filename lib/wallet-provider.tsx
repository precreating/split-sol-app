"use client"

import type React from "react"

import { createContext, useContext, useMemo, useState } from "react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js"
import { isMobile } from "react-device-detect"
import { createDefaultMobileWalletAdapters } from "@solana-mobile/wallet-adapter-mobile"

interface WalletContextType {
  connected: boolean
  publicKey: string | null
  connect: () => Promise<void>
  disconnect: () => Promise<void>
}

const WalletContext = createContext<WalletContextType>({
  connected: false,
  publicKey: null,
  connect: async () => {},
  disconnect: async () => {},
})

export const useWallet = () => useContext(WalletContext)

export function WalletContextProvider({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string | null>(null)

  // Set up the network
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  // Set up the wallet adapters
  const wallets = useMemo(() => {
    if (isMobile) {
      // Use mobile wallet adapters when on mobile
      return createDefaultMobileWalletAdapters()
    } else {
      // Use web wallet adapters when on desktop
      return [new PhantomWalletAdapter()]
    }
  }, [])

  // Mock connect and disconnect functions
  const connect = async () => {
    // In a real app, this would connect to the wallet
    setConnected(true)
    setPublicKey("7KBfA38Nf4hLAS8TgiY6C2HtEP8YPi3CXuVPB1kHtGRr")
  }

  const disconnect = async () => {
    // In a real app, this would disconnect from the wallet
    setConnected(false)
    setPublicKey(null)
  }

  const contextValue = useMemo(
    () => ({
      connected,
      publicKey,
      connect,
      disconnect,
    }),
    [connected, publicKey],
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletContext.Provider value={contextValue}>{children}</WalletContext.Provider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
