// src/app/page.tsx
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Your main content will go here */}
      </main>
      <Footer />
    </div>
  )
}