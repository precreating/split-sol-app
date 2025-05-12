import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/landing/hero-section"
import { FeatureSection } from "@/components/landing/feature-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <section className="container mx-auto py-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to split expenses on Solana?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join thousands of users who are already using Split.sol to manage group expenses on the Solana blockchain.
          </p>
          <Link href="/app">
            <Button size="lg" className="px-8">
              Launch App
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
