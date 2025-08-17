import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-[--color-primary] text-[--color-primary-foreground] px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Aimers
      </Link>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  )
}
