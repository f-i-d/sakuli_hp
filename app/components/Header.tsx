"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`font-bold text-2xl ${isScrolled ? "text-primary-600" : "text-white"} hover:text-primary-500 transition-colors`}
          >
            株式会社SAKULI
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/" isScrolled={isScrolled}>
              ホーム
            </NavLink>
            <NavLink href="/strengths" isScrolled={isScrolled}>
              私たちの強み
            </NavLink>
            <NavLink href="/facilities" isScrolled={isScrolled}>
              製造設備
            </NavLink>
            <NavLink href="/support" isScrolled={isScrolled}>
              サポート
            </NavLink>
            <NavLink href="/contact" isScrolled={isScrolled}>
              お問い合わせ
            </NavLink>
          </div>
          <button
            className={`md:hidden focus:outline-none transition-colors ${isScrolled ? "text-primary-600" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in-up">
            <NavLink href="/" mobile>
              ホーム
            </NavLink>
            <NavLink href="/strengths" mobile>
              私たちの強み
            </NavLink>
            <NavLink href="/facilities" mobile>
              製造設備
            </NavLink>
            <NavLink href="/support" mobile>
              サポート
            </NavLink>
            <NavLink href="/contact" mobile>
              お問い合わせ
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLink({
  href,
  children,
  mobile = false,
  isScrolled = true,
}: { href: string; children: React.ReactNode; mobile?: boolean; isScrolled?: boolean }) {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${mobile ? "block py-2" : "inline-block"} ${
        isScrolled ? "text-gray-700 hover:text-primary-600" : "text-white hover:text-primary-200"
      } transition-colors`}
    >
      {children}
    </Link>
  )
}

