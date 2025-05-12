"use client"

import { Button } from "@/components/ui/button"
import { useWallet } from "@/lib/wallet-provider"
import { Wallet } from "lucide-react"

export function WalletConnectButton() {
  const { connected, publicKey, connect, disconnect } = useWallet()

  return (
    <div>
      {connected ? (
        <Button variant="outline" onClick={() => disconnect()}>
          <Wallet className="mr-2 h-4 w-4" />
          {publicKey ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}` : "Connected"}
        </Button>
      ) : (
        <Button onClick={() => connect()}>
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      )}
    </div>
  )
}
