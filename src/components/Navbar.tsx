'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#story', label: '品牌故事' },
    { href: '#values', label: '品牌理念' },
    { href: '#ips', label: '热门IP' },
    { href: '#blindbox', label: '盲盒文化' },
    { href: '#timeline', label: '发展历程' },
    { href: '#global', label: '全球布局' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[5%] h-[70px] flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-[20px] shadow-[0_2px_30px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <a href="#" className={`text-2xl font-black flex items-center gap-2.5 transition-colors duration-300 no-underline ${scrolled ? 'text-pop-dark' : 'text-white'}`}>
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <circle cx="20" cy="20" r="18" fill="url(#logoGrad)" opacity="0.2"/>
          <circle cx="20" cy="20" r="14" fill="url(#logoGrad)"/>
          <circle cx="16" cy="17" r="3" fill="white"/>
          <circle cx="24" cy="17" r="3" fill="white"/>
          <path d="M15 24 Q20 28 25 24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#FF6B9D"/>
              <stop offset="100%" stopColor="#FFB347"/>
            </linearGradient>
          </defs>
        </svg>
        POP MART
      </a>
      <ul className="hidden md:flex gap-9 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`relative text-[0.95rem] font-medium transition-colors duration-300 py-1 no-underline group ${
                scrolled ? 'text-pop-dark' : 'text-white'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pop-pink transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
