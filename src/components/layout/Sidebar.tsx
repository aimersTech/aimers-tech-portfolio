import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[--color-sidebar] text-[--color-sidebar-foreground] p-4 space-y-4">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block hover:underline">Overview</Link>
        <Link href="/dashboard/users" className="block hover:underline">Users</Link>
        <Link href="/dashboard/settings" className="block hover:underline">Settings</Link>
      </nav>
    </aside>
  )
}
