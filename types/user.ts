export interface User {
  id: string
  name: string
  publicKey: string
  avatar?: string
  vaults: string[]
  friends: string[]
  createdAt: string
  updatedAt: string
}
