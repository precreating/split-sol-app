import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Mock data for recent activity
const activities = [
  {
    id: "1",
    user: {
      name: "Alice",
      avatar: "",
      initials: "A",
    },
    action: "added an expense",
    amount: 0.25,
    vault: "Trip to Miami",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    user: {
      name: "Bob",
      avatar: "",
      initials: "B",
    },
    action: "settled up",
    amount: 0.5,
    vault: "Apartment Expenses",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    user: {
      name: "Charlie",
      avatar: "",
      initials: "C",
    },
    action: "created a vault",
    amount: null,
    vault: "Team Lunch",
    timestamp: "1 day ago",
  },
  {
    id: "4",
    user: {
      name: "David",
      avatar: "",
      initials: "D",
    },
    action: "added an expense",
    amount: 0.12,
    vault: "Team Lunch",
    timestamp: "1 day ago",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent transactions and activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user.name} {activity.action}
                  {activity.amount ? ` (${activity.amount} SOL)` : ""}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.vault} • {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
