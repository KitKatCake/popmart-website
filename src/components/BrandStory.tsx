'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BrandStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="story" className="py-[100px] px-[5%] bg-[#FFF5F8] overflow-hidden">
      <div className="text-center mb-[70px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm font-semibold tracking-[3px] uppercase text-pop-pink mb-4 px-5 py-1.5 bg-pop-pink-light rounded-full"
        >
          Brand Story
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-pop-dark mb-4"
        >
          品牌故事
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-pop-dark-light/70 text-lg max-w-[600px] mx-auto"
        >
          从一家亏损的小杂货店，到全球潮流文化帝国
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] max-w-[1200px] mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=450&fit=crop"
            alt="泡泡玛特门店"
            className="w-full rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
          />
          <div className="absolute -bottom-5 -right-5 bg-white p-6 md:p-[25px_30px] rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            <div className="text-[2.5rem] font-black text-pop-pink leading-none">2010</div>
            <div className="text-sm text-pop-dark-light/70 mt-1">创立于北京</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-[2rem] font-extrabold text-pop-dark mb-5">
            从一间小店到全球帝国
          </h3>
          <p className="text-pop-dark-light/70 mb-[18px] text-[1.05rem]">
            2010年，王宁在北京创立了泡泡玛特。起初，它只是一家销售手机壳、文具和毛绒玩具的小型零售店。但王宁敏锐地察觉到，年轻一代消费者对<strong>情感化消费</strong>的渴望远超对功能性的追求。
          </p>
          <p className="text-pop-dark-light/70 mb-[18px] text-[1.05rem]">
            2015年，泡泡玛特做出了决定性转型——引入盲盒概念，进军设计师玩具领域。灵感来自日本扭蛋文化，盲盒将"未知的惊喜"变成了令人上瘾的消费体验。
          </p>
          <div className="bg-gradient-to-br from-pop-pink-light to-[#FFF0F5] border-l-4 border-pop-pink p-5 md:p-[20px_25px] rounded-r-2xl my-6 italic text-pop-dark">
            "我们不是在卖玩具，我们是在贩卖快乐、惊喜和情感连接。"
          </div>
          <p className="text-pop-dark-light/70 mb-[18px] text-[1.05rem]">
            2016年，泡泡玛特与香港艺术家Kenny Wong合作，推出了核心IP"Molly"——那个有着湖绿色大眼睛和标志性雀斑的女孩。6个月内，Molly系列销售额突破400万美元，彻底改写了中国潮玩市场的格局。
          </p>
          <div className="flex items-center gap-4 mt-8 p-5 bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
            <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-br from-pop-pink to-pop-orange flex items-center justify-center text-white font-bold text-xl shrink-0">
              王
            </div>
            <div>
              <div className="font-bold text-pop-dark">王宁</div>
              <div className="text-sm text-pop-dark-light/70">创始人 / 董事长兼CEO</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
