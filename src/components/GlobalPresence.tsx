'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const countries = [
  { flag: '🇨🇳', name: '中国 · 北京总部', desc: '品牌发源地，300+旗舰店与200+合作零售点覆盖一二线城市。' },
  { flag: '🇰🇷', name: '韩国 · 首尔', desc: '2021年正式进入，迅速成为K-pop文化圈的热门话题。' },
  { flag: '🇯🇵', name: '日本 · 东京', desc: '2022年进军发源地，在潮玩文化最成熟的市场站稳脚跟。' },
  { flag: '🇸🇬', name: '新加坡', desc: '东南亚首站，成为连接亚太潮流文化的重要枢纽。' },
  { flag: '🇬🇧', name: '英国 · 伦敦', desc: '2023年登陆欧洲，将东方潮玩美学带入西方时尚之都。' },
  { flag: '🇺🇸', name: '美国 · 洛杉矶', desc: '2024年进军北美，在娱乐之都开启全新篇章。' },
]

const stats = [
  { number: '600+', label: '全球门店' },
  { number: '1800+', label: 'RoboShop' },
  { number: '15+', label: '国家地区' },
  { number: '109亿', label: '2024营收(港元)' },
]

export default function GlobalPresence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="global" className="py-[100px] px-[5%] bg-gradient-to-br from-pop-dark to-[#2D1B4E] text-white">
      <div className="text-center mb-[70px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm font-semibold tracking-[3px] uppercase text-pop-pink mb-4 px-5 py-1.5 bg-white/10 rounded-full"
        >
          Global Presence
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4"
        >
          全球布局
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-lg max-w-[600px] mx-auto"
        >
          从中国出发，将潮流文化带向世界
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] max-w-[1100px] mx-auto">
        {countries.map((country, index) => (
          <motion.div
            key={country.name}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-[20px] p-[30px] text-center transition-all duration-400 hover:bg-white/10 hover:-translate-y-[5px]"
          >
            <div className="text-[2.5rem] mb-4">{country.flag}</div>
            <h3 className="text-[1.3rem] font-bold mb-2.5">{country.name}</h3>
            <p className="text-white/70 text-[0.95rem]">{country.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-[900px] mx-auto mt-[60px] text-center"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-[3rem] font-black bg-gradient-to-br from-pop-pink to-pop-orange bg-clip-text text-transparent leading-none">
              {stat.number}
            </div>
            <div className="text-sm text-white/70 mt-2">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
