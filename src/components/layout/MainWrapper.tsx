import Header from "../shared/Header";
import Footer from "./Footer";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen  bg-black  text-[--color-foreground]">

      <Header/>
      <main className="flex-1 ">{children}</main>
      <Footer />
    </div>
  )
}
