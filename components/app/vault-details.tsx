"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, UserPlus, Settings, Share2 } from "lucide-react"

// Mock data for vault details
const vaultData = {
  "1": {
    id: "1",
    name: "Trip to Miami",
    description: "Expenses for our Miami vacation",
    balance: 2.45,
    members: [
      { name: "You", initials: "Y", balance: 0 },
      { name: "Alice", initials: "A", balance: 0.75 },
      { name: "Bob", initials: "B", balance: -0.5 },
      { name: "Charlie", initials: "C", balance: 0.25 },
    ],
    expenses: [
      {
        id: "e1",
        description: "Hotel",
        amount: 1.5,
        paidBy: "You",
        date: "2023-06-15",
      },
      {
        id: "e2",
        description: "Dinner",
        amount: 0.75,
        paidBy: "Alice",
        date: "2023-06-16",
      },
      {
        id: "e3",
        description: "Taxi",
        amount: 0.2,
        paidBy: "Bob",
        date: "2023-06-17",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Apartment Expenses",
    description: "Monthly bills and groceries",
    balance: 0.75,
    members: [
      { name: "You", initials: "Y", balance: 0 },
      { name: "David", initials: "D", balance: 0.25 },
      { name: "Eve", initials: "E", balance: 0.5 },
    ],
    expenses: [
      {
        id: "e4",
        description: "Electricity",
        amount: 0.3,
        paidBy: "You",
        date: "2023-07-01",
      },
      {
        id: "e5",
        description: "Groceries",
        amount: 0.45,
        paidBy: "David",
        date: "2023-07-05",
      },
    ],
  },
  "3": {
    id: "3",
    name: "Team Lunch",
    description: "Weekly team lunch expenses",
    balance: 0.12,
    members: [
      { name: "You", initials: "Y", balance: 0 },
      { name: "Frank", initials: "F", balance: 0.04 },
      { name: "Grace", initials: "G", balance: 0.04 },
      { name: "Hank", initials: "H", balance: 0.04 },
      { name: "Ivy", initials: "I", balance: 0 },
      { name: "Jack", initials: "J", balance: 0 },
    ],
    expenses: [
      {
        id: "e6",
        description: "Pizza",
        amount: 0.12,
        paidBy: "You",
        date: "2023-07-12",
      },
    ],
  },
}

export function VaultDetails({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("expenses")
  const vault = vaultData[id as keyof typeof vaultData]

  if (!vault) {
    return <div>Vault not found</div>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{vault.name}</CardTitle>
          <CardDescription>{vault.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Balance</p>
              <p className="text-2xl font-bold">{vault.balance} SOL</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Expense
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="balances">Balances</TabsTrigger>
        </TabsList>
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vault.expenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="flex flex-col justify-between gap-2 rounded-lg border p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <p className="font-medium">{expense.description}</p>
                      <p className="text-sm text-muted-foreground">
                        Paid by {expense.paidBy} on {expense.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{expense.amount} SOL</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Add Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Dinner" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount (SOL)</Label>
                  <Input id="amount" type="number" step="0.01" placeholder="0.00" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Add any additional notes..." />
                </div>
                <Button type="submit" className="w-full">
                  Add Expense
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vault.members.map((member, index) => (
                  <div key={index} className="flex items-center justify-between gap-4 rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {member.balance > 0
                            ? `Owes you ${member.balance} SOL`
                            : member.balance < 0
                              ? `You owe ${Math.abs(member.balance)} SOL`
                              : "Settled up"}
                        </p>
                      </div>
                    </div>
                    {member.balance !== 0 && (
                      <Button variant="outline" size="sm">
                        Settle Up
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Member
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="balances" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Balances</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vault.members.map((member, index) => (
                  <div key={index} className="flex items-center justify-between gap-4 rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">{member.name}</p>
                    </div>
                    <p
                      className={
                        member.balance > 0
                          ? "font-medium text-green-600"
                          : member.balance < 0
                            ? "font-medium text-red-600"
                            : "font-medium"
                      }
                    >
                      {member.balance > 0
                        ? `+${member.balance} SOL`
                        : member.balance < 0
                          ? `${member.balance} SOL`
                          : "0 SOL"}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
