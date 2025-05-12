export interface Member {
  name: string
  publicKey: string
  balance: number
}

export interface Expense {
  id: string
  description: string
  amount: number
  paidBy: string
  date: string
  splitAmong: string[]
}

export interface Vault {
  id: string
  name: string
  description: string
  balance: number
  members: Member[]
  expenses: Expense[]
  createdAt: string
  updatedAt: string
}
