import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import BrandStory from '@/components/BrandStory'
import CoreValues from '@/components/CoreValues'
import IPShowcase from '@/components/IPShowcase'
import BlindBoxCulture from '@/components/BlindBoxCulture'
import Timeline from '@/components/Timeline'
import GlobalPresence from '@/components/GlobalPresence'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <CoreValues />
      <IPShowcase />
      <BlindBoxCulture />
      <Timeline />
      <GlobalPresence />
      <Footer />
    </main>
  )
}
