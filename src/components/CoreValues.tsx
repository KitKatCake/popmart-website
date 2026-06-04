'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" fill="url(#v1)" opacity="0.2"/>
        <path d="M10 24 L18 8 L26 24" stroke="url(#v1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="18" cy="20" r="3" fill="url(#v1)"/>
        <path d="M8 28 L28 28" stroke="url(#v1)" strokeWidth="2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="v1" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#FF6B9D"/>
            <stop offset="100%" stopColor="#FFB347"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: '艺术驱动',
    desc: '与全球顶尖艺术家合作，将潮流艺术带入日常生活。每一位艺术家都保留部分作品版权，按销售获得版税，建立真正的共创生态。',
    bg: 'bg-pop-pink-light',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 30 C10 24 4 18 4 12 C4 7 8 4 12 4 C15 4 17 6 18 8 C19 6 21 4 24 4 C28 4 32 7 32 12 C32 18 26 24 18 30Z" fill="url(#v2)"/>
        <path d="M12 14 C14 12 16 14 16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M24 14 C22 12 20 14 20 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <defs>
          <linearGradient id="v2" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#FF6B9D"/>
            <stop offset="100%" stopColor="#E91E8C"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: '情感连接',
    desc: '不只是功能性产品，更是情感载体。每个IP形象都承载着独特的情绪价值，成为年轻人表达自我、寻找共鸣的媒介。',
    bg: 'bg-[#FFF3E0]',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="12" width="24" height="20" rx="4" fill="url(#v3)" opacity="0.3"/>
        <rect x="6" y="12" width="24" height="20" rx="4" stroke="url(#v3)" strokeWidth="2" fill="none"/>
        <path d="M6 18 L30 18" stroke="url(#v3)" strokeWidth="2"/>
        <path d="M14 6 L14 12" stroke="url(#v3)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 6 L22 12" stroke="url(#v3)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="18" cy="25" r="3" fill="url(#v3)"/>
        <defs>
          <linearGradient id="v3" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#C084FC"/>
            <stop offset="100%" stopColor="#FF6B9D"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: '惊喜体验',
    desc: '盲盒机制创造"可变奖励"的心理愉悦。每一次拆盒都是一次小型冒险，未知的期待感让消费变成令人期待的仪式。',
    bg: 'bg-[#F3E5F5]',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="url(#v4)" strokeWidth="2" fill="none"/>
        <ellipse cx="18" cy="18" rx="6" ry="14" stroke="url(#v4)" strokeWidth="1.5" fill="none"/>
        <path d="M4 18 L32 18" stroke="url(#v4)" strokeWidth="1.5"/>
        <path d="M6 10 L30 10" stroke="url(#v4)" strokeWidth="1" opacity="0.5"/>
        <path d="M6 26 L30 26" stroke="url(#v4)" strokeWidth="1" opacity="0.5"/>
        <circle cx="18" cy="18" r="3" fill="url(#v4)"/>
        <defs>
          <linearGradient id="v4" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#60A5FA"/>
            <stop offset="100%" stopColor="#6EE7B7"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: '全球视野',
    desc: '从中国北京出发，泡泡玛特已进入首尔、东京、新加坡、伦敦、洛杉矶等全球核心城市，将中国潮玩文化带向世界舞台。',
    bg: 'bg-[#E8F5E9]',
  },
]

export default function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="values" className="py-[100px] px-[5%] bg-white">
      <div className="text-center mb-[70px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm font-semibold tracking-[3px] uppercase text-pop-pink mb-4 px-5 py-1.5 bg-pop-pink-light rounded-full"
        >
          Brand Philosophy
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-pop-dark mb-4"
        >
          品牌理念
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-pop-dark-light/70 text-lg max-w-[600px] mx-auto"
        >
          用艺术、情感与惊喜，重新定义消费体验
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-[1200px] mx-auto">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-3xl p-[40px_30px] text-center border border-black/5 relative overflow-hidden group transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pop-pink to-pop-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            <div className={`w-[70px] h-[70px] mx-auto mb-5 rounded-[20px] flex items-center justify-center text-2xl ${value.bg}`}>
              {value.icon}
            </div>
            <h3 className="text-[1.3rem] font-bold text-pop-dark mb-3">{value.title}</h3>
            <p className="text-pop-dark-light/70 text-[0.95rem]">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
