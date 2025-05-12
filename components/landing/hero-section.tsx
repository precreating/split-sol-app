import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-4 py-12 text-center md:py-24">
      <div className="mb-6 flex justify-center">
        <div className="h-24 w-24 overflow-hidden">
          <img src="/icons/icon-512x512.png" alt="Split.sol Logo" className="h-full w-full object-contain" />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Split Expenses on <span className="text-primary">Solana</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          The easiest way to split expenses with friends and family using the power of Solana blockchain.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Link href="/app">
          <Button size="lg">Launch App</Button>
        </Link>
        <Link href="https://docs.split.sol" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline">
            Read Docs
          </Button>
        </Link>
      </div>
      <div className="mt-12 overflow-hidden rounded-lg border bg-background shadow-xl">
        <Image src="/preview.png" alt="Split.sol app preview" width={1200} height={675} className="w-full" priority />
      </div>
    </section>
  )
}
