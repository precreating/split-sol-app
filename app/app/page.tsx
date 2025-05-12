import { VaultList } from "@/components/app/vault-list"
import { CreateVaultButton } from "@/components/app/create-vault-button"
import { DashboardStats } from "@/components/app/dashboard-stats"
import { RecentActivity } from "@/components/app/recent-activity"

export default function AppPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <CreateVaultButton />
      </div>
      <DashboardStats />
      <VaultList />
      <RecentActivity />
    </div>
  )
}
