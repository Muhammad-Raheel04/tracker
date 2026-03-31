import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex justify-between items-center py-4 px-6 bg-[#003F3A] border-b border-gray-600">
        <h1 className="text-white text-2xl font-extrabold tracking-wide">
          Tracker
        </h1>

        <nav className="flex items-center gap-8">
          <Link to="/" className="text-white hover:text-[#14ead8]">Home</Link>
          <Link to="/features" className="text-white hover:text-[#14ead8]">Features</Link>
          <Link to="/pricing" className="text-white hover:text-[#14ead8]">Pricing</Link>
          <Link to="/docs" className="text-white hover:text-[#14ead8]">Docs</Link>
        </nav>

        <Link to="/">
          <button className="bg-[#14ead8] text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">
            Get Started
          </button>
        </Link>
      </div>

      <div className="md:hidden flex flex-col py-4 px-4 bg-[#003F3A] border-b border-gray-600">

        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-extrabold">Tracker</h1>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div className="fixed right-0 top-0 z-50 flex flex-col bg-[#002f2b] w-[240px] h-auto shadow-lg">

              <div className="flex justify-between items-center p-4 border-b border-gray-600">
                <h2 className="text-white text-lg pb-1">Menu</h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6 text-[#14ead8]" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 p-6 text-white">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className='border-b border-[14ead8#] pb-2'>Home</Link>
                <Link to="/features" onClick={() => setIsMenuOpen(false)} className='border-b border-[#14ead8] pb-2'>Features</Link>
                <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className='border-b border-[#14ead8] pb-2'>Pricing</Link>
                <Link to="/docs" onClick={() => setIsMenuOpen(false)} className='border-b border-[#14ead8] pb-2'>Docs</Link>

                <Link to="/">
                  <button className="mt-4 w-full bg-[#14ead8] text-black py-2 rounded-md font-semibold">
                    Get Started
                  </button>
                </Link>
              </nav>
            </div>

            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </div>
    </>
  )
}

export default Header