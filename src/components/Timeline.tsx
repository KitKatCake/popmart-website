'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineItems = [
  { year: '2010', title: '品牌创立', desc: '王宁在北京创立泡泡玛特，定位为潮流生活方式零售品牌，在商场经营小型零售摊位。' },
  { year: '2015', title: '盲盒转型', desc: '引入盲盒概念，从传统零售转向设计师玩具领域，灵感来自日本扭蛋文化。' },
  { year: '2016', title: 'Molly诞生', desc: '与香港艺术家Kenny Wong合作推出核心IP"Molly"，6个月内销售额突破400万美元。' },
  { year: '2020', title: '香港上市', desc: '12月11日正式在港交所挂牌上市（股票代码：09992.HK），首日股价翻倍。' },
  { year: '2021-2022', title: '亚太扩张', desc: '先后进入韩国首尔、日本东京、新加坡等亚太核心城市，开启全球化征程。' },
  { year: '2023-2024', title: '欧美进军', desc: '登陆英国伦敦、美国洛杉矶，泡泡玛特的足迹遍布全球主要潮流文化中心。' },
  { year: '2025+', title: '千亿帝国', desc: '市值突破1400亿港元，2024年营收达109亿港元，持续引领全球潮玩市场。' },
]

const colors = [
  { border: 'border-pop-pink', shadow: 'shadow-pop-pink/20', text: 'text-pop-pink' },
  { border: 'border-pop-orange', shadow: 'shadow-pop-orange/20', text: 'text-pop-orange' },
  { border: 'border-pop-purple', shadow: 'shadow-pop-purple/20', text: 'text-pop-purple' },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="timeline" className="py-[100px] px-[5%] bg-white">
      <div className="text-center mb-[70px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm font-semibold tracking-[3px] uppercase text-pop-pink mb-4 px-5 py-1.5 bg-pop-pink-light rounded-full"
        >
          Our Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-pop-dark mb-4"
        >
          发展历程
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-pop-dark-light/70 text-lg max-w-[600px] mx-auto"
        >
          十年磨一剑，从中国走向世界
        </motion.p>
      </div>

      <div className="max-w-[900px] mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-pop-pink via-pop-orange to-pop-purple -translate-x-1/2 rounded-full hidden md:block" />

        <div className="space-y-12">
          {timelineItems.map((item, index) => {
            const color = colors[index % 3]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative flex ${isEven ? 'md:justify-end md:pr-[50%]' : 'md:justify-start md:pl-[50%]'} md:px-0 px-0`}
              >
                <div className={`absolute left-1/2 top-1 -translate-x-1/2 w-5 h-5 bg-white border-4 ${color.border} rounded-full z-10 shadow-[0_0_0_6px] ${color.shadow} hidden md:block`} />
                <div className={`bg-white p-6 md:p-[25px_30px] rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[380px] w-full ${isEven ? 'md:mr-10' : 'md:ml-10'}`}>
                  <div className={`text-[0.85rem] font-bold ${color.text} mb-2 tracking-[2px]`}>
                    {item.year}
                  </div>
                  <h4 className="text-[1.2rem] font-bold text-pop-dark mb-2">{item.title}</h4>
                  <p className="text-[0.95rem] text-pop-dark-light/70">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
