"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle } from "lucide-react"

export function CreateVaultButton() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would create a new vault
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Vault
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Vault</DialogTitle>
            <DialogDescription>Create a new vault to split expenses with friends and family.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Vault Name</Label>
              <Input id="name" placeholder="Trip to Miami" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Expenses for our Miami vacation" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="members">Members (comma separated)</Label>
              <Input id="members" placeholder="7KBfA38Nf4hLAS8TgiY6C2HtEP8YPi3CXuVPB1kHtGRr" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Vault</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
