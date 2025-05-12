"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock data for vaults
const vaults = [
  {
    id: "1",
    name: "Trip to Miami",
    description: "Expenses for our Miami vacation",
    balance: 2.45,
    members: 4,
    status: "active",
  },
  {
    id: "2",
    name: "Apartment Expenses",
    description: "Monthly bills and groceries",
    balance: 0.75,
    members: 3,
    status: "pending",
  },
  {
    id: "3",
    name: "Team Lunch",
    description: "Weekly team lunch expenses",
    balance: 0.12,
    members: 6,
    status: "completed",
  },
]

export function VaultList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Vaults</h2>
        <Link href="/app/vaults" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vaults.map((vault) => (
          <Link key={vault.id} href={`/app/vault/${vault.id}`}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{vault.name}</CardTitle>
                  <Badge
                    variant={
                      vault.status === "active" ? "default" : vault.status === "pending" ? "secondary" : "outline"
                    }
                  >
                    {vault.status}
                  </Badge>
                </div>
                <CardDescription>{vault.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Balance</p>
                    <p className="font-medium">{vault.balance} SOL</p>
                  </div>
                  <div className="flex -space-x-2">
                    {Array.from({ length: Math.min(3, vault.members) }).map((_, i) => (
                      <Avatar key={i} className="h-8 w-8 border-2 border-background">
                        <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                      </Avatar>
                    ))}
                    {vault.members > 3 && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                        +{vault.members - 3}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
