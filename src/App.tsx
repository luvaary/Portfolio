import { useEffect } from 'react'
import Hero from './sections/Hero'
import Stack from './sections/Stack'
import Projects from './sections/Projects'
import UX from './sections/UX'
import OpenSource from './sections/OpenSource'
import Timeline from './sections/Timeline'
import Footer from './sections/Footer'

export default function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.slice(1)
        const element = document.getElementById(id!)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <main className="app">
      <Hero />
      <Stack />
      <Projects />
      <UX />
      <OpenSource />
      <Timeline />
      <Footer />
    </main>
  )
}
