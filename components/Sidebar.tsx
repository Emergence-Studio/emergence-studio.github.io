import { FC } from 'react'
import Image from 'next/image'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Sidebar: FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['about', 'services', 'projects', 'insights']

  return (
    <aside className="w-64 bg-purple-800 p-6">
      <div className="flex items-center gap-2 mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hibiscus-PNG-Images-HD-zlJaSRwlJlC8G7zvnWWqd0om1p5Ufv.png"
          alt="Emergence Studio Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <h1 className="text-2xl font-bold">Emergence Studio</h1>
      </div>
      <nav>
        <ul>
          {tabs.map((tab) => (
            <li key={tab} className="mb-4">
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left py-2 px-4 rounded transition-colors ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-200 hover:bg-purple-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

