'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#FF6B9D" strokeWidth="2" fill="none"/>
        <circle cx="11" cy="11" r="4" fill="#FF6B9D"/>
      </svg>
    ),
    title: '收集乐趣',
    desc: '集齐全套的成就感',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="11" r="5" stroke="#FF6B9D" strokeWidth="2" fill="none"/>
        <circle cx="15" cy="11" r="5" stroke="#FF6B9D" strokeWidth="2" fill="none"/>
        <path d="M10 11 L12 11" stroke="#FF6B9D" strokeWidth="2"/>
      </svg>
    ),
    title: '社交交换',
    desc: '与朋友交换重复款',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3 L13 8 L18 8 L14 12 L15.5 17 L11 14 L6.5 17 L8 12 L4 8 L9 8Z" fill="#FF6B9D"/>
      </svg>
    ),
    title: '稀有追逐',
    desc: '隐藏款的惊喜发现',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#FF6B9D" strokeWidth="2" fill="none"/>
        <circle cx="11" cy="11" r="3" fill="#FF6B9D"/>
      </svg>
    ),
    title: '晒单文化',
    desc: '小红书等平台的分享',
  },
]

export default function BlindBoxCulture() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blindbox" className="py-[100px] px-[5%] bg-[#FFFBF5]">
      <div className="text-center mb-[70px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm font-semibold tracking-[3px] uppercase text-pop-pink mb-4 px-5 py-1.5 bg-pop-pink-light rounded-full"
        >
          Blind Box Culture
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-pop-dark mb-4"
        >
          盲盒文化
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-pop-dark-light/70 text-lg max-w-[600px] mx-auto"
        >
          小小的盒子里，藏着大大的惊喜
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] max-w-[1200px] mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[280px] h-[350px] bg-gradient-to-br from-pop-pink to-pop-pink-dark rounded-3xl shadow-[0_30px_60px_rgba(255,107,157,0.3)] flex flex-col items-center justify-center p-[30px] animate-wiggle">
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-extrabold">
              ?
            </div>
            <svg className="w-[100px] h-[100px] mb-4" viewBox="0 0 100 100" fill="none">
              <rect x="15" y="25" width="70" height="55" rx="8" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              <rect x="15" y="25" width="70" height="18" rx="8" fill="url(#boxTopGrad)"/>
              <rect x="15" y="38" width="70" height="5" fill="rgba(255,255,255,0.3)"/>
              <circle cx="50" cy="58" r="16" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
              <text x="50" y="64" textAnchor="middle" fill="white" fontSize="18" fontWeight="800">?</text>
              <defs>
                <linearGradient id="boxGrad" x1="15" y1="25" x2="85" y2="80">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.25)"/>
                  <stop offset="100%" stopColor="rgba(255,255,255,0.1)"/>
                </linearGradient>
                <linearGradient id="boxTopGrad" x1="15" y1="25" x2="85" y2="43">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.4)"/>
                  <stop offset="100%" stopColor="rgba(255,255,255,0.2)"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="text-white text-2xl font-extrabold">BLIND BOX</div>
            <div className="text-white/70 text-sm mt-1">拆开你的惊喜</div>
          </div>

          {/* Mini Figures */}
          <div className="absolute w-full h-full pointer-events-none">
            <div className="absolute top-[-20px] left-[10%] w-[60px] h-[60px] animate-float">
              <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=60&h=60&fit=crop" alt="" className="w-full h-full rounded-full object-cover shadow-lg" />
            </div>
            <div className="absolute top-[30%] left-[-40px] w-[60px] h-[60px] animate-float" style={{ animationDelay: '1s' }}>
              <img src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=60&h=60&fit=crop" alt="" className="w-full h-full rounded-full object-cover shadow-lg" />
            </div>
            <div className="absolute bottom-[10%] right-[-20px] w-[60px] h-[60px] animate-float" style={{ animationDelay: '2s' }}>
              <img src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=60&h=60&fit=crop" alt="" className="w-full h-full rounded-full object-cover shadow-lg" />
            </div>
            <div className="absolute top-[10%] right-0 w-[60px] h-[60px] animate-float" style={{ animationDelay: '0.5s' }}>
              <img src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=60&h=60&fit=crop" alt="" className="w-full h-full rounded-full object-cover shadow-lg" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-[2rem] font-extrabold text-pop-dark mb-5">
            盲盒的魔力
          </h3>
          <p className="text-pop-dark-light/70 mb-[18px] text-[1.05rem]">
            盲盒（Blind Box）的概念源自日本扭蛋文化。每套盲盒包含12款以上不同设计，消费者在拆开前无法知晓盒内具体是哪一款——这种<strong>"未知的惊喜"</strong>正是盲盒最大的魅力。
          </p>
          <p className="text-pop-dark-light/70 mb-[18px] text-[1.05rem]">
            每个系列中通常还隐藏着概率极低的"稀有款"和"秘密款"，稀有款的抽中概率约为1/144，而手绘秘密版在二手市场可炒至数百美元。这种收集机制和社交属性，让盲盒从小众爱好变成了主流文化现象。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-[0_3px_15px_rgba(0,0,0,0.05)]">
                <div className="w-10 h-10 rounded-xl bg-pop-pink-light flex items-center justify-center text-xl shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-[0.95rem] font-bold text-pop-dark mb-0.5">{feature.title}</h4>
                  <span className="text-xs text-pop-dark-light/70">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
