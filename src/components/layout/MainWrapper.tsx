
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen  bg-black  text-[--color-foreground]">
      <Navbar />
      <main className="flex-1 ">{children}</main>
      <Footer />
    </div>
  )
}
