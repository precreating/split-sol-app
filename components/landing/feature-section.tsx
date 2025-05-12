import { ShieldCheck, Wallet, Users, Smartphone } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Vaults",
    description: "Create secure vaults to manage group expenses with built-in Solana security.",
  },
  {
    icon: Wallet,
    title: "Instant Settlements",
    description: "Settle expenses instantly with low transaction fees on Solana.",
  },
  {
    icon: Users,
    title: "Group Management",
    description: "Easily manage expenses with friends, roommates, or travel groups.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Optimized for Solana Mobile and all mobile devices for on-the-go expense tracking.",
  },
]

export function FeatureSection() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Choose Split.sol?</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
              <feature.icon size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
