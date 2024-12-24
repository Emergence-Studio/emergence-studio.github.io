'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Insights from '../components/Insights'
import ContactForm from '../components/ContactForm'
import SocialIcons from '../components/SocialIcons'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === 'about' && <About />}
        {activeTab === 'services' && <Services />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'insights' && <Insights />}
        <ContactForm />
        <SocialIcons />
      </main>
    </div>
  )
}

