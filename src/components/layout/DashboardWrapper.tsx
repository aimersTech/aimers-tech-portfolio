import Sidebar from "./Sidebar";


export default function DashboardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[--color-background] text-[--color-foreground]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* <Topbar /> */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}