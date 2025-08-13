export default function Footer() {
  return (
    <footer className="bg-[--color-secondary] text-[--color-secondary-foreground] py-4 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  )
}
